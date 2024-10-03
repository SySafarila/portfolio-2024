import projectsArr from "@/components/projects";
import openInNewIcon from "@/icons/open_in_new.svg";
import GenerateDate from "@/utils/GenerateDate";
import Image from "next/image";
import { useState } from "react";

const Experiences = (): JSX.Element => {
  const [showAllExp, setShowAllExp] = useState<boolean>(false);
  const projects = projectsArr();
  return (
    <div id="exp" data-aos="fade-down">
      <h1 className="text-2xl font-bold">Pengalaman</h1>
      <div className="relative mt-2 grid grid-cols-1 overflow-y-hidden">
        {projects.map((project, index) => (
          <div
            className={`relative flex gap-2 ${index > 5 && showAllExp == false ? "hidden" : ""}`}
            key={`${project.start_date}-${project.name}`}
          >
            <div className="relative z-[11] mt-[6px] h-6 w-6 flex-shrink-0 rounded-full bg-gray-500 pt-0.5 text-center text-sm text-white">
              {projects.length - index}
            </div>
            {projects.length > index + 1 && (
              <div className="absolute left-[0.7rem] top-4 z-10 h-full w-[1px] bg-black"></div>
            )}
            <div className="mb-4">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  className="flex gap-1 font-bold capitalize hover:underline"
                >
                  <span>{project.name}</span>
                  <Image
                    src={openInNewIcon}
                    alt="open link"
                    className="h-[14px] w-[14px]"
                  />
                </a>
              ) : (
                <h2 className="font-bold">{project.name}</h2>
              )}
              <h2 className="text-sm">{project.position}</h2>
              <p className="max-w-screen-md">
                {project.description ?? "Tidak ada deskripsi"}
              </p>
              <span className="capitalize">
                {/* {project.date} */}
                <GenerateDate raw_date={project.start_date} />{" "}
                {project.end_date && (
                  <span>
                    - <GenerateDate raw_date={project.end_date} />
                  </span>
                )}
              </span>
            </div>
          </div>
        ))}
        <button
          type="button"
          className={`${!showAllExp && "mt-8"} rounded-lg border bg-white px-5 py-2 uppercase hover:bg-gray-100`}
          onClick={() => setShowAllExp(!showAllExp)}
        >
          {showAllExp ? "Tampilkan Beberapa" : "Tampilkan Semua"}
        </button>
      </div>
    </div>
  );
};

export default Experiences;
