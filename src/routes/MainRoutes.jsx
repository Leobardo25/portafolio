import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";


const MainRoutes = ({ darkMode }) => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} /> 
        <Route path="/about" element={<About darkMode={darkMode} />} /> 
        <Route path="/projects" element={<Projects darkMode={darkMode} />} /> 
      </Routes>
    </div>
  );
};

export default MainRoutes;
