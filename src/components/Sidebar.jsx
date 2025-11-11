import { Link, useLocation } from "react-router-dom";
import { FiHome, FiBox, FiLogOut, FiUserPlus } from "react-icons/fi";

export default function Sidebar() {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

    const menuItems = [
    { to: "/", label: "Inicio", icon: FiHome },
    { to: "/products", label: "Productos", icon: FiBox },
    { to: "/register", label: "Registrar Usuario", icon: FiUserPlus }, // ✅ Nuevo botón
  ];


  return (
    <aside className="w-64 min-h-screen bg-offwhite border-r border-sage/30 p-6 flex flex-col">
      
      {/* Logo / Nombre */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-9 h-9 rounded-xl bg-olive" />
        <span className="text-olive font-semibold text-xl tracking-wide">Averdta</span>
      </div>

      {/* Navegación */}
      <nav className="flex flex-col gap-3 flex-1">
        {menuItems.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to;

          return (
            <Link
              key={to}
              to={to}
              className={[
                "flex items-center gap-3 px-4 py-2 rounded-xl border transition text-olive",
                active
                  ? "bg-white border-sage/40 shadow-soft"
                  : "hover:bg-white hover:border-sage/30 border-transparent"
              ].join(" ")}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Cerrar Sesión */}
      <button
        onClick={handleLogout}
        className="mt-6 flex items-center justify-center gap-2 w-full bg-peach/70 hover:bg-peach text-olive font-semibold rounded-xl py-2 transition"
      >
        <FiLogOut className="w-5 h-5" />
        Cerrar sesión
      </button>
    </aside>
  );
}
