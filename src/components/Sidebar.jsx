import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const auth = useSelector((state) => state.auth);
  const user = auth?.user;

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

      <div className="flex items-center gap-3 mb-10">
        <img src="/tenedor-logo.png" alt="Logo" className="w-10 h-10" />
        <span className="text-olive font-semibold text-xl tracking-wide">
          {user?.name || "Usuario"}
        </span>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        {mainMenu.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg border transition-all
              ${active
                ? "bg-white border-sage/40 shadow-soft text-olive scale-[1.03]"
                : "border-transparent hover:bg-white hover:border-sage/30 text-olive/80 hover:scale-[1.03]"
              }`}
            >
              <Icon weight="fill" className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </Link>
          );
        })}

        <div className="border-t border-sage/30 my-4"></div>

        {secondaryMenu.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-olive/80 hover:bg-white hover:border-sage/30 transition-all hover:scale-[1.03]"
          >
            <Icon weight="fill" className="w-5 h-5" />
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 justify-center w-full py-2 text-olive font-semibold rounded-lg hover:bg-peach/50 transition border border-peach/40 cursor-pointer"
      >
        <SignOut weight="fill" className="w-5 h-5" />
        Cerrar sesión
      </button>
    </aside>
  );
}

