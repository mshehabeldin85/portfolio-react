function Projects() {
  return (
      <section class="projects" id="projects">
        <div class="container">
          <h2>Projects</h2>

          <div class="projects-grid">
            <div class="project-card">
              <h3>DevConnect</h3>
              <p>
                A social profile app for developers to showcase their work and
                connect with peers.
              </p>
              <a href="devconnect.html" class="btn">View Project</a>
            </div>

            <div class="project-card">
              <h3>Portfolio.dev</h3>
              <p>
                The portfolio site you're viewing right now. Built wih HTML,
                CSS, and Javascript.
              </p>
              <a href="portfolio-project.html" class="btn">View Project</a>
            </div>

            <div class="project-card">
              <h3>Blogify</h3>
              <p>
                A minimalistic blogging platform with Markdown support and a
                modern UI.
              </p>
              <a href="blogify.html" class="btn">View Project</a>
            </div>

            <div class="project-card">
              <h3>TaskTracker</h3>
              <p>
                A productivity app to manage daily tasks with drag-and-drop
                features.
              </p>
              <a href="tasktracker.html" class="btn">View Project</a>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Projects;
