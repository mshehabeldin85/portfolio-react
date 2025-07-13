function DevConnect() {
  return (
    <section className="project-detail">
      <div className="container">
        <h1>DevConnect</h1>
        <p className="project-subtitle">
          A social profile app for developers to showcase their work and connect
          with peers.
        </p>

        <img
          src="/img/devconnect-placeholder.svg"
          alt="DevConnect Screenshot"
          className="project-image"
        />

        <h3>Tech Stack:</h3>
        <ul className="tech-list">
          <li>React.js</li>
          <li>ASP.NET Core API</li>
          <li>SQL Server</li>
          <li>Azure Deployment</li>
        </ul>

        <a href="/" className="btn">
          Back to Home
        </a>
      </div>
    </section>
  );
}

export default DevConnect;
