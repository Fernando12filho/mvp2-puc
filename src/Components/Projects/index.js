import "./style.css";
import React, { useEffect, useState } from "react";
import projectsList from "../Helper/projects.json";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsList);
  }, []);

  return (
    <div className="project-container">
      {projects.map((project) => (
        <div key={project.id} className="card">
          <h3 className="card-title">{project.title}</h3>
          <div className="image-container">
            <a href={project.link}>
              <img
                src={project.image}
                alt={project.title}
                className="card-image"
              />
            </a>
          </div>
          <p className="card-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
