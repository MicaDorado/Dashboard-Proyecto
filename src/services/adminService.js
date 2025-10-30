import { api } from "./api";

// 👩‍💼 Administradores - CRUD
export const adminService = {
  getAll: async () => {
    const res = await api.get("/admins");
    return res.data;
  },
  create: async (adminData) => {
    const res = await api.post("/admins", adminData);
    return res.data;
  },
  update: async (id, adminData) => {
    const res = await api.put(`/admins/${id}`, adminData);
    return res.data;
  },
  remove: async (id) => {
    const res = await api.delete(`/admins/${id}`);
    return res.data;
  },
};
