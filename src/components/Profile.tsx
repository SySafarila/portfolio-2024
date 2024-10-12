import profilePicture from "@/images/safarila.webp";
import Image from "next/image";
import Link from "next/link";

const Profile = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-y-5" data-aos="fade-down">
      <Image
        src={profilePicture}
        alt="Syahrul Safarila's photo"
        className="mx-auto h-40 w-40 rounded-full"
        priority
      />
      <div>
        <h2 className="text-center text-2xl font-bold">Syahrul Safarila</h2>
      </div>
      <p
        className="mx-auto max-w-screen-sm text-center"
        id="summary"
        data-aos="fade-down"
        data-aos-delay="150"
      >
        Saya merupakan lulusan baru dari Universitas Putra Indonesia, Program
        Studi Teknik Informatika (S1), tahun 2024. Saya memiliki pengalaman
        lebih dari 2 tahun sebagai <i>freelance programmer</i>, baik secara
        individu maupun dalam tim. Saat ini, saya terbuka untuk setiap
        kesempatan kerja, baik di dalam maupun di luar bidang keahlian saya,
        dengan tujuan memperluas pengalaman serta membangun relasi baru. Saya
        juga bersedia untuk pindah domisili sesuai dengan kebutuhan pekerjaan.
      </p>
      <div className="flex justify-center">
        <Link
          className="flex items-center gap-1 whitespace-nowrap rounded-md bg-gray-200 px-3 py-1 capitalize hover:bg-gray-300"
          data-aos="fade-down"
          data-aos-delay="150"
          href="/files/resume.pdf"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <path d="M16.59,9H15V4c0-0.55-0.45-1-1-1h-4C9.45,3,9,3.45,9,4v5H7.41c-0.89,0-1.34,1.08-0.71,1.71l4.59,4.59 c0.39,0.39,1.02,0.39,1.41,0l4.59-4.59C17.92,10.08,17.48,9,16.59,9z M5,19c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1s-0.45-1-1-1H6 C5.45,18,5,18.45,5,19z" />
            </g>
          </svg>
          <span className="pb-0.5">Download Resume (PDF)</span>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
