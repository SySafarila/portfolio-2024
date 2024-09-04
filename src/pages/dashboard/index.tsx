import MainLayout from "@/components/layouts/MainLayout";
import AOS from "aos";
import axios, { AxiosError } from "axios";
import Joi from "joi";
import * as jose from "jose";
import { ReactElement, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NextPageWithLayout } from "../_app";
import {
  GenerateLicenceFail,
  GenerateLicenceObjectType,
  GenerateLicenceSuccess,
} from "../api/generate-licence";

const Page: NextPageWithLayout = () => {
  const [licences, setLicences] = useState<jose.JWK[]>([]);
  const [generateReady, setGenerateReady] = useState<boolean>(true);
  const [generatedLicence, setGeneratedLicence] = useState<string>("");

  useEffect(() => {
    AOS.init({
      once: true,
    });
    getLicences();
  }, []);

  const { register, handleSubmit } = useForm<GenerateLicenceObjectType>();

  const onSubmit: SubmitHandler<GenerateLicenceObjectType> = async (data) => {
    if (!generateReady) {
      return;
    }
    try {
      setGenerateReady(false);
      const { password, key_id, product_id, product_name, expiration_time } =
        data as GenerateLicenceObjectType;
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

      const res: { data: GenerateLicenceSuccess } = await axios.post(
        "/api/generate-licence",
        data,
      );

      alert("Licence generated successfully");
      setGenerateReady(true);
      setGeneratedLicence(res.data.licence_key);
      getLicences();
    } catch (error: any) {
      setGenerateReady(true);
      if (error instanceof AxiosError) {
        const response: GenerateLicenceFail = error.response?.data;
        alert(response.message);
      } else {
        alert(error.message);
      }
    }
  };

  const logout = async () => {
    try {
      await axios.post("/api/logout");
      window.location.reload();
    } catch (error: any) {
      alert(error.message);
    }
  };

  const getLicences = async () => {
    const res = await axios.get("/api/licences");
    const licences: { keys: jose.JWK[] } = res.data;
    setLicences(licences.keys);
  };

  const revokeLicence = async (kid: string) => {
    const verify = window.confirm("Confirm to revoke");
    if (!verify) {
      return;
    }
    try {
      await axios.post("/api/revoke-licence", { key_id: kid });
      await getLicences();
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.message);
      }
    }
  };

  return (
    <>
      <div id="licence-form">
        <h1 className="text-2xl font-bold" data-aos="fade-down">
          Generate Licence
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-2 grid grid-cols-1 gap-2"
          data-aos="fade-down"
        >
          <div className="grid grid-cols-1 gap-1">
            <label htmlFor="password" className="font-bold">
              Password*
            </label>
            <input
              type="password"
              id="password"
              className="rounded-md border px-3 py-2"
              {...register("password", { required: true, minLength: 8 })}
              placeholder="Password"
            />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label htmlFor="key_id" className="font-bold">
              Key ID*
            </label>
            <input
              type="text"
              id="key_id"
              className="rounded-md border px-3 py-2"
              {...register("key_id", { required: true })}
              placeholder="key_id"
            />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label htmlFor="product_name" className="font-bold">
              Product Name*
            </label>
            <input
              type="text"
              id="product_name"
              className="rounded-md border px-3 py-2"
              {...register("product_name", { required: true })}
              placeholder="product_name"
            />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label htmlFor="product_id" className="font-bold">
              Product ID*
            </label>
            <input
              type="text"
              id="product_id"
              className="rounded-md border px-3 py-2"
              {...register("product_id", { required: true })}
              placeholder="product_id"
            />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <label htmlFor="expiration_time" className="font-bold">
              Expiration Time
            </label>
            <input
              type="text"
              id="expiration_time"
              className="rounded-md border px-3 py-2"
              {...register("expiration_time")}
              placeholder="Exp: 1h"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg border bg-white px-5 py-2 uppercase hover:bg-gray-100"
          >
            Generate
          </button>
          <button
            type="button"
            onClick={logout}
            className="rounded-lg border bg-white px-5 py-2 uppercase hover:bg-gray-100"
          >
            Logout
          </button>
          <p>Generated licence: {generatedLicence}</p>
        </form>
      </div>
      <div id="licence-form">
        <h1 className="text-2xl font-bold" data-aos="fade-down">
          Generated Licences
        </h1>
        <div className="mt-2 grid grid-cols-1 gap-2">
          {licences.map((licence) => (
            <span key={licence.kid}>
              {licence.kid} |{" "}
              <button
                type="button"
                className="text-red-500 hover:text-red-700"
                onClick={() => revokeLicence(licence.kid!)}
              >
                Revoke
              </button>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

Page.getLayout = (page: ReactElement) => {
  return <MainLayout title="Dashboard Page">{page}</MainLayout>;
};

export default Page;
