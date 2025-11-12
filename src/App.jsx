import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Products from "./pages/Products/Products.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Register from "./pages/Register/Register.jsx";
import Performance from "./pages/Performance/Performance.jsx"; // asegúrate de que la extensión sea .jsx

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const localAuth = localStorage.getItem("auth") === "true";

  if (!isAuthenticated && !localAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cream text-olive flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>

      <footer className="py-3 text-center text-sm text-moss border-t border-sage/30">
        © {new Date().getFullYear()} Dashboard Mica — Hecho con amor 🤎
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔐 Login libre */}
        <Route path="/login" element={<Login />} />

        {/* 🔐 Dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* 🔐 Productos */}
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Layout>
                <Products />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* 🔐 Registrar usuario */}
        <Route
          path="/register"
          element={
            <ProtectedRoute>
              <Layout>
                <Register />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* 🔐 Desempeño (Performance) */}
        <Route
          path="/performance"
          element={
            <ProtectedRoute>
              <Layout>
                <Performance />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
