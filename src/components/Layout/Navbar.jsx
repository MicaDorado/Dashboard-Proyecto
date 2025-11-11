import { useTheme } from "../../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full border-b py-3 px-6 flex justify-between items-center transition-all duration-300 ${
        isScrolled
          ? "bg-[#6b7c5a]/95 dark:bg-[#4a5d3e]/95 backdrop-blur-sm border-[#8a9b7a]/40 shadow-md"
          : "bg-transparent border-transparent"
      }`}
    >
      <h1
        className={`text-lg font-semibold transition-colors duration-300 ${
          isScrolled
            ? "text-white dark:text-[#f1e3d3]"
            : "text-[#4a5d3e] dark:text-[#f1e3d3]"
        }`}
      >
        Panel Administrativo
      </h1>

      <div className="flex items-center gap-4">
        {/* Botón de tema */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-md transition ${
            isScrolled
              ? "bg-[#8a9b7a] text-white hover:bg-[#9aab8a]"
              : "bg-[#6b7c5a] text-white hover:bg-[#7a8b69]"
          }`}
          title={
            theme === "light"
              ? "Cambiar a modo oscuro"
              : "Cambiar a modo claro"
          }
        >
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-[#6b7c5a] flex items-center justify-center text-white font-semibold">
          M
        </div>
      </div>
    </header>
  );
}