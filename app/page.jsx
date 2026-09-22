export default function Home() {
  return (
    <>
      <section id="about" className="hero">
        <h1>Hi, I'm a Developer</h1>
        <p>Welcome to my minimalist portfolio built with Next.js and Node.js.</p>
      </section>

      <section id="projects">
        <h2>Featured Projects</h2>
        <div className="projects">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A web application built using React and Node.js with a sleek UI.</p>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>A full-stack e-commerce platform featuring secure payments.</p>
          </div>
          <div className="project-card">
            <h3>Project Three</h3>
            <p>An open-source API for real-time data fetching and analysis.</p>
          </div>
        </div>
      </section>
    </>
  );
}
