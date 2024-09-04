import bcrypt from "bcrypt";
import { serialize } from "cookie";
import Joi from "joi";
import * as jose from "jose";
import { NextApiRequest, NextApiResponse } from "next";

export interface LoginObject {
  email: string;
  password: string;
}

const hashedPassword = process.env.AUTH_PASSWORD ?? "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { password, email } = req.body as LoginObject;
    const schema: Joi.ObjectSchema<any> = Joi.object({
      password: Joi.string().min(8).required(),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    });
    const schema_options: Joi.ValidationOptions = {
      abortEarly: false,
    };

    await schema.validateAsync(
      {
        password,
        email,
      } as LoginObject,
      schema_options,
    );

    if (
      email == "sysafarila.official@gmail.com" &&
      (await bcrypt.compare(password, hashedPassword))
    ) {
      const secret = new TextEncoder().encode(password);

      const jwt = await new jose.SignJWT({
        user_id: 1,
      })
        .setExpirationTime("3h")
        .setIssuer(email)
        .setProtectedHeader({ alg: "HS256" })
        .sign(secret);

      res
        .status(200)
        .setHeader(
          "Set-Cookie",
          serialize("access_token", jwt, {
            path: "/",
            maxAge: 60 * 60 * 3, // 3 hours expiration
            httpOnly: true,
            secure: true,
          }),
        )
        .json({ message: "Login success" });
      return;
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error: any) {
    res.status(401).json({ message: error.message ?? "error" });
    return;
  }
}
