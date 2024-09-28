import AcpLogo from "@/images/clients/acp.png";
import PkmLogo from "@/images/clients/bumdes-cimacan.png";
import ChococandyLogo from "@/images/clients/chococandy.png";
import CrownLogo from "@/images/clients/crowncertindo.png";
import IndotransLogo from "@/images/clients/indotrans.png";
import JulpikLogo from "@/images/clients/julpik.svg";
import LunaticaLogo from "@/images/clients/lunatica.png";
import MandakiroLogo from "@/images/clients/mandakiro.svg";
import MssLogo from "@/images/clients/mss.png";
import NgLogo from "@/images/clients/ng global.png";
import NsiLogo from "@/images/clients/nsi.jpg";
import ParagraphicLogo from "@/images/clients/paragraphic.webp";
import PurnamaLogo from "@/images/clients/purnama.png";
import SimapanLogo from "@/images/clients/simapan.png";
import Sman2CibinongLogo from "@/images/clients/sman2-cibinong.png";
import SsiLogo from "@/images/clients/ssi.png";
import { StaticImageData } from "next/image";

export type ProjectType = {
  img?: string;
  name: string;
  position: string;
  url?: string;
  start_date: number;
  end_date?: number;
  description?: string;
  logo?: StaticImageData;
  is_logo_white?: boolean;
};

const projects = (): ProjectType[] => {
  const projectsArr: ProjectType[] = [
    {
      name: "SMAN 2 Cibinong",
      position: "Full Stack Developer - Tim",
      start_date: 1726246800000,
      logo: Sman2CibinongLogo,
      description: "Rebuild website SMA Negeri 2 Cibinong.",
    },
    {
      name: "julpik.web.id",
      position: "Frontend developer - Individu",
      url: "https://julpik.web.id",
      start_date: 1687453200000,
      description:
        "Merealisasikan desain halaman web dari Figma menjadi HTML siap pakai.",
      logo: JulpikLogo,
      is_logo_white: true,
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
      logo: MandakiroLogo,
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
      logo: PurnamaLogo,
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
      logo: NgLogo,
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
      logo: MssLogo,
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
      logo: IndotransLogo,
    },
    {
      img: "/portfolio/acp-indonesia.png",
      name: "PT. Aksesindo Cakrawala Perkasa",
      position: "Backend Developer - Tim",
      url: "https://www.acp-indonesia.com",
      start_date: 1628787600000,
      end_date: 1648054800000,
      description: "Melakukan perbaikan bug pada frontend website.",
      logo: AcpLogo,
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
      logo: ChococandyLogo,
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
      logo: NsiLogo,
    },
    {
      img: "/portfolio/crown.jpeg",
      name: "PT. Crown Certification Indonesia",
      position: "Backend Developer - Tim",
      url: "https://crowncertindo.com",
      start_date: 1657990800000,
      description:
        "Merancang sistem backend hingga melakukan deployment dengan provider hosting lokal.",
      logo: CrownLogo,
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
      logo: SsiLogo,
    },
    {
      img: "/portfolio/simapan.jpeg",
      name: "SIMAPAN Kabupaten Tangerang",
      position: "Backend & Frontend Developer - Tim",
      url: "https://simapan.tangerangkab.go.id",
      start_date: 1669827600000,
      description:
        "Melakukan perbaikan bug dan penambahan fitur di sisi backend dan juga frontend.",
      logo: SimapanLogo,
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
      logo: LunaticaLogo,
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
      logo: ParagraphicLogo,
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
      logo: PkmLogo,
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

  projectsArr.sort((a, b) => {
    return b.start_date - a.start_date;
  });

  return projectsArr;
};

export default projects;
