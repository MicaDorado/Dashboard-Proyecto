export default function Select({
  label,
  options = [],
  value,
  onChange,
  className = "",
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-[#5c4033]">{label}</label>
      )}
      <select
        value={value}
        onChange={onChange}
        className={`border border-[#d4a373]/40 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a373] ${className}`}
      >
        <option value="">Seleccionar...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
