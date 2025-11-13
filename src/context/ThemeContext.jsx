import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Cargar tema desde localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem("dashboardSettings");
    if (savedSettings) {
      const { theme: savedTheme } = JSON.parse(savedSettings);
      if (savedTheme) setTheme(savedTheme);
    }
  }, []);

  // Aplicar clase dark/light globalmente
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Guardar cambios en localStorage
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    const savedSettings = JSON.parse(localStorage.getItem("dashboardSettings")) || {};
    savedSettings.theme = newTheme;
    localStorage.setItem("dashboardSettings", JSON.stringify(savedSettings));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar fácilmente en cualquier componente
export const useTheme = () => useContext(ThemeContext);
