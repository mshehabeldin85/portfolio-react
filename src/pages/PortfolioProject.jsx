function PortfolioProject() {
  return (
    <section class="project-detail">
      <div class="container">
        <h1>Protfolio</h1>
        <p class="project-subtitle">
          The portfolio site you're viewing right now. Built wih HTML, CSS, and
          Javascript.
        </p>

        <img
          src="/img/portfolio-placeholder.svg"
          alt="Portfolio Screenshot"
          class="project-image"
        />

        <h3>Tech Stack:</h3>
        <ul class="tech-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Netlify Deployment</li>
        </ul>

        <p>
          <a href="/" class="btn">
            Back to Home
          </a>
        </p>
      </div>
    </section>
  );
}

export default PortfolioProject;
