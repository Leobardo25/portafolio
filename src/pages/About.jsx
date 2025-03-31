
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFileDownload, FaEye } from 'react-icons/fa';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaPhp, FaPython 
} from 'react-icons/fa';
import { SiTypescript, SiMysql, SiPostgresql } from 'react-icons/si';
import './About.css';
import Image from '../img/1743010873635.jpg';

const About = ({ darkMode }) => {
  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skills = [
    { icon: <FaHtml5 size={24} />, name: "HTML", color: "#E34F26" },
    { icon: <FaCss3Alt size={24} />, name: "CSS", color: "#1572B6" },
    { icon: <FaJs size={24} />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaReact size={24} />, name: "React", color: "#61DBFB" },
    { icon: <SiTypescript size={24} />, name: "TypeScript", color: "#007ACC" },
    { icon: <SiMysql size={24} />, name: "MySQL", color: "#00758F" },
    { icon: <SiPostgresql size={24} />, name: "PostgreSQL", color: "#336791" },
    { icon: <FaNodeJs size={24} />, name: "Node.js", color: "#3C873A" },
    { icon: <FaPhp size={24} />, name: "PHP", color: "#777BB4" },
    { icon: <FaPython size={24} />, name: "Python", color: "#3776AB" }
  ];

  const education = [
    "Técnico Medio en Desarrollo de Software",
    "Frontend Developer (HTML, CSS, JavaScript, React)",
    "Bases de Datos (SQL, MySQL, PostgreSQL)",
    "Python para desarrollo web",
    "Inglés Técnico (nivel intermedio)",
    "Bootcamp de Desarrollo Web Full Stack"
  ];

  return (
    <motion.section 
      id="about"
      className={`about-container ${darkMode ? "dark" : "light"}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="about-header" variants={itemVariants}>
        <h2>Sobre mí</h2>
        <p>Conoce un poco más sobre mi experiencia y habilidades.</p>
      </motion.div>

      <div className="about-content">
        {/* Sección Izquierda */}
        <motion.div className="about-left-top" variants={itemVariants}>
          <div className="about-image">
            <img 
              src={Image}
              alt="Tu foto" 
              className="profile-image"
            />
          </div>

          <motion.div className="skills-section" variants={itemVariants}>
            <h3>Habilidades Tecnológicas</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="skill"
                  whileHover={{ y: -5, scale: 1.05 }}
                  variants={itemVariants}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Sección Derecha */}
        <motion.div className="about-right-top" variants={itemVariants}>
          <motion.div className="about-intro" variants={itemVariants}>
            <p>
              ¡Hola! Soy Leonardo, un desarrollador web apasionado por la programación. 
              Me especializo en frontend con JavaScript, React, HTML y CSS, además de 
              tener experiencia en Node.js, bases de datos, y TypeScript.
            </p>
          </motion.div>

          <motion.div className="education-section" variants={itemVariants}>
            <h3>Formación</h3>
            <ul>
              {education.map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="about-actions" variants={itemVariants}>
            <motion.button
              className="action-button primary"
              onClick={() => window.open('/English Cv Ever Corrales.pdf', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload /> Descargar CV
            </motion.button>
            
            <Link to="/projects" className="action-button secondary">
              <FaEye /> Ver mis proyectos
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;


