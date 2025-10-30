import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useSelector } from "react-redux";

/**
 * Hook personalizado para acceder al estado de autenticación.
 * Verifica tanto el contexto como el estado global (Redux) y localStorage.
 */
export function useAuth() {
  const { isAuthenticated: contextAuth, user: contextUser } = useContext(AuthContext);
  const reduxUser = useSelector((state) => state.user.user);
  const reduxAuth = useSelector((state) => state.user.isAuthenticated);

  // También chequea si hay sesión en localStorage
  const localAuth = localStorage.getItem("auth") === "true";

  const isAuthenticated = contextAuth || reduxAuth || localAuth;

  const user = reduxUser || contextUser || { name: "Invitado", role: "Usuario" };

  return { isAuthenticated, user };
}
