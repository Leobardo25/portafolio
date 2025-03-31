import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

import projectImage from '../img/182428240217.jpg';
import projectImage1 from '../img/previewP.jpg';

const Projects = ({ darkMode }) => {
  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      image: projectImage1,
      title: "Mi Portafolio",
      description: "Portafolio web creado con React.js y CSS, con modo oscuro/claro, navegación con React Router y acceso directo a WhatsApp. El proyecto está versionado con Git y GitHub.",
      projectLink: "https://leobardo25.github.io/portafolio/",
      githubLink: "https://github.com/Leobardo25/portafolio",
      technologies: ["React", "CSS", "Git", "Responsive"]
    },
    {
      image: projectImage,
      title: "Sistema de Gestión",
      description: "Aplicación web para gestión de inventarios con autenticación de usuarios y panel administrativo.",
      projectLink: "#",
      githubLink: "#",
      technologies: ["React", "Node.js", "MongoDB", "JWT"]
    },
    {
      image: projectImage,
      title: "E-commerce",
      description: "Tienda online con carrito de compras, pasarela de pagos y panel de administración.",
      projectLink: "#",
      githubLink: "#",
      technologies: ["React", "Redux", "Firebase", "Stripe"]
    },
    {
      image: projectImage,
      title: "App de Tareas",
      description: "Aplicación para gestión de tareas con drag & drop, categorías y recordatorios.",
      projectLink: "#",
      githubLink: "#",
      technologies: ["React", "TypeScript", "LocalStorage", "CSS Modules"]
    }
  ];

  return (
    <motion.section 
      id="projects"
      className={`projects-container ${darkMode ? "dark" : "light"}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="projects-header" variants={itemVariants}>
        <h2>Mis Proyectos</h2>
        <p>Explora mis trabajos recientes y descubre mis habilidades en acción</p>
      </motion.div>

      <motion.div className="projects-grid" variants={containerVariants}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
            darkMode={darkMode}
            technologies={project.technologies}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;