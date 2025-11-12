import axios from "axios";
import { store } from "../redux/store";

// 🌐 Detecta automáticamente el backend (localhost o producción)
const backendBaseURL =
  import.meta.env.VITE_API_URL ||
  window.location.origin.replace(/:\d+$/, ":5000");

const api = axios.create({
  baseURL: `${backendBaseURL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 🔒 para sesiones con cookies si se usan
});

// 🧠 Interceptor de request: agrega token al header si existe
api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// 🚨 Interceptor de response: maneja errores globales
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    if (error.response?.status === 500) {
      console.error("Error del servidor:", error);
    }

    return Promise.reject(error);
  }
);

console.log("🌐 Backend detectado:", backendBaseURL);

//
// 🛍️ Servicios de productos
//
export const productService = {
  getAll: async () => {
    const { data } = await api.get("/products");
    return data;
  },
  getById: async (id) => {
    const { data } = await api.get(`/products/${id}`);
    return data;
  },
  getFeatured: async () => {
    const { data } = await api.get("/products/featured");
    return data;
  },
};

//
// 🔐 Servicios de autenticación
//
export const authService = {
  login: async (email, password) => {
    try {
      const { data } = await api.post("/tokens", { email, password });
      return data;
    } catch (error) {
      throw error.response?.data?.message || "Error al iniciar sesión";
    }
  },

  register: async (userData) => {
    try {
      const { data } = await api.post("/users", userData);
      return data;
    } catch (error) {
      throw error.response?.data?.message || "Error al registrarse";
    }
  },

  validateToken: async () => {
    try {
      const { data } = await api.get("/users/me");
      return data;
    } catch (error) {
      throw error.response?.data?.message || "Token inválido";
    }
  },

  requestPasswordReset: async (email) => {
    try {
      const { data } = await api.post("/password-reset/request", { email });
      return data;
    } catch (error) {
      throw error.response?.data?.message || "Error al solicitar reseteo";
    }
  },

  resetPassword: async (token, newPassword) => {
    try {
      const { data } = await api.post("/password-reset/confirm", {
        token,
        password: newPassword,
      });
      return data;
    } catch (error) {
      throw error.response?.data?.message || "Error al resetear contraseña";
    }
  },

  logout: async () => {
    try {
      await api.post("/logout");
    } catch (error) {
      console.error("Error al hacer logout:", error);
    }
  },
};

export default api;

