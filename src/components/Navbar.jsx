import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const checkMobile = useCallback(() => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    if (!mobile) setMenuOpen(false);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {/* botón hamburguesa en móvil */}
      {isMobile && (
        <button 
          className={`hamburger-btn ${darkMode ? "dark" : "light"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          style={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            zIndex: 1001
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      )}

      {/* Menú móvil */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""} ${darkMode ? "dark" : "light"}`}>
        <ul>
          <li><Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/about" className="nav-link" onClick={closeMenu}>Sobre mí</Link></li>
          <li><Link to="/projects" className="nav-link" onClick={closeMenu}>Proyectos</Link></li>
        </ul>

        <div className="mobile-actions">
          <div className="contact-icons">
            <a href="https://www.instagram.com/leobardo_25" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://github.com/Leobardo25" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://cr.linkedin.com/in/everleonardocorrales25" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="https://wa.me/50663313764" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={20} />
            </a>
            <a href="mailto:Everleonardo25@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope size={20} />
            </a>
          </div>

          <button 
            onClick={() => {
              setDarkMode(!darkMode);
              closeMenu();
            }} 
            className="theme-toggle"
            aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {darkMode ? "☀️" : "🌑"}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div 
          className="menu-overlay" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Menú desktop (solo se muestra en pantallas grandes) */}
      {!isMobile && (
        <nav className={`desktop-nav ${darkMode ? "dark" : "light"}`}>
          <ul>
            <li><Link to="/" className="nav-link">Inicio</Link></li>
            <li><Link to="/about" className="nav-link">Sobre mí</Link></li>
            <li><Link to="/projects" className="nav-link">Proyectos</Link></li>
          </ul>
          
          <div className="desktop-actions">
            <div className="contact-icons">
              <a href="https://www.instagram.com/leobardo_25" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://github.com/Leobardo25" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://cr.linkedin.com/in/everleonardocorrales25" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="https://wa.me/50663313764" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </a>
              <a href="mailto:Everleonardo25@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <FaEnvelope size={20} />
              </a>
            </div>
            
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="theme-toggle"
              aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {darkMode ? "☀️" : "🌑"}
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;