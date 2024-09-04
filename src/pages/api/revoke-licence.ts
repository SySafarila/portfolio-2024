import axios from "axios";
import Joi from "joi";
import * as jose from "jose";
import { NextApiRequest, NextApiResponse } from "next";

type BodyType = {
  key_id: string;
};

type GithubJwkType = {
  content: string;
  sha: string;
};

type GithubPUTType = {
  message: string;
  content: string;
  sha: string;
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
    const { key_id } = req.body as BodyType;
    const schema: Joi.ObjectSchema<any> = Joi.object({
      key_id: Joi.string().required(),
    });
    const schema_options: Joi.ValidationOptions = {
      abortEarly: false,
    };

    await schema.validateAsync(
      {
        key_id,
      } as BodyType,
      schema_options,
    );

    const bearerToken: string = `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`;

    const { sha, content } = await getJwksFromGithub();
    const contentDecode: string = atob(content);
    const contentParsed: { keys: jose.JWK[] } = JSON.parse(contentDecode);
    const keys: jose.JWK[] = contentParsed.keys;
    const newKeys: jose.JWK[] = [];
    const kids: string[] = [];

    keys.forEach((key) => {
      if (key.kid) {
        kids.push(key.kid);
      }
      if (key_id != key.kid) {
        newKeys.push(key);
      }
    });

    if (!kids.includes(key_id)) {
      throw new Error("key_id not found");
    }

    const newContent = {
      keys: newKeys,
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

    res.status(200).json({ message: `key_id: "${key_id}" revoked` });
    return;
  } catch (error: any) {
    res.status(400).json({ message: error.message ?? "error" });
    return;
  }
}
