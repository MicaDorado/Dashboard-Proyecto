function StatCard({ title, value, change, icon, trend = 'up' }) {
  const trendColor = trend === 'up' ? 'text-green-600' : 'text-red-600'
  const trendBg = trend === 'up' ? 'bg-green-50' : 'bg-red-50'

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-beige">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-dark/70 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-neutral-dark mb-2">{value}</h3>
          
          {change && (
            <div className="flex items-center gap-2">
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${trendBg} ${trendColor}`}>
                {trend === 'up' ? '↑' : '↓'} {change}
              </span>
              <span className="text-xs text-neutral-dark/50">vs mes anterior</span>
            </div>
          )}
        </div>

        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-2xl shadow-md">
          {icon}
        </div>
      </div>
    </div>
  )
}

// Ejemplo de uso
function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard 
        title="Ventas Totales" 
        value="$45,231" 
        change="+12.5%" 
        icon="💰"
        trend="up"
      />
      <StatCard 
        title="Pedidos" 
        value="1,234" 
        change="+8.2%" 
        icon="📦"
        trend="up"
      />
      <StatCard 
        title="Productos" 
        value="567" 
        change="-2.4%" 
        icon="🏪"
        trend="down"
      />
      <StatCard 
        title="Clientes" 
        value="892" 
        change="+15.3%" 
        icon="👥"
        trend="up"
      />
    </div>
  )
}

export default StatCard
export { DashboardCards }