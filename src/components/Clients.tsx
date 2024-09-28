import { ProjectType } from "@/pages";
import Splide, { Options } from "@splidejs/splide";
import Image from "next/image";
import { useEffect } from "react";

const Clients = ({ projects }: { projects: ProjectType[] }): JSX.Element => {
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

  useEffect(() => {
    new Splide(".splide", options).mount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
  );
};

export default Clients;
