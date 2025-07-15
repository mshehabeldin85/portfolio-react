function DevConnect() {
  return (
    <section className="project-detail">
      <div className="container">
        <h1>Blogify</h1>
        <p className="project-subtitle">
          A minimalistic blogging platform with Markdown support and a modern
          UI.
        </p>

        <img
          src="/img/blogify-placeholder.svg"
          alt="Blogify Screenshot"
          className="project-image"
        />

        <h3>Tech Stack:</h3>
        <ul className="tech-list">
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
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

export default DevConnect;
