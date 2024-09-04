import * as jose from "jose";

export interface GenerateLicenceInterface {
  key_id: string;
  product_name: string;
  product_id: string;
  expiration_time?: string;
}

const generateLicence = async (
  values: GenerateLicenceInterface
): Promise<{ jwk: jose.JWK; jwt: string }> => {
  if (!values.key_id || !values.product_name || !values.product_id) {
    throw new Error(
      "key_id, product_name, and product_id parameters are required"
    );
  }

  const { publicKey, privateKey } = await jose.generateKeyPair("RS256");
  const publicJwk: jose.JWK = await jose.exportJWK(publicKey);
  let jwt: string = "";
  if (values.expiration_time) {
    jwt = await new jose.SignJWT({
      product_id: values.product_id,
    })
      .setProtectedHeader({ alg: "RS256", kid: values.key_id })
      .setIssuedAt()
      .setIssuer("SySafarila")
      .setSubject(values.product_name)
      .setExpirationTime(values.expiration_time)
      .sign(privateKey);
  } else {
    jwt = await new jose.SignJWT({
      product_id: values.product_id,
    })
      .setProtectedHeader({ alg: "RS256", kid: values.key_id })
      .setIssuedAt()
      .setIssuer("SySafarila")
      .setSubject(values.product_name)
      .sign(privateKey);
  }

  publicJwk["kid"] = values.key_id;
  publicJwk["use"] = "sig";
  publicJwk["alg"] = "RS256";

  return { jwk: publicJwk, jwt };
};

export default generateLicence;
