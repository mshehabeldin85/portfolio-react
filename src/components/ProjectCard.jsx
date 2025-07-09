function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="btn">
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
