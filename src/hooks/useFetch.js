import { useState, useEffect } from "react";
import api from "../services/api";

/**
 * Hook personalizado para consumir APIs usando Axios y tu configuración global (api.js)
 * 
 * Ejemplo:
 *   const { data, loading, error, refetch } = useFetch("/products");
 */
export function useFetch(endpoint, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const method = options.method || "get";
      const payload = options.data || null;

      const response =
        method === "get"
          ? await api.get(endpoint)
          : await api[method](endpoint, payload);

      setData(response.data);
    } catch (err) {
      console.error("❌ Error en useFetch:", err);
      setError(err.response?.data?.message || "Error al obtener datos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  return { data, loading, error, refetch: fetchData };
}
