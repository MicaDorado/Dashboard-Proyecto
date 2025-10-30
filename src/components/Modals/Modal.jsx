function DataTable({ title, data = [], columns = [] }) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-neutral-beige overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-neutral-beige bg-gradient-to-r from-neutral-cream to-transparent">
        <h2 className="text-lg font-bold text-neutral-dark">{title}</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-neutral-cream/50">
            <tr>
              {columns.map((column, index) => (
                <th 
                  key={index}
                  className="px-6 py-3 text-left text-xs font-semibold text-neutral-dark/70 uppercase tracking-wider"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-beige">
            {data.map((row, rowIndex) => (
              <tr 
                key={rowIndex}
                className="hover:bg-neutral-cream/30 transition-colors duration-150"
              >
                {columns.map((column, colIndex) => (
                  <td 
                    key={colIndex}
                    className="px-6 py-4 text-sm text-neutral-dark"
                  >
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer - Pagination */}
      <div className="px-6 py-4 border-t border-neutral-beige bg-neutral-cream/30 flex items-center justify-between">
        <p className="text-sm text-neutral-dark/70">
          Mostrando <span className="font-medium">{data.length}</span> resultados
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-md border border-neutral-beige text-sm text-neutral-dark hover:bg-neutral-cream transition-colors">
            Anterior
          </button>
          <button className="px-3 py-1 rounded-md bg-gradient-to-r from-secondary to-accent text-white text-sm hover:shadow-lg transition-all">
            1
          </button>
          <button className="px-3 py-1 rounded-md border border-neutral-beige text-sm text-neutral-dark hover:bg-neutral-cream transition-colors">
            2
          </button>
          <button className="px-3 py-1 rounded-md border border-neutral-beige text-sm text-neutral-dark hover:bg-neutral-cream transition-colors">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )
}

// Ejemplo de uso
function ExampleTable() {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'product', label: 'Producto' },
    { key: 'category', label: 'Categoría' },
    { 
      key: 'price', 
      label: 'Precio',
      render: (row) => `$${row.price}`
    },
    { 
      key: 'status', 
      label: 'Estado',
      render: (row) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          row.status === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {row.status}
        </span>
      )
    }
  ]

  const data = [
    { id: 1, product: 'Producto A', category: 'Alimentos', price: 25.99, status: 'Activo' },
    { id: 2, product: 'Producto B', category: 'Bebidas', price: 15.50, status: 'Activo' },
    { id: 3, product: 'Producto C', category: 'Snacks', price: 8.75, status: 'Inactivo' },
  ]

  return <DataTable title="Productos Recientes" data={data} columns={columns} />
}

export default DataTable
export { ExampleTable }