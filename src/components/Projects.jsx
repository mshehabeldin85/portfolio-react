import ProjectCard from "./ProjectCard";

function Projects() {
  // Project data as a JavaScript array
  const projectData = [
    {
      id: 1,
      title: "DevConnect",
      description:
        "A social profile app for developers to showcase their work and connect with peers.",
      link: "devconnect",
    },
    {
      id: 2,
      title: "Blogify",
      description:
        "A minimalistic blogging platform with Markdown support and a modern UI.",
      link: "blogify",
    },
    {
      id: 3,
      title: "Portfolio.dev",
      description:
        "My personal portfolio website to showcase my skills and projects.",
      link: "portfolio-project",
    },
    {
      id: 4,
      title: "TaskTracker",
      description: "A simple task management app to help you stay productive.",
      link: "tasktracker",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectData.map((project) => (
            <ProjectCard
              key={ project.id }
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
