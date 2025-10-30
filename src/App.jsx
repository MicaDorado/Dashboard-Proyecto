import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Products from "./pages/Products/Products.jsx";
import Navbar from "./components/layout/Navbar.jsx";

// ✅ Componente para proteger rutas (usa Redux y localStorage)
function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const localAuth = localStorage.getItem("auth") === "true";

  if (!isAuthenticated && !localAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f8f4ef] text-[#3e2c24] flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* 🛍️ Nueva ruta para productos */}
            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        <footer className="py-3 text-center text-sm text-[#7b5e57] border-t border-[#d4a373]/40">
          © {new Date().getFullYear()} Dashboard Mica — Hecho con amor 🤎
        </footer>
      </div>
    </BrowserRouter>
  );
}

