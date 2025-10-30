export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-[#5c4033]">
        Bienvenida, Mica 👋
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-4 border border-[#d4a373]/30">
          <h3 className="text-lg font-bold mb-2 text-[#3e2c24]">Ventas</h3>
          <p className="text-2xl font-semibold text-[#d4a373]">$2,430</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 border border-[#d4a373]/30">
          <h3 className="text-lg font-bold mb-2 text-[#3e2c24]">Pedidos</h3>
          <p className="text-2xl font-semibold text-[#d4a373]">128</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 border border-[#d4a373]/30">
          <h3 className="text-lg font-bold mb-2 text-[#3e2c24]">Usuarios</h3>
          <p className="text-2xl font-semibold text-[#d4a373]">32</p>
        </div>
      </div>
    </div>
  );
}

