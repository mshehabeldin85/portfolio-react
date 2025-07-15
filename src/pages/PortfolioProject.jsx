function PortfolioProject() {
  return (
    <section className="project-detail">
      <div className="container">
        <h1>Protfolio</h1>
        <p className="project-subtitle">
          The portfolio site you're viewing right now. Built wih HTML, CSS, and
          Javascript.
        </p>

        <img
          src="/img/portfolio-placeholder.svg"
          alt="Portfolio Screenshot"
          className="project-image"
        />

        <h3>Tech Stack:</h3>
        <ul className="tech-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Netlify Deployment</li>
        </ul>

        <p>
          <a href="/" className="btn">
            Back to Home
          </a>
        </p>
      </div>
    </section>
  );
}

export default PortfolioProject;
