import generateLicence, {
  GenerateLicenceInterface,
} from "@/utils/generateLicence";
import axios from "axios";
import bcrypt from "bcrypt";
import Joi from "joi";
import * as jose from "jose";
import { NextApiRequest, NextApiResponse } from "next";

export interface GenerateLicenceObjectType extends GenerateLicenceInterface {
  password: string;
}

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

const hashedPassword = process.env.AUTH_PASSWORD ?? "";

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
    const { password, key_id, product_id, product_name, expiration_time } =
      req.body as GenerateLicenceObjectType;
    const schema: Joi.ObjectSchema<any> = Joi.object({
      password: Joi.string().min(8).required(),
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
        password,
        product_id,
        product_name,
      } as GenerateLicenceObjectType,
      schema_options,
    );

    await bcrypt.compare(password, hashedPassword);

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
