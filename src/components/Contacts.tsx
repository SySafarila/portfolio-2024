import githubIcon from "@/icons/github-icon.svg";
import gmailIcon from "@/icons/google-gmail.svg";
import instagramIcon from "@/icons/instagram-icon.svg";
import linkedinIcon from "@/icons/linkedin-icon.svg";
import jobstreetIcon from "@/icons/seek-icon.svg";

import Image from "next/image";

const Contacts = (): JSX.Element => {
  return (
    <div className="flex justify-center gap-2" id="contacts">
      <a
        href="http://instagram.com/sysafarila"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-down"
        data-aos-delay="200"
        className="group relative"
      >
        <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-[calc(50%+32px)] transform whitespace-nowrap rounded border border-gray-300 bg-gray-200 px-2 py-1 text-xs group-hover:block">
          Profil Instagram
        </span>
        <Image src={instagramIcon} alt="instagram" className="h-6 w-6" />
      </a>
      <a
        href="http://github.com/sysafarila"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-down"
        data-aos-delay="250"
        className="group relative"
      >
        <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-[calc(50%+32px)] transform whitespace-nowrap rounded border border-gray-300 bg-gray-200 px-2 py-1 text-xs group-hover:block">
          Profil Github
        </span>
        <Image src={githubIcon} alt="github" className="h-6 w-6" />
      </a>
      <a
        href="https://linkedin.com/in/sysafarila"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-down"
        data-aos-delay="300"
        className="group relative"
      >
        <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-[calc(50%+32px)] transform whitespace-nowrap rounded border border-gray-300 bg-gray-200 px-2 py-1 text-xs group-hover:block">
          Profil LinkedIn
        </span>
        <Image src={linkedinIcon} alt="linkedin" className="h-6 w-6" />
      </a>
      <a
        href="https://id.jobstreet.com/id/profile/syahrul-safarila-NwRL7z5xQY"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-down"
        data-aos-delay="350"
        className="group relative"
      >
        <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-[calc(50%+32px)] transform whitespace-nowrap rounded border border-gray-300 bg-gray-200 px-2 py-1 text-xs group-hover:block">
          Profil JobStreet
        </span>
        <Image src={jobstreetIcon} alt="jobstreet" className="h-6 w-6" />
      </a>
      <a
        href="mailto:business@sysafarila.my.id"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-down"
        data-aos-delay="400"
        className="group relative"
      >
        <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-[calc(50%+32px)] transform whitespace-nowrap rounded border border-gray-300 bg-gray-200 px-2 py-1 text-xs group-hover:block">
          Kirim Email
        </span>
        <Image src={gmailIcon} alt="gmail" className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Contacts;
