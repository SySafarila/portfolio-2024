import generateLicence, {
  GenerateLicenceInterface,
} from "@/utils/generateLicence";
import axios from "axios";
import Joi from "joi";
import * as jose from "jose";
import { NextApiRequest, NextApiResponse } from "next";

type GithubJwkType = {
  content: string;
  sha: string;
};

type GithubPUTType = {
  message: string;
  content: string;
  sha: string;
};

export type GenerateLicenceSuccess = {
  message: string;
  licence_key: string;
};

export type GenerateLicenceFail = {
  message: string;
};

const getJwksFromGithub = async (): Promise<GithubJwkType> => {
  const bearerToken: string = `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`;
  const getJwks = await axios.get(process.env.JWK_SOURCE!, {
    headers: {
      Accept: "application/json",
      Authorization: bearerToken,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return getJwks.data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { key_id, product_id, product_name, expiration_time } =
      req.body as GenerateLicenceInterface;
    const schema: Joi.ObjectSchema<GenerateLicenceInterface> = Joi.object({
      key_id: Joi.string().required(),
      product_id: Joi.string().required(),
      product_name: Joi.string().required(),
      expiration_time: Joi.optional(),
    });
    const schema_options: Joi.ValidationOptions = {
      abortEarly: false,
    };

    await schema.validateAsync(
      {
        expiration_time,
        key_id,
        product_id,
        product_name,
      } as GenerateLicenceInterface,
      schema_options,
    );

    const bearerToken: string = `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`;

    const { sha, content } = await getJwksFromGithub();
    const contentDecode: string = atob(content);
    const contentParsed: { keys: jose.JWK[] } = JSON.parse(contentDecode);
    const keys: jose.JWK[] = contentParsed.keys;
    const kids: string[] = [];

    keys.forEach((key) => {
      if (key.kid) {
        kids.push(key.kid);
      }
    });

    if (kids.includes(key_id)) {
      throw new Error("key_id duplicate");
    }

    const { jwk, jwt } = await generateLicence({
      key_id,
      product_id,
      product_name,
      expiration_time,
    });

    keys.push(jwk);

    const newContent = {
      keys: keys,
    };
    const newContentBase64: string = btoa(JSON.stringify(newContent));

    const putPayload: GithubPUTType = {
      message: "A commit from sysafarila.my.id by 🤖",
      content: newContentBase64,
      sha: sha,
    };

    await axios.put(process.env.JWK_SOURCE!, putPayload, {
      headers: {
        Accept: "application/json",
        Authorization: bearerToken,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return res.status(200).json({
      message: "Here is your licence key",
      licence_key: jwt,
    } as GenerateLicenceSuccess);
  } catch (error: any) {
    return res
      .status(400)
      .json({ message: error.message ?? "error" } as GenerateLicenceFail);
  }
}
