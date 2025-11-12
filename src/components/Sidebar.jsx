import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// Íconos (Phosphor)
import {
  HouseSimple as Home,
  Receipt,
  ForkKnife,
  ChartPieSlice,
  Gear,
  Question,
  SignOut,
} from "phosphor-react";

export default function Sidebar() {
  const location = useLocation();
  const user = useSelector((state) => state.auth?.user);

  const mainMenu = [
    { to: "/", label: "Resumen del pedido", icon: Home },
    { to: "/orders", label: "Pedidos recientes", icon: Receipt },
    { to: "/products", label: "Menú / Productos", icon: ForkKnife },
    { to: "/performance", label: "Desempeño", icon: ChartPieSlice },
  ];

  const secondaryMenu = [
    { to: "/settings", label: "Ajustes", icon: Gear },
    { to: "/help", label: "Ayuda en línea", icon: Question },
  ];

  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  return (
    <aside className="w-64 min-h-screen bg-offwhite border-r border-sage/30 p-6 flex flex-col select-none">
      
      {/* Logo + Nombre usuario */}
      <div className="flex items-center gap-3 mb-10">
        <img src="/tenedor-logo.png" alt="Logo" className="w-10 h-10" />
        <span className="text-olive font-semibold text-xl tracking-wide">
          {user?.name ?? "Usuario"}
        </span>
      </div>

      {/* Menú principal */}
      <nav className="flex flex-col gap-2 flex-1">
        {mainMenu.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to;

          return (
            <Link
              key={to}
              to={to}
              className={`relative flex items-center gap-3 px-4 py-2 rounded-lg border transition-all duration-300 cursor-pointer group
                ${
                  active
                    ? "bg-white border-sage/40 shadow-soft text-olive font-semibold scale-[1.03]"
                    : "border-transparent text-olive/80 hover:text-olive"
                }`}
            >
              {/* 🔹 Borde lateral animado */}
              {active && (
                <span className="absolute left-0 top-0 h-full w-[4px] bg-olive rounded-r-md transition-all duration-300"></span>
              )}

              {/* Ícono */}
              <div
                className={`p-2 rounded-md transition-colors duration-300 ${
                  active
                    ? "bg-sage/20 text-olive"
                    : "group-hover:bg-sage/10 group-hover:text-olive"
                }`}
              >
                <Icon weight="fill" className="w-5 h-5" />
              </div>

              {/* Texto */}
              <span>{label}</span>
            </Link>
          );
        })}

        {/* Separador */}
        <div className="border-t border-sage/30 my-4"></div>

        {/* Menú secundario */}
        {secondaryMenu.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to;

          return (
            <Link
              key={to}
              to={to}
              className={`relative flex items-center gap-3 px-4 py-2 rounded-lg border transition-all duration-300 cursor-pointer group
                ${
                  active
                    ? "bg-white border-sage/40 shadow-soft text-olive font-semibold scale-[1.03]"
                    : "border-transparent text-olive/80 hover:text-olive"
                }`}
            >
              {active && (
                <span className="absolute left-0 top-0 h-full w-[4px] bg-olive rounded-r-md transition-all duration-300"></span>
              )}

              <div
                className={`p-2 rounded-md transition-colors duration-300 ${
                  active
                    ? "bg-sage/20 text-olive"
                    : "group-hover:bg-sage/10 group-hover:text-olive"
                }`}
              >
                <Icon weight="fill" className="w-5 h-5" />
              </div>

              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Cerrar sesión */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 justify-center w-full py-2 text-olive font-semibold rounded-lg border border-peach/40 hover:bg-peach/50 hover:text-olive transition-all duration-300 cursor-pointer"
      >
        <SignOut weight="fill" className="w-5 h-5" />
        Cerrar sesión
      </button>
    </aside>
  );
}
