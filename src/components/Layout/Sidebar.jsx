import { Link } from "react-router-dom";
import { FiHome, FiBox, FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  return (
    <aside className="w-64 min-h-screen bg-[#5c4033] text-[#f8f4ef] flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-8 text-center">Dashboard</h2>
      <nav className="flex flex-col gap-4 flex-1">
        <Link
          to="/"
          className="flex items-center gap-3 hover:bg-[#d4a373] hover:text-[#3e2c24] rounded-md px-3 py-2 transition"
        >
          <FiHome /> Inicio
        </Link>
        <Link
          to="/products"
          className="flex items-center gap-3 hover:bg-[#d4a373] hover:text-[#3e2c24] rounded-md px-3 py-2 transition"
        >
          <FiBox /> Productos
        </Link>
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 mt-4 bg-[#d4a373] text-[#3e2c24] px-3 py-2 rounded-md hover:bg-[#c28b5c] transition"
      >
        <FiLogOut /> Cerrar sesión
      </button>
    </aside>
  );
}
