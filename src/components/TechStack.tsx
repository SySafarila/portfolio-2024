const TechStack = (): JSX.Element => {
  return (
    <div id="skills">
      <h1 className="text-2xl font-bold" data-aos="fade-down">
        Skill
      </h1>
      <div className="mt-2 grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
        <div data-aos="fade-left">
          <span className="font-semibold">Front-end:</span>
          <ul className="list-inside list-disc ml-1">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Vue.js</li>
            <li>Nuxt.js</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap CSS</li>
          </ul>
        </div>
        <div data-aos="fade-left">
          <span className="font-semibold">Back-end:</span>
          <ul className="list-inside list-disc ml-1">
            <li>PHP</li>
            <li>Laravel</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Relational Database</li>
            <li>NoSQL</li>
          </ul>
        </div>
        <div data-aos="fade-left">
          <span className="font-semibold">Lain-lain:</span>
          <ul className="list-inside list-disc ml-1">
            <li>TypeScript</li>
            <li>Docker</li>
            <li>Webpack</li>
            <li>CI/CD</li>
            <li>GitHub Actions</li>
            <li>GIT</li>
            <li>Office (Microsoft & Alternatif)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
