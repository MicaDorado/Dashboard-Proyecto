import { api } from "./api";

// 📦 Pedidos - CRUD
export const orderService = {
  getAll: async () => {
    const res = await api.get("/orders");
    return res.data;
  },
  getById: async (id) => {
    const res = await api.get(`/orders/${id}`);
    return res.data;
  },
  updateStatus: async (id, status) => {
    const res = await api.patch(`/orders/${id}`, { status });
    return res.data;
  },
  remove: async (id) => {
    const res = await api.delete(`/orders/${id}`);
    return res.data;
  },
};
