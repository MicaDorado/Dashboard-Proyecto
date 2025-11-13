import React, { useEffect, useState } from "react";
import axios from "axios";

// 🔹 Mapeo entre slug (botón) y nombre real de la categoría en la base de datos
const categories = [
  { id: "all", name: "Todos", dbName: "all" },
  { id: "sin-gluten", name: "Sin Gluten", dbName: "Sin Gluten" },
  { id: "vegano", name: "Vegano", dbName: "Vegano" },
  { id: "vegetariano", name: "Vegetariano", dbName: "Vegetariano" },
  { id: "diabetico", name: "Diabético", dbName: "Diabetico" },
  { id: "kosher", name: "Kosher", dbName: "Kosher" },
  { id: "halal", name: "Halal", dbName: "Halal" },
];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (category = "all", pageNum = 1) => {
    setLoading(true);
    try {
      const selected = categories.find((cat) => cat.id === category);
      const categoryName = selected ? selected.dbName : "all";

      const baseURL = "http://localhost:3000/api/products";
      const url = `${baseURL}?category=${encodeURIComponent(categoryName)}&page=${pageNum}&limit=6`;

      const res = await axios.get(url);
      const data = res.data;

      setProducts(data.products || []);
      setTotalPages(data.totalPages || 1);
      setPage(data.currentPage || 1);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Cargar productos cuando cambian categoría o página
  useEffect(() => {
    fetchProducts(activeCategory, page);
  }, [activeCategory, page]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setPage(1);
  };

  return (
    <div className="space-y-6 pb-10">
      <h2 className="text-3xl font-bold text-olive">Productos</h2>

      {/* Tabs de categorías */}
      <div className="flex flex-wrap gap-3 border-b border-sage/30 pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? "bg-olive text-white shadow-md"
                : "bg-cream border border-sage/40 hover:bg-sage/20 text-olive"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Estado de carga */}
      {loading && (
        <p className="text-center text-gray-500 mt-4">
          Cargando productos...
        </p>
      )}

      {/* Sin resultados */}
      {!loading && products.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No hay productos disponibles.
        </p>
      )}

      {/* Lista de productos */}
      {!loading && products.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-sm rounded-2xl p-5 flex flex-col items-center text-center border border-sage/30 hover:shadow-md transition-all"
              >
                <img
                  src={product.image || "/images/default-food.jpg"}
                  alt={product.name}
                  className="w-24 h-24 object-cover mb-3 rounded-full border border-sage/20"
                />
                <h3 className="font-semibold text-lg text-olive">
                  {product.name}
                </h3>
                <p className="text-moss font-bold">${product.price}</p>
                <p className="text-sm text-gray-500">Stock: {product.stock}</p>

                <div className="flex gap-3 mt-4">
                  <button className="px-4 py-1 border border-sage/40 rounded-md text-sm hover:bg-sage/10">
                    Editar
                  </button>
                  <button className="px-4 py-1 border border-red-400 text-red-600 rounded-md text-sm hover:bg-red-50">
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Paginación */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              disabled={page === 1}
              className="px-3 py-1 border border-sage/40 rounded-md text-sm hover:bg-sage/10 disabled:opacity-40"
            >
              ◀ Anterior
            </button>

            <span className="text-sm text-gray-600">
              Página {page} de {totalPages}
            </span>

            <button
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 border border-sage/40 rounded-md text-sm hover:bg-sage/10 disabled:opacity-40"
            >
              Siguiente ▶
            </button>
          </div>
        </>
      )}
    </div>
  );
}
