import { Link } from "react-router-dom"; 
import './Navbar.css'; 
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'; // Importamos los íconos

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      {/* Lista de enlaces de navegación */}
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Sobre mí</Link></li>
        <li><Link to="/projects">Proyectos</Link></li>
      </ul>


      {/* Íconos de contacto en la parte derecha */}
      <div className="contact-icons">
     
        <a href="https://www.instagram.com/leobardo_25?igsh=MWJwczR6YmJ0cHd5dw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={20} />
        </a>
       
        <a href="https://github.com/Leobardo25" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
        <a href="https://cr.linkedin.com/in/everleonardocorrales25" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
        <a href="https://wa.me/50663313764" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={20} />
        </a>
        <a href="mailto:Everleonardo25@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={20} />
        </a>
      
      </div>
        {/* Botón para cambiar entre modo claro y oscuro */}
          <button onClick={() => setDarkMode(!darkMode)} className="mode-toggle">
            {darkMode ? "☀️" : "🌑"}
          </button>


    </nav>
  );
};

export default Navbar;

