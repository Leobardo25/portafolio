import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

import projectImage from '../img/182428240217.jpg'; // Imagen de ejemplo

const Projects = ({ darkMode }) => { // ✅ Recibe el darkMode como prop
  return (
    <section className={`projects-container ${darkMode ? "dark" : "light"}`}>
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        <ProjectCard
          image={projectImage}
          title="Proyecto Ejemplo"
          description="Este es un proyecto ejemplo que demuestra cómo usar React."
          projectLink="https://example.com/proyecto"
          githubLink="https://github.com/Leobardo25/portafolio"
          darkMode={darkMode} // ✅ Pasa el modo oscuro a cada tarjeta
        />
        
        <ProjectCard
          image={projectImage}
          title="Otro Proyecto"
          description="Otro proyecto que muestra un uso avanzado de JavaScript."
          projectLink="https://example.com/otro-proyecto"
          githubLink="https://github.com/tuusuario/otro-proyecto"
          darkMode={darkMode}
        />

        <ProjectCard
          image={projectImage}
          title="Otro Proyecto"
          description="Otro proyecto que muestra un uso avanzado de JavaScript."
          projectLink="https://example.com/otro-proyecto"
          githubLink="https://github.com/tuusuario/otro-proyecto"
          darkMode={darkMode}
        />

        <ProjectCard
          image={projectImage}
          title="Otro Proyecto"
          description="Otro proyecto que muestra un uso avanzado de JavaScript."
          projectLink="https://example.com/otro-proyecto"
          githubLink="https://github.com/tuusuario/otro-proyecto"
          darkMode={darkMode}
        />
      </div>
    </section>
  );
};

export default Projects;
