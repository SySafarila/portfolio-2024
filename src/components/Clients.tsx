import projectsArr from "@/components/projects";
import Splide, { Options } from "@splidejs/splide";
import Image from "next/image";
import { useEffect } from "react";

const options: Options = {
  rewind: true,
  autoplay: true,
  pagination: false,
  perPage: 5,
  arrows: false,
  type: "loop",
  gap: "1rem",
  breakpoints: {
    770: {
      perPage: 3,
    },
    600: {
      perPage: 2,
    },
  },
};

const Clients = (): JSX.Element => {
  const projects = projectsArr();

  useEffect(() => {
    new Splide(".splide", options).mount();
  }, []);

  return (
    <div id="prev-clients" data-aos="fade-down">
      <h1 className="text-2xl font-bold">Klien Sebelumnya</h1>
      <div className="mt-4">
        <section className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              {projects.map((project) => {
                return (
                  project.logo && (
                    <li className="splide__slide" key={project.name}>
                      {project.url ? (
                        <a href={project.url} target="_blank">
                          <Image
                            src={project.logo}
                            alt={project.name}
                            className="h-20 w-full cursor-pointer object-contain"
                            priority
                          />
                        </a>
                      ) : (
                        <Image
                          src={project.logo}
                          alt={project.name}
                          className="h-20 w-full object-contain"
                          priority
                        />
                      )}
                    </li>
                  )
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Clients;
