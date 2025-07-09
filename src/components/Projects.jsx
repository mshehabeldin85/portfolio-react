import ProjectCard from "./ProjectCard";

function Projects() {
  // Project data as a JavaScript array
  const projectData = [
    {
      title: "DevConnect",
      description:
        "A social profile app for developers to showcase their work and connect with peers.",
      link: "devconnect.html",
    },
    {
      title: "Blogify",
      description:
        "A minimalistic blogging platform with Markdown support and a modern UI.",
      link: "blogify.html",
    },
    {
      title: "Portfolio.dev",
      description:
        "My personal portfolio website to showcase my skills and projects.",
      link: "portfolio-project.html",
    },
    {
      title: "TaskTracker",
      description: "A simple task management app to help you stay productive.",
      link: "tasktracker.html",
    },
  ];

  return (
    <section class="projects" id="projects">
      <div class="container">
        <h2>Projects</h2>
        <div class="projects-grid">
          {projectData.map((project, index) => (
            <ProjectCard
              key={{ index }}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
