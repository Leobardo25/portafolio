import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ 
  image, 
  title, 
  description, 
  projectLink, 
  githubLink, 
  darkMode,
  technologies = [] 
}) => {
  // Animaciones
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className={`project-card ${darkMode ? "dark" : "light"}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
    >
      <a 
        href={projectLink} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={`Ver proyecto ${title}`}
      >
        <div className="image-container">
          <img 
            src={image} 
            alt={title} 
            className="project-image"
            loading="lazy"
          />
          <div className="image-overlay">
            <FaExternalLinkAlt size={24} />
          </div>
        </div>
      </a>

      <div className="project-details">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        
        {technologies.length > 0 && (
          <div className="technologies-container">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="project-links">
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Código en GitHub"
          >
            <FaGithub /> Ver código
          </motion.a>
          
          <motion.a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Ver proyecto"
          >
            <FaExternalLinkAlt /> Ver proyecto
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;