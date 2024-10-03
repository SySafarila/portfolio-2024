const Educations = (): JSX.Element => {
  return (
    <div id="edu" data-aos="fade-down">
      <h1 className="text-2xl font-bold">Pendidikan</h1>
      <div className="relative mt-2 grid grid-cols-1 overflow-y-hidden">
        <div className="relative flex gap-2">
          <div className="relative z-[11] mt-[6px] h-6 w-6 flex-shrink-0 rounded-full bg-gray-500"></div>
          <div className="absolute left-[0.7rem] top-4 z-10 h-full w-[1px] bg-black"></div>
          <div className="mb-4">
            <h2 className="font-bold">Universitas Putra Indonesia Cianjur</h2>
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
              Siswa SMK PGRI 2 Cianjur dengan jurusan Rekayasa Perangkat Lunak
              (RPL) yang fokus dalam perancangan perangkat lunak terutama pada
              platform <i>website</i>.
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
  );
};

export default Educations;
