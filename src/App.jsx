import { BrowserRouter as Router } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import useTheme from "./hooks/useTheme";
import "./App.css"; 
import videoBackground from './videos/video.mp4';
import { useMemo } from 'react';

function App() {
  const [darkMode, setDarkMode] = useTheme();

  // Memoize el video para evitar recargas innecesarias
  const videoElement = useMemo(() => (
    <video className="video-background" autoPlay loop muted playsInline>
      <source src={videoBackground} type="video/mp4" />
      Tu navegador no soporta videos.
    </video>
  ), []);

  return (
    <Router>
      <div className={`app-container ${darkMode ? "dark" : "light"}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Video de fondo */}
        <div className="video-background-container">
          {videoElement}
          {/* Capa overlay para mejor legibilidad */}
          <div className={`video-overlay ${darkMode ? "dark-overlay" : "light-overlay"}`}></div>
        </div>

        {/* Contenido principal */}
        <main className="content">
          <MainRoutes darkMode={darkMode} /> 
        </main>
        
        {/* Podrías añadir un Footer aquí si lo necesitas */}
      </div>
    </Router>
  );
}

export default App;