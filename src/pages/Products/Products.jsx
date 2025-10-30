import { useFetch } from "../../hooks/useFetch";

export default function Products() {
  const { data: products, loading, error } = useFetch("/products");

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-[#5c4033] mb-4">Productos</h2>
      <ul className="grid grid-cols-2 gap-4">
        {products.map((p) => (
          <li
            key={p.id}
            className="border border-[#d4a373]/40 rounded-xl bg-white p-4 shadow-sm"
          >
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-[#7b5e57]">${p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
