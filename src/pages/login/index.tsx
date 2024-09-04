import MainLayout from "@/components/layouts/MainLayout";
import AOS from "aos";
import axios from "axios";
import Joi from "joi";
import { ReactElement, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NextPageWithLayout } from "../_app";

type LoginType = {
  email: string;
  password: string;
};

const Page: NextPageWithLayout = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const { register, handleSubmit } = useForm<LoginType>();

  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    try {
      const { password, email } = data as LoginType;
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
        } as LoginType,
        schema_options,
      );

      await axios.post("/api/login", { password, email });

      window.location.reload();
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div id="licence-form">
      <h1 className="text-2xl font-bold" data-aos="fade-down">
        Login
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-2 grid grid-cols-1 gap-2"
        data-aos="fade-down"
      >
        <div className="grid grid-cols-1 gap-1">
          <label htmlFor="email" className="font-bold">
            Email*
          </label>
          <input
            type="email"
            id="email"
            className="rounded-md border px-3 py-2"
            {...register("email", { required: true })}
            placeholder="Email"
          />
        </div>
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
        <button className="rounded-lg border bg-white px-5 py-2 uppercase hover:bg-gray-100">
          Login
        </button>
      </form>
    </div>
  );
};

Page.getLayout = (page: ReactElement) => {
  return <MainLayout title="Login Page">{page}</MainLayout>;
};

export default Page;
