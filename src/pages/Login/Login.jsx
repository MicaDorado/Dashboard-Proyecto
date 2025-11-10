import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user,
          password: pass,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Guarda el usuario en Redux
        dispatch(login({ username: user }));

        // Guarda sesión local
        localStorage.setItem("auth", "true");
        localStorage.setItem("token", data.token); // Guarda el token si lo devuelve

        // Redirige al dashboard
        navigate("/");
      } else {
        alert(data.message || "Usuario o contraseña inválidos");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f4ef]">
      <form
        onSubmit={handleLogin}
        className="bg-white border border-[#d4a373]/40 rounded-xl p-8 shadow-md w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold text-[#5c4033] mb-2 text-center">
          Iniciar sesión
        </h2>
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="border border-[#d4a373]/40 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="border border-[#d4a373]/40 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#d4a373] text-[#3e2c24] rounded-md py-2 font-semibold hover:bg-[#c28b5c] transition disabled:opacity-50"
        >
          {loading ? "Cargando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}

