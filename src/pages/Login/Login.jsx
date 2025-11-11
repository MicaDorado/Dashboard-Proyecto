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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user,
          password: pass,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(login({ username: user }));
        localStorage.setItem("auth", "true");
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        alert(data.message || "Usuario o contraseña inválidos");
      }
    } catch (error) {
      alert("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF4EC]">
      <form
        onSubmit={handleLogin}
        className="bg-white border border-[#d4a373]/40 rounded-xl p-10 shadow-md w-[350px] flex flex-col items-center gap-5"
      >
        {/* LOGO CENTRADO */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3 opacity-95">
            <img
              src="/tenedor-logo.png"
              alt="Logo Tenedor"
              className="w-14 h-14"
            />
            <img
              src="/letras-logo.png"
              alt="Logo Letras"
              className="h-10"
            />
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-[#5c4033]">
          Iniciar sesión
        </h2>

        <input
          type="text"
          placeholder="Email"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="border border-[#d4a373]/40 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="border border-[#d4a373]/40 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#5c7d45] text-white rounded-md py-2 w-full font-semibold hover:bg-[#4d6a3a] transition disabled:opacity-50"
        >
          {loading ? "Cargando..." : "Entrar"}
        </button>

        {/* ✅ Botón para ir a Registrar */}
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="text-sm text-[#5c4033] hover:underline mt-2"
        >
          Crear nuevo usuario
        </button>
      </form>
    </div>
  );
}

