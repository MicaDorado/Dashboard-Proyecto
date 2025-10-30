export default function Button({
  children,
  type = "button",
  onClick,
  variant = "primary",
  className = "",
}) {
  const base =
    "rounded-md font-semibold px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary:
      "bg-[#d4a373] text-[#3e2c24] hover:bg-[#c28b5c] focus:ring-[#d4a373]",
    secondary:
      "bg-[#5c4033] text-[#f8f4ef] hover:bg-[#3e2c24] focus:ring-[#5c4033]",
    outline:
      "border border-[#d4a373] text-[#3e2c24] hover:bg-[#d4a373]/10 focus:ring-[#d4a373]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
