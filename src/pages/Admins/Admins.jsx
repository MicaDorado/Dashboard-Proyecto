import React, { useState } from "react";
import DataTable from "../../components/Tables/DataTable";
import Button from "../../components/Shared/Button";
import Modal from "../../components/Modals/Modal";

const Admins = () => {
  // Datos simulados
  const [admins, setAdmins] = useState([
    { id: 1, name: "Juan Pérez", email: "juan@example.com", role: "Super Admin" },
    { id: 2, name: "María Gómez", email: "maria@example.com", role: "Editor" },
    { id: 3, name: "Carlos Díaz", email: "carlos@example.com", role: "Viewer" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const handleEdit = (admin) => {
    setSelectedAdmin(admin);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setAdmins(admins.filter((a) => a.id !== id));
  };

  const columns = ["ID", "Nombre", "Email", "Rol", "Acciones"];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Administradores</h1>
        <Button onClick={() => setIsModalOpen(true)}>+ Nuevo Admin</Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="w-full text-sm text-gray-600">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="py-3 px-4 text-left">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr
                key={admin.id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="py-2 px-4">{admin.id}</td>
                <td className="py-2 px-4">{admin.name}</td>
                <td className="py-2 px-4">{admin.email}</td>
                <td className="py-2 px-4">{admin.role}</td>
                <td className="py-2 px-4 space-x-2">
                  <button
                    onClick={() => handleEdit(admin)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(admin.id)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">
              {selectedAdmin ? "Editar Administrador" : "Nuevo Administrador"}
            </h2>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Nombre"
                defaultValue={selectedAdmin?.name || ""}
                className="w-full border p-2 rounded-md focus:ring focus:ring-blue-200"
              />
              <input
                type="email"
                placeholder="Email"
                defaultValue={selectedAdmin?.email || ""}
                className="w-full border p-2 rounded-md focus:ring focus:ring-blue-200"
              />
              <select
                defaultValue={selectedAdmin?.role || ""}
                className="w-full border p-2 rounded-md focus:ring focus:ring-blue-200"
              >
                <option value="">Seleccionar rol</option>
                <option value="Super Admin">Super Admin</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </select>

              <div className="flex justify-end gap-2 pt-3">
                <Button onClick={() => setIsModalOpen(false)}>Guardar</Button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-700"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Admins;
