import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext"; // 👈 Importar el contexto global

export default function Settings() {
  const { theme, toggleTheme } = useTheme(); // 🌓 usar el contexto
  const [settings, setSettings] = useState({
    name: "",
    theme: theme || "light",
    showSidebar: true,
    showGraph: true,
  });

  // Cargar ajustes guardados
  useEffect(() => {
    const saved = localStorage.getItem("dashboardSettings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setSettings((prev) => ({ ...prev, ...parsed }));
    }
  }, []);

  // Guardar ajustes
  const handleSave = () => {
    localStorage.setItem("dashboardSettings", JSON.stringify(settings));
    alert("✅ Ajustes guardados correctamente");
  };

  // Restablecer ajustes
  const handleReset = () => {
    localStorage.removeItem("dashboardSettings");
    setSettings({
      name: "",
      theme: "light",
      showSidebar: true,
      showGraph: true,
    });
    toggleTheme("light"); // 👈 volver a modo claro también
    alert("⚙️ Ajustes restablecidos");
  };

  // Cuando el usuario cambie el tema, aplicar en vivo y guardar
  const handleThemeChange = (enabled) => {
    const newTheme = enabled ? "dark" : "light";
    setSettings((prev) => ({ ...prev, theme: newTheme }));
    toggleTheme(newTheme); // 👈 actualiza el tema global inmediatamente
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-8 bg-[#f8f4ef] dark:bg-[#1e1f1b] min-h-screen text-[#3f3d2e] dark:text-gray-100 transition-colors duration-300"
    >
      <h1 className="text-3xl font-bold text-[#4d6a3a] dark:text-[#a5d86b] mb-6">
        Ajustes
      </h1>

      {/* 👤 Perfil del Usuario */}
      <section className="bg-white dark:bg-[#2b2c25] shadow-sm border border-[#d4a373]/40 dark:border-gray-700 rounded-xl p-6 mb-8 transition-colors">
        <h2 className="text-xl font-semibold mb-4 text-[#5c4033] dark:text-[#e8e2d0]">
          👤 Perfil
        </h2>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium text-[#6b5b4b] dark:text-gray-300">
            Nombre visible / Empresa
          </label>
          <input
            type="text"
            value={settings.name}
            onChange={(e) =>
              setSettings({ ...settings, name: e.target.value })
            }
            placeholder="Ej: Panadería San José"
            className="border border-[#d4a373]/40 dark:border-gray-600 rounded-md p-2 focus:ring-2 focus:ring-[#d4a373] dark:bg-[#20211b] dark:text-gray-100 transition"
          />
        </div>
      </section>

      {/* 🎨 Apariencia */}
      <section className="bg-white dark:bg-[#2b2c25] shadow-sm border border-[#d4a373]/40 dark:border-gray-700 rounded-xl p-6 mb-8 transition-colors">
        <h2 className="text-xl font-semibold mb-4 text-[#5c4033] dark:text-[#e8e2d0]">
          🎨 Apariencia
        </h2>
        <div className="flex items-center justify-between">
          <span className="text-[#6b5b4b] dark:text-gray-300 font-medium">
            Tema oscuro
          </span>
          <Switch
            checked={settings.theme === "dark"}
            onChange={handleThemeChange}
            className={`${
              settings.theme === "dark" ? "bg-[#7fc65e]" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300`}
          >
            <span
              className={`${
                settings.theme === "dark" ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </section>

      {/* ⚙️ Preferencias del Panel */}
      <section className="bg-white dark:bg-[#2b2c25] shadow-sm border border-[#d4a373]/40 dark:border-gray-700 rounded-xl p-6 mb-8 transition-colors">
        <h2 className="text-xl font-semibold mb-4 text-[#5c4033] dark:text-[#e8e2d0]">
          ⚙️ Preferencias del panel
        </h2>

        <div className="flex items-center justify-between mb-4">
          <span className="text-[#6b5b4b] dark:text-gray-300 font-medium">
            Mostrar barra lateral
          </span>
          <Switch
            checked={settings.showSidebar}
            onChange={(enabled) =>
              setSettings({ ...settings, showSidebar: enabled })
            }
            className={`${
              settings.showSidebar ? "bg-[#7fc65e]" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-all`}
          >
            <span
              className={`${
                settings.showSidebar ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[#6b5b4b] dark:text-gray-300 font-medium">
            Mostrar gráfica mensual
          </span>
          <Switch
            checked={settings.showGraph}
            onChange={(enabled) =>
              setSettings({ ...settings, showGraph: enabled })
            }
            className={`${
              settings.showGraph ? "bg-[#7fc65e]" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-all`}
          >
            <span
              className={`${
                settings.showGraph ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </section>

      {/* 🧩 Botones */}
      <div className="flex justify-end gap-4">
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-md border border-[#c28b5c] text-[#5c4033] dark:border-gray-600 dark:text-gray-200 hover:bg-[#f3e8df] dark:hover:bg-[#35362f] transition"
        >
          Restablecer
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 rounded-md bg-[#d4a373] text-white font-semibold hover:bg-[#c28b5c] dark:bg-[#7fc65e] dark:hover:bg-[#6ab150] transition"
        >
          Guardar cambios
        </button>
      </div>
    </motion.div>
  );
}
