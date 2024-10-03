import profilePicture from "@/images/safarila.webp";
import Image from "next/image";

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
        Saya seorang <i>fresh graduate</i> dari Universitas Putra Indonesia yang
        lulus pada tahun 2024 dengan program studi Teknik Informatika (S1) yang
        berpengalaman lebih dari 2 tahun sebagai
        <i> freelance programmer</i> secara individu ataupun dalam kelompok/tim.
        Untuk saat ini, Saya membuka diri untuk setiap kesempatan apapun di
        dalam ataupun di luar keahlian Saya dengan tujuan mencari pengalaman dan
        relasi baru.
      </p>
    </div>
  );
};

export default Profile;
