import { useSelector } from "react-redux";
import WelcomeHero from "../../components/WelcomeHero";

function StatCard({ title, value }) {
  return (
    <div className="bg-offwhite shadow-soft rounded-2xl p-6 border border-sage/30">
      <h3 className="text-olive text-lg font-semibold mb-1">{title}</h3>
      <p className="text-3xl font-bold text-forest">{value}</p>
    </div>
  );
}

export default function Dashboard() {
  const auth = useSelector((state) => state.auth);
  const user = auth?.user;

  return (
    <div className="space-y-6">
      {/* Sección de bienvenida */}
      <WelcomeHero user={user || { name: "Usuario" }} />

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard title="Ventas" value="$2,430" />
        <StatCard title="Pedidos" value="128" />
        <StatCard title="Usuarios" value="32" />
      </div>
    </div>
  );
}
