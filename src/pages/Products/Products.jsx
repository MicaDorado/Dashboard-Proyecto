import { useFetch } from "../../hooks/useFetch";

export default function Products() {
  const { data: products, loading, error } = useFetch("/products");

  if (loading) return <p className="text-olive">Cargando productos...</p>;
  if (error) return <p className="text-peach">Error: {error}</p>;

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold text-olive">Productos</h1>

      {/* GRID DE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map((item) => (
          <div
            key={item.id}
            className="bg-offwhite border border-sage/30 shadow-soft rounded-2xl p-5 flex flex-col items-center text-center"
          >
            {/* Si tu API trae URL de imagen, úsala; si no, mostramos un placeholder */}
            <img
              src={item.image || "https://cdn-icons-png.flaticon.com/512/590/590685.png"}
              alt={item.name}
              className="w-24 h-24 mb-4 object-contain"
            />

            <h2 className="text-lg font-semibold text-olive">{item.name}</h2>

            <p className="text-forest font-bold text-xl mb-1">${item.price}</p>

            {/* Si tu API trae status/stock, úsalo; si no, mostramos "Disponible" */}
            <p className="text-sm mb-4 text-moss">
              Stock: {item.stock || "Disponible"}
            </p>

            <div className="flex gap-3">
              <button className="px-3 py-1 rounded-lg border border-olive text-olive hover:bg-olive hover:text-offwhite transition">
                Editar
              </button>

              <button
                className="px-3 py-1 rounded-lg border border-peach text-peach hover:bg-peach hover:text-offwhite transition"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

