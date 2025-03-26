import React from "react";
import "./About.css"; // Asegúrate de tener los estilos para esta sección
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaPython } from "react-icons/fa";
import { SiTypescript, SiMysql, SiPostgresql } from "react-icons/si";
import Image from '../img/1743010873635.jpg';

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`about-container ${darkMode ? "dark" : "light"}`}>
      <div className="about-header">
        <h2>Sobre mí</h2>
        <p>Conoce un poco más sobre mi experiencia y habilidades.</p>
      </div>

      <div className="about-content">
        {/* Parte Superior Izquierda */}
        <div className="about-left-top">
          <div className="about-image">
            <img src={Image} alt="Tu foto" />
          </div>

          <h3>Habilidades Tecnológicas</h3>
          <div className="skills-container">
            <div className="skills-grid">
              <div className="skill">
                <FaHtml5 size={20} color="#E34F26" /> <span>HTML</span>
              </div>
              <div className="skill">
                <FaCss3Alt size={20} color="#1572B6" /> <span>CSS</span>
              </div>
              <div className="skill">
                <FaJs size={20} color="#F7DF1E" /> <span>JavaScript</span>
              </div>
              <div className="skill">
                <FaReact size={20} color="#61DBFB" /> <span>React</span>
              </div>
              <div className="skill">
                <SiTypescript size={20} color="#007ACC" /> <span>TypeScript</span>
              </div>
              <div className="skill">
                <SiMysql size={20} color="#00758F" /> <span>MySQL</span>
              </div>
              <div className="skill">
                <SiPostgresql size={20} color="#336791" /> <span>SQL (PostgreSQL)</span>
              </div>
              <div className="skill">
                <FaNodeJs size={20} color="#3C873A" /> <span>Node.js</span>
              </div>
              <div className="skill">
                <FaPhp size={20} color="#777BB4" /> <span>PHP</span>
              </div>
              <div className="skill">
                <FaPython size={20} color="#3776AB" /> <span>Python</span>
              </div>
            </div>
          </div>
          <h3>Experiencia Profesional</h3>
          <p>
            Recientemente graduado en desarrollo web, he adquirido experiencia a través de prácticas y proyectos 
            relacionados con tecnologías como JavaScript, React, HTML y CSS. Este portafolio refleja mi continuo 
            aprendizaje y el desarrollo de mis habilidades en un entorno profesional. Puedes explorar mis proyectos 
            para ver ejemplos de mi trabajo y enfoque en el desarrollo web.
          </p>
       

        </div>

        {/* Parte Superior Derecha */}
        <div className="about-right-top">
          <p>
            ¡Hola! Soy Leonardo, un desarrollador web apasionado por la programación. 
            Me especializo en frontend con JavaScript, React, HTML y CSS, además de tener experiencia en Node.js,
            bases de datos, y TypeScript. También me adapto fácilmente a nuevas tecnologías y herramientas,
            lo que me ha permitido trabajar con UX/UI, Python, Java, PHP y Microsoft Office.
          </p>

          <h3>Formación</h3>
          <ul>
            <li>Técnico Medio en Desarrollo de Software: Formación técnica centrada en el desarrollo de aplicaciones y programación en diversas tecnologías.</li>
            <li>Frontend Developer: Formación en HTML, CSS, JavaScript, React y diseño web. VLA</li>
            <li>Bases de Datos: Conceptos fundamentales en la gestión y diseño de bases de datos, con énfasis en SQL. VLA</li>
            <li>Python: Capacitación en programación con Python, centrada en su uso para desarrollo web y automatización. VLA</li>
            <li>Inglés Técnico: Nivel medio en comprensión y producción de documentación técnica en inglés.</li>
            <li>Bootcamp de Desarrollo Web: Entrenamiento intensivo en desarrollo frontend y backend, con enfoque práctico en el uso de tecnologías actuales como JavaScript, React, Node.js y bases de datos.</li>
          </ul>

        <button 
          className="projects-button" 
          onClick={() => window.location.href = '/projects'}>
            Mis proyectos
        </button>

        <button 
            className="projects-button" 
            onClick={() => window.open('/English Cv Ever Corrales.pdf', '_blank')}>
              Descargar CV
          </button>


        </div>

        {/* Parte Inferior Izquierda */}
        <div className="about-left-bottom">
       
        </div>

        {/* Parte Inferior Derecha */}
        <div className="about-right-bottom">
     
        </div>
      </div>
    </section>
  );
};

export default About;

  