import MainLayout from "@/components/layouts/MainLayout";
import githubIcon from "@/icons/github-icon.svg";
import gmailIcon from "@/icons/google-gmail.svg";
import instagramIcon from "@/icons/instagram-icon.svg";
import linkedinIcon from "@/icons/linkedin-icon.svg";
import openInNewIcon from "@/icons/open_in_new.svg";
import jobstreetIcon from "@/icons/seek-icon.svg";
import profilePicture from "@/images/safarila.webp";
import GenerateDate from "@/utils/GenerateDate";
import AOS from "aos";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "./_app";

type ProjectType = {
  img?: string;
  name: string;
  position: string;
  url?: string;
  start_date: number;
  end_date?: number;
  description?: string;
};

const Page: NextPageWithLayout = () => {
  const [showAllExp, setShowAllExp] = useState<boolean>(false);
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const projects: ProjectType[] = [
    {
      name: "SMAN 2 Cibinong",
      position: "Full Stack Developer - Tim",
      start_date: 1726246800000,
    },
    {
      name: "julpik.web.id",
      position: "Frontend developer - Individu",
      url: "https://julpik.web.id",
      start_date: 1687453200000,
      description:
        "Merealisasikan desain halaman web dari Figma menjadi HTML siap pakai.",
    },
    {
      img: "/portfolio/mandakiro.png",
      name: "PT. Mandakiro Wastiru Pratara",
      position: "Backend Developer - Tim",
      url: "https://mandakiro.com",
      start_date: 1637773200000,
      end_date: 1640192400000,
      description:
        "Merancang sistem backend hingga melakukan deployment dengan provider hosting lokal.",
    },
    {
      img: "/portfolio/purnama-indonesia.png",
      name: "PT. Purnama Indonesia",
      position: "Backend Developer - Tim",
      url: "https://purnamaindonesia.com",
      start_date: 1708362000000,
      end_date: 1722186000000,
      description:
        "Merancang sistem backend hingga melakukan deployment dengan provider hosting lokal.",
    },
    {
      img: "/portfolio/ng-global-citizens.png",
      name: "NG Global Citizens",
      position: "Frontend Developer - Tim",
      url: "https://ngglobalcitizens.com",
      start_date: 1631206800000,
      end_date: 1638982800000,
      description:
        "Merealisasikan desain halaman web dari Figma menjadi HTML siap pakai.",
    },
    {
      img: "/portfolio/mss.png",
      name: "PT. Mitra Sistem Sinergi",
      position: "Backend & Frontend Developer - Tim",
      url: "https://mitrasistemsinergi.com",
      start_date: 1636131600000,
      end_date: 1670000400000,
      description:
        "Merancang sistem backend hingga melakukan deployment dengan provider hosting lokal.",
    },
    {
      img: "/portfolio/indotrans.png",
      name: "PT. Indotrans Jaya Nusantara",
      position: "Backend & Frontend Developer - Tim",
      url: "https://indotransjayanusantara.com",
      start_date: 1640624400000,
      end_date: 1649005200000,
      description:
        "Merancang sistem backend hingga melakukan deployment dengan provider hosting lokal.",
    },
    {
      img: "/portfolio/acp-indonesia.png",
      name: "PT. Aksesindo Cakrawala Perkasa",
      position: "Backend Developer - Tim",
      url: "https://www.acp-indonesia.com",
      start_date: 1628787600000,
      end_date: 1648054800000,
      description: "Melakukan perbaikan bug pada frontend website.",
    },
    {
      img: "/portfolio/chococandy-bekasi.jpeg",
      name: "Chococandy Bekasi",
      position: "Backend & Frontend Developer - Tim",
      url: "https://chococandybekasi.com",
      start_date: 1644339600000,
      end_date: 1658250000000,
      description:
        "Merancang sistem backend hingga melakukan deployment dengan provider hosting lokal.",
    },
    {
      img: "/portfolio/nsi.jpeg",
      name: "PT. Nobel Sertifikasi Indonesia",
      position: "Backend Developer - Tim",
      url: "https://www.nsicertification.com",
      start_date: 1659718800000,
      end_date: 1670778000000,
      description:
        "Merancang sistem backend hingga melakukan deployment dengan provider hosting lokal.",
    },
    {
      img: "/portfolio/crown.jpeg",
      name: "PT. Crown Certification Indonesia",
      position: "Backend Developer - Tim",
      url: "https://crowncertindo.com",
      start_date: 1657990800000,
      description:
        "Merancang sistem backend hingga melakukan deployment dengan provider hosting lokal.",
    },
    {
      img: "/portfolio/ssi.jpeg",
      name: "PT. Sentral Sistem Indonesia",
      position: "Backend Developer - Tim",
      url: "https://sentralsistemindonesia.com",
      start_date: 1662138000000,
      end_date: 1670000400000,
      description:
        "Merancang sistem backend hingga melakukan deployment dengan provider hosting lokal.",
    },
    {
      img: "/portfolio/simapan.jpeg",
      name: "SIMAPAN Kabupaten Tangerang",
      position: "Backend & Frontend Developer - Tim",
      url: "https://simapan.tangerangkab.go.id",
      start_date: 1669827600000,
      description:
        "Melakukan perbaikan bug dan penambahan fitur di sisi backend dan juga frontend.",
    },
    {
      img: "/portfolio/lunaticastore.jpeg",
      url: "https://www.lunaticastore.id/",
      name: "Lunatica Store",
      position: "Frontend Developer - Tim",
      start_date: 1689354000000,
      end_date: 1703005200000,
      description:
        "Merealisasikan desain halaman web dari Figma menjadi HTML siap pakai.",
    },
    {
      img: "/portfolio/paragraphics-co.jpeg",
      name: "Paragraphics co",
      position: "Frontend Developer - Individu",
      url: "https://paragraphics.co",
      start_date: 1699981200000,
      end_date: 1701277200000,
      description:
        "Merealisasikan desain halaman web dari Figma menjadi template untuk framework Laravel.",
    },
    {
      img: "/portfolio/pkm-bumdescimacan.png",
      name: "PKM Bumdes Cimacan",
      position: "Mentor, Tester, Code Reviewer, and Project Manager - Tim",
      url: "https://pkm-bumdescimacan.com",
      start_date: 1690045200000,
      end_date: 1708102800000,
      description:
        "Mendesain sistem, mengontrol kualitas kode program, hingga berperan untuk berkomunikasi dengan client",
    },
    {
      img: "/portfolio/presences.png",
      name: "Realtime Presences",
      position: "Full Stack Developer - Tugas Kampus - Individu",
      start_date: 1635699600000,
    },
    {
      img: "/portfolio/ruangame.png",
      name: "RuanGame by SySafarila",
      position: "Full Stack Developer - Individu",
      url: "https://www.ruangame.biz.id",
      start_date: 1711904400000,
      description: "Merancang sistem dari nol sebagai Fullstack Developer.",
    },
    {
      img: "/portfolio/react-pwa.png",
      name: "React PWA",
      position: "Frontend Developer - Tugas Kampus - Individu",
      url: "https://pwa-convertions.sysafarila.my.id",
      start_date: 1706720400000,
    },
    {
      img: "/portfolio/js-paginate.png",
      name: "JS-Paginate (NPM Package)",
      position: "Backend Developer - Individu",
      url: "https://www.npmjs.com/package/@sysafarila/js-paginate",
      start_date: 1712595600000,
      end_date: 1714410000000,
      description:
        "Membuat package JavaScript/Node.JS untuk melakukan pagination.",
    },
  ];

  projects.sort((a, b) => {
    return b.start_date - a.start_date;
  });

  return (
    <>
      <div className="grid grid-cols-1 gap-y-5" data-aos="fade-down">
        <Image
          src={profilePicture}
          alt="Syahrul Safarila's photo"
          className="mx-auto h-40 w-40 rounded-full"
          priority
        />
        <div>
          <h2 className="text-center text-2xl font-bold">Syahrul Safarila</h2>
          {/* <h3 className="text-center">Fullstack Programmer</h3> */}
        </div>
      </div>
      <p
        className="mx-auto max-w-screen-sm text-center"
        id="summary"
        data-aos="fade-down"
        data-aos-delay="150"
      >
        Saya seorang <i>fresh graduate</i> dari Universitas Putra Indonesia yang
        lulus pada tahun 2024 dengan program studi Teknik Informatika (S1) yang
        berpengalaman lebih dari 2 tahun sebagai
        <i> freelance programmer</i> secara individu ataupun dalam kelompok/tim.
        Untuk saat ini, Saya membuka diri untuk setiap kesempatan apapun di
        dalam ataupun di luar keahlian Saya dengan tujuan mencari pengalaman dan
        relasi baru.
      </p>
      <div className="flex justify-center gap-2" id="contacts">
        <a
          href="http://instagram.com/sysafarila"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-down"
          data-aos-delay="200"
          className="group relative"
        >
          <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-[calc(50%+32px)] transform whitespace-nowrap rounded bg-gray-200 px-2 py-1 text-xs group-hover:block">
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
          <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-[calc(50%+32px)] transform whitespace-nowrap rounded bg-gray-200 px-2 py-1 text-xs group-hover:block">
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
          <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-[calc(50%+32px)] transform whitespace-nowrap rounded bg-gray-200 px-2 py-1 text-xs group-hover:block">
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
          <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-[calc(50%+32px)] transform whitespace-nowrap rounded bg-gray-200 px-2 py-1 text-xs group-hover:block">
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
          <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-[calc(50%+32px)] transform whitespace-nowrap rounded bg-gray-200 px-2 py-1 text-xs group-hover:block">
            Kirim Email
          </span>
          <Image src={gmailIcon} alt="gmail" className="h-6 w-6" />
        </a>
      </div>
      <div id="lang">
        <h1 className="text-2xl font-bold" data-aos="fade-down">
          Bahasa
        </h1>
        <div className="mt-2 flex flex-wrap justify-start gap-1">
          <span
            className="whitespace-nowrap rounded-md bg-gray-200 px-3 py-1 capitalize"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Bahasa Indonesia
          </span>
          <span
            className="whitespace-nowrap rounded-md bg-gray-200 px-3 py-1 capitalize"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            Bahasa Sunda
          </span>
          <span
            className="whitespace-nowrap rounded-md bg-gray-200 px-3 py-1 capitalize"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Bahasa Inggris
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-5" id="track-records">
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
        <div id="edu" data-aos="fade-down">
          <h1 className="text-2xl font-bold">Pendidikan</h1>
          <div className="relative mt-2 grid grid-cols-1 overflow-y-hidden">
            <div className="relative flex gap-2">
              <div className="relative z-[11] mt-[6px] h-6 w-6 flex-shrink-0 rounded-full bg-gray-500"></div>
              <div className="absolute left-[0.7rem] top-4 z-10 h-full w-[1px] bg-black"></div>
              <div className="mb-4">
                <h2 className="font-bold">
                  Universitas Putra Indonesia Cianjur
                </h2>
                <h2 className="text-sm">Teknik Informatika (S1)</h2>
                <p className="max-w-screen-md">
                  Mahasiswa Universitas Putra Indonesia (UNPI) Cianjur dengan
                  program studi Teknik Informatika (S1), dan lulus tepat waktu
                  dengan predikat &quot;Sangat Memuaskan&quot;.
                </p>
                <span>2020 - 2024</span>
              </div>
            </div>
            <div className="relative flex gap-2">
              <div className="relative z-[11] mt-[6px] h-6 w-6 flex-shrink-0 rounded-full bg-gray-500"></div>
              <div className="absolute left-[0.7rem] top-4 z-10 h-full w-[1px] bg-black"></div>
              <div className="mb-4">
                <h2 className="font-bold">SMK PGRI 2 Cianjur</h2>
                <h2 className="text-sm">Rekayasa Perangkat Lunak (RPL)</h2>
                <p className="max-w-screen-md">
                  Siswa SMK PGRI 2 Cianjur dengan jurusan Rekayasa Perangkat
                  Lunak (RPL) yang fokus dalam perancangan perangkat lunak
                  terutama pada platform <i>website</i>.
                </p>
                <span>2017 - 2020</span>
              </div>
            </div>
            <div className="relative flex gap-2">
              <div className="relative z-[11] mt-[6px] h-6 w-6 flex-shrink-0 rounded-full bg-gray-500"></div>
              <div className="absolute left-[0.7rem] top-4 z-10 h-full w-[1px] bg-black"></div>
              <div className="mb-4">
                <h2 className="font-bold">SMPN 1 Warungkondang</h2>
                <p className="max-w-screen-md">Tidak ada deskripsi.</p>
                <span>2014 - 2017</span>
              </div>
            </div>
            <div className="relative flex gap-2">
              <div className="relative z-[11] mt-[6px] h-6 w-6 flex-shrink-0 rounded-full bg-gray-500"></div>
              <div>
                <h2 className="font-bold">SDN 1 Bunikasih</h2>
                <p className="max-w-screen-md">Tidak ada deskripsi.</p>
                <span>2008 - 2014</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Page.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
