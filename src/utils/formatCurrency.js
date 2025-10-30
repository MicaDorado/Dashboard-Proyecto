/**
 * Formatea un número a moneda local (por defecto pesos argentinos).
 * 
 * Ejemplo:
 * formatCurrency(15000) → "$15.000,00"
 */
export function formatCurrency(value, currency = "ARS", locale = "es-AR") {
  if (isNaN(value)) return "$0,00";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(value);
}
