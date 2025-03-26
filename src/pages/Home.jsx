import "./Home.css";
import videoDia from "../videos/dia.mp4"; // Video para el modo claro
import videoNoche from "../videos/noche.mp4"; // Video para el modo oscuro
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Home = ({ darkMode }) => {
  const navigate = useNavigate();

  // Función para abrir WhatsApp
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/50663313764", "_blank");
  };

  return (
    <section className={`home-container ${darkMode ? "dark" : "light"}`}>
      <div className="text-content">
        <h1>¡Hola! Soy Leonardo 👋</h1>
        <p>Desarrollador frontend especializado en React y JavaScript. Me dedico a crear interfaces modernas,
         optimizadas y centradas en la experiencia del usuario. 
        Te invito a explorar mis proyectos o a contactarme para colaborar en tu próximo desarrollo web.</p>

        <div className="buttons-container">
          <Link to="/projects">
            <button className="btn-primary">Mis proyectos</button>
          </Link>

          <button className="btn-whatsapp" onClick={handleWhatsAppClick}>
            <FaWhatsapp size={20} /> ¡Contáctame por WhatsApp!
          </button>
        </div>
      </div>

      {/* Video que cambia según el tema */}
      <video className="video" autoPlay loop muted key={darkMode ? "dark" : "light"}>
        <source src={darkMode ? videoNoche : videoDia} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
    </section>
  );
};

export default Home;
