import { useTheme } from "../../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-[#f8f4ef] dark:bg-[#3e2c24] border-b border-[#d4a373]/40 py-3 px-6 flex justify-between items-center transition-colors duration-300">
      <h1 className="text-lg font-semibold text-[#3e2c24] dark:text-[#f1e3d3]">
        Panel Administrativo
      </h1>

      <div className="flex items-center gap-4">
        {/* Botón de tema */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md bg-[#d4a373] text-[#3e2c24] dark:bg-[#5c4033] dark:text-[#f8f4ef] hover:opacity-90 transition"
          title={
            theme === "light"
              ? "Cambiar a modo oscuro"
              : "Cambiar a modo claro"
          }
        >
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-[#5c4033] dark:bg-[#d4a373] flex items-center justify-center text-[#f8f4ef] dark:text-[#3e2c24] font-semibold">
          M
        </div>
      </div>
    </header>
  );
}
