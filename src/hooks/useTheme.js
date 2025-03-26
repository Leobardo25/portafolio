import { useState, useEffect } from "react";

const useTheme = () => {
  // Cargar el tema desde localStorage
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  // Guardar el tema cuando cambie
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useTheme;
