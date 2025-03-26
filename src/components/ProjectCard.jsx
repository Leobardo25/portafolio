import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, title, description, projectLink, githubLink, darkMode }) => {
  return (
    <div className={`project-card ${darkMode ? "dark" : "light"}`}>
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <div className="image-container">
          <img src={image} alt={title} className="project-image" />
        </div>
      </a>
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
          Ver código en GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
