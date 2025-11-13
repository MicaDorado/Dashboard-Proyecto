import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "./context/ThemeContext"; // 👈 Importar

// 🧩 Páginas
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Products from "./pages/Products/Products.jsx";
import Register from "./pages/Register/Register.jsx";
import Performance from "./pages/Performance/Performance.jsx";
import Settings from "./pages/Settings/Settings.jsx";

// 🧭 Componentes
import Navbar from "./components/layout/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

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
    <div className="min-h-screen bg-cream dark:bg-[#1e1f1b] text-olive dark:text-gray-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>

      <footer className="py-3 text-center text-sm text-moss dark:text-gray-400 border-t border-sage/30 dark:border-gray-700">
        © {new Date().getFullYear()} Dashboard Mica — Hecho con amor 🤎
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

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

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Layout>
                  <Settings />
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
