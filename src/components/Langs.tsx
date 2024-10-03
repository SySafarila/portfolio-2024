const Languages = (): JSX.Element => {
  return (
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
  );
};

export default Languages;
