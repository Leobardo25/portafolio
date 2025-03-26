import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

import projectImage from '../img/182428240217.jpg';
import projectImage1 from '../img/previewP.jpg'; 


const Projects = ({ darkMode }) => { 
  return (
    <section className={`projects-container ${darkMode ? "dark" : "light"}`}>
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        <ProjectCard
          image={projectImage1}
          title="Mi portafolio"
          description="Este portafolio web, creado con React.js y CSS, presenta mis proyectos y habilidades como desarrollador frontend. Incluye un modo oscuro/claro, navegación
           con React Router y acceso directo a WhatsApp.
            El proyecto está versionado con Git y GitHub.. 🚀 ."
          projectLink="https://example.com/proyecto"
          githubLink="https://github.com/Leobardo25/portafolio"
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
