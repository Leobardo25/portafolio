import { BrowserRouter as Router } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes"; // Rutas
import useTheme from "./hooks/useTheme";
import "./App.css"; 

import videoBackground from './videos/video.mp4'; 

function App() {
  const [darkMode, setDarkMode] = useTheme(); // Hook personalizado para el manejo del modo oscuro

  return (
    <Router>
      <div className={`app-container ${darkMode ? "dark" : "light"}`}>
        {/* Navbar con el tema claro/oscuro */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Contenedor para el video de fondo */}
        <div className="video-background-container">
          <video className="video-background" autoPlay loop muted>
            <source src={videoBackground} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>

        {/* Contenido de la aplicación, que incluye las rutas */}
        <div className="content">
          <MainRoutes darkMode={darkMode} /> 
        </div>
      </div>
    </Router>
  );
}

export default App;
