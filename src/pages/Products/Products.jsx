import React, { useEffect, useState } from "react";
import axios from "axios";

const categories = [
  { id: "all", name: "Todos" },
  { id: "sin-gluten", name: "Sin Gluten" },
  { id: "vegano", name: "Vegano" },
  { id: "vegetariano", name: "Vegetariano" },
  { id: "diabetico", name: "Diabético" },
  { id: "kosher", name: "Kosher" },
  { id: "halal", name: "Halal" },
];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Detecta automáticamente el backend (misma red)
        const backendURL = `${window.location.origin.replace(
          "5173",
          "5000"
        )}/api/products`;

        const res = await axios.get(backendURL);
const data = Array.isArray(res.data)
  ? res.data
  : res.data.products || res.data.items || [];
setProducts(data);

      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter(
          (product) => product.category?.toLowerCase() === activeCategory
        );

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-olive">Productos</h2>

      {/* Tabs de categorías */}
      <div className="flex flex-wrap gap-3 border-b border-sage/30 pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
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

      {/* Cards de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
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
    </div>
  );
}
