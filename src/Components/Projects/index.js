// Importação de arquivos CSS para estilização e bibliotecas React.
import "./style.css";
import React, { useEffect, useState } from "react";

// Importa a lista de projetos a partir de um arquivo JSON.
import projectsList from "../Helper/projects.json";

// Componente funcional que exibe uma lista de projetos em um layout de cartão.
function Projects() {
  // Estado para armazenar a lista de projetos.
  const [projects, setProjects] = useState([]);

  // useEffect é usado para inicializar o estado 'projects' com os dados do arquivo JSON.
  useEffect(() => {
    setProjects(projectsList);
  }, []); // O array vazio significa que o efeito será executado apenas uma vez.

  return (
    <div className="project-container">
      {/* Mapeia a lista de projetos para criar um cartão para cada um */}
      {projects.map((project) => (
        <div key={project.id} className="card">
          {/* Título do projeto */}
          <h3 className="card-title">{project.title}</h3>

          {/* Imagem do projeto com link */}
          <div className="image-container">
            <a href={project.link}>
              <img
                src={project.image}
                alt={project.title}
                className="card-image"
              />
            </a>
          </div>

          {/* Descrição do projeto */}
          <p className="card-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;