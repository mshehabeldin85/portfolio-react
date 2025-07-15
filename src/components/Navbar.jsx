import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on homepage → scroll to projects
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to homepage, then scroll after load
      navigate("/", { state: { scrollTo: "projects" } });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          Mahmoud.dev
        </Link>
        <ul className="nav-links">
          <li>
            <a href="/" onClick={handleHomeClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleProjectsClick}>
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
