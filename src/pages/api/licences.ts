import axios from "axios";
import * as jose from "jose";
import { NextApiRequest, NextApiResponse } from "next";

type GithubJwkType = {
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
    const { content } = await getJwksFromGithub();
    const contentDecode: string = atob(content);
    const contentParsed: { keys: jose.JWK[] } = JSON.parse(contentDecode);

    res.status(200).json(contentParsed);
    return;
  } catch (error: any) {
    res.status(400).json({ message: error.message ?? "error" });
    return;
  }
}
