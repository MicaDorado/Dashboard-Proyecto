import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const AuthContext = createContext();

// Hook para acceder fácilmente al contexto
export const useAuth = () => useContext(AuthContext);

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar autenticación en localStorage al cargar
  useEffect(() => {
    const auth = localStorage.getItem("auth") === "true";
    setIsAuthenticated(auth);
  }, []);

  // Funciones de login/logout globales
  const login = (user, pass) => {
    if (user === "mica" && pass === "1234") {
      localStorage.setItem("auth", "true");
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
