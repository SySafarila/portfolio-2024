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
            "Fresh graduate Teknik Informatika Universitas Putra Indonesia 2024, dengan pengalaman lebih dari 2 tahun sebagai freelance programmer individu maupun tim. Terbuka untuk peluang baru di dalam atau di luar keahlian, dengan tujuan memperluas pengalaman dan jaringan profesional. Siap berkontribusi di berbagai industri dengan kemampuan coding, pemecahan masalah, dan kolaborasi tim."
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

      <Navbar />

      <main className="mx-auto mb-20 mt-[61px] grid max-w-screen-lg grid-cols-1 gap-y-5 overflow-x-hidden p-4">
        {props.children}
      </main>

      <NavbarMenu />
    </>
  );
}
