import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password: pass }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Usuario creado con éxito 🎉 Ahora podés iniciar sesión.");
        navigate("/login");
      } else {
        alert(data.message || "Error al registrarse");
      }
    } catch (error) {
      alert("Error conectando al servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF4EC]">
      <form
        onSubmit={handleRegister}
        className="bg-white border border-[#d4a373]/40 rounded-xl p-10 shadow-md w-[350px] flex flex-col items-center gap-5"
      >
        <h2 className="text-3xl font-semibold text-[#5c4033]">
          Crear cuenta
        </h2>

        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-[#d4a373]/40 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#d4a373]"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[#d4a373]/40 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#d4a373]"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="border border-[#d4a373]/40 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-[#d4a373]"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#5c7d45] text-white rounded-md py-2 w-full font-semibold hover:bg-[#4d6a3a] transition disabled:opacity-50"
        >
          {loading ? "Creando..." : "Registrarse"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="text-sm text-[#5c4033] hover:underline"
        >
          Ya tengo una cuenta
        </button>
      </form>
    </div>
  );
}
