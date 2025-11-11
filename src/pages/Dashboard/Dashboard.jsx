import WelcomeHero from "../../components/WelcomeHero";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

const monthly = [
  { name: "Jan", sales: 2400, net: 700 },
  { name: "Feb", sales: 2100, net: 500 },
  { name: "Mar", sales: 2800, net: 900 },
  { name: "Apr", sales: 2600, net: 800 },
  { name: "May", sales: 3000, net: 1100 },
  { name: "Jun", sales: 3200, net: 1200 },
];

const categories = [
  { name: "Snacks", value: 35 },
  { name: "Bebidas", value: 25 },
  { name: "Ensaladas", value: 20 },
  { name: "Combos", value: 20 },
];

const pieColors = ["#F4C2A1", "#F5D37A", "#6b7c5a", "#DFE8FF"];

function StatCard({ title, value }) {
  return (
    <div className="bg-offwhite shadow-soft rounded-2xl p-6 border border-sage/30">
      <h3 className="text-olive text-lg font-semibold mb-1">{title}</h3>
      <p className="text-3xl font-bold text-forest">{value}</p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Sección de bienvenida ilustrada */}
      <WelcomeHero />

      {/* KPIs (Tarjetas) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard title="Ventas" value="$2,430" />
        <StatCard title="Pedidos" value="128" />
        <StatCard title="Usuarios" value="32" />
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Línea */}
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-sage/30">
          <h4 className="text-olive font-semibold mb-4">Net Income</h4>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthly}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="net" stroke="#6b7c5a" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Barras */}
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-sage/30">
          <h4 className="text-olive font-semibold mb-4">Sales</h4>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthly}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#F4C2A1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie */}
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-sage/30">
          <h4 className="text-olive font-semibold mb-4">Income Variations</h4>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categories} dataKey="value" innerRadius={45} outerRadius={70} paddingAngle={3}>
                  {categories.map((_, i) => (
                    <Cell key={i} fill={pieColors[i % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
