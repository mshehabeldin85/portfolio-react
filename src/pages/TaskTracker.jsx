function DevConnect() {
  return (
    <section className="project-detail">
      <div className="container">
        <h1>TaskTracker</h1>
        <p className="project-subtitle">
          A productivity app to manage daily tasks with drag-and-drop features.
        </p>

        <img
          src="/img/tasktracker-placeholder.svg"
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
