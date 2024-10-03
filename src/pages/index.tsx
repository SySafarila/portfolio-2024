import Clients from "@/components/Clients";
import Contacts from "@/components/Contacts";
import Educations from "@/components/Educations";
import Experiences from "@/components/Experiences";
import Languages from "@/components/Langs";
import MainLayout from "@/components/layouts/MainLayout";
import Profile from "@/components/Profile";
import AOS from "aos";
import React, { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Profile />
      <Contacts />
      <Languages />
      <div className="grid grid-cols-1 gap-y-5" id="track-records">
        <Experiences />
        <Educations />
        <Clients />
      </div>
    </>
  );
};

Page.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
