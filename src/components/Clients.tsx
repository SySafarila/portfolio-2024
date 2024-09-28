import { ProjectType } from "@/pages";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import Image from "next/image";

const Clients = ({ projects }: { projects: ProjectType[] }): JSX.Element => {
  const options: Options = {
    rewind: true,
    autoplay: true,
    pagination: false,
    perPage: 5,
    arrows: false,
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
  return (
    <Splide options={options}>
      {projects.map((project) => {
        return (
          project.logo && (
            <SplideSlide key={project.name}>
              <Image
                src={project.logo}
                alt={project.name}
                className="h-20 w-full object-contain"
                priority
              />
            </SplideSlide>
          )
        );
      })}
    </Splide>
  );
};

export default Clients;
