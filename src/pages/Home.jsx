import { useEffect, useRef } from "react";
import "./home.css";
import videoDia from "../videos/dia.mp4";
import videoNoche from "../videos/noche.mp4";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = ({ darkMode }) => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  // Reiniciar video cuando cambia el modo
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [darkMode]);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/50663313764", "_blank", "noopener,noreferrer");
  };

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

  return (
    <motion.section 
      className={`home-container ${darkMode ? "dark" : "light"}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-content">
        <motion.h1 variants={itemVariants}>
          ¡Hola! Soy Leonardo <motion.span 
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >👋</motion.span>
        </motion.h1>
        
        <motion.p variants={itemVariants}>
          Desarrollador frontend especializado en React y JavaScript. 
          Creo interfaces modernas, optimizadas y centradas en la experiencia del usuario. 
          Explora mis proyectos o contáctame para colaborar en tu próximo desarrollo web.
        </motion.p>

        <motion.div 
          className="buttons-container"
          variants={itemVariants}
        >
          <motion.button
            className="btn-whatsapp"
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp size={20} /> 
            <span>¡Contáctame por WhatsApp!</span>
          </motion.button>

          <Link to="/projects" aria-label="Ver proyectos">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Ver mis proyectos</span>
              <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <motion.div 
        className="video-container"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          aria-label="Video de fondo"
        >
          <source src={darkMode ? videoNoche : videoDia} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </motion.div>
    </motion.section>
  );
};

export default Home;