import Head from "next/head";
import Navbar from "../Navbar";
import NavbarMenu from "../NavbarMenus";

type PropsType = {
  children: React.ReactElement;
  title?: string;
  description?: string;
  keywords?: string;
};

export default function MainLayout(props: PropsType): JSX.Element {
  return (
    <>
      <Head>
        <title>{props.title ?? "Syahrul Safarila (SySafarila)"}</title>
        <meta
          name="description"
          content={
            props.description ??
            "Saya merupakan lulusan baru dari Universitas Putra Indonesia, Program Studi Teknik Informatika (S1), tahun 2024. Saya memiliki pengalaman lebih dari 2 tahun sebagai freelance programmer, baik secara individu maupun dalam tim. Saat ini, saya terbuka untuk setiap kesempatan kerja, baik di dalam maupun di luar bidang keahlian saya, dengan tujuan memperluas pengalaman serta membangun relasi baru. Saya juga bersedia untuk pindah domisili sesuai dengan kebutuhan pekerjaan."
          }
        />
        <meta
          name="keywords"
          content={
            props.keywords ??
            "website, developer, react js, tailwind css, laravel, sysafarila, syahrul safarila, node js"
          }
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="tailwind">
        <Navbar />
        <Navbar />

        <Navbar />

        <main className="mx-auto mb-20 mt-[61px] grid max-w-screen-lg grid-cols-1 gap-y-5 overflow-x-hidden p-4">
          {props.children}
        </main>
        <NavbarMenu />
      </div>
    </>
  );
}
