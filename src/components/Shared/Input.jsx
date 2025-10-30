export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  required = false,
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-[#5c4033]">{label}</label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`border border-[#d4a373]/40 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#d4a373] ${className}`}
      />
    </div>
  );
}
