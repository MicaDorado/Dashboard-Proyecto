/**
 * Convierte una fecha ISO o timestamp a formato legible: DD/MM/YYYY
 *
 * Ejemplo:
 * formatDate("2025-10-27T14:00:00Z") → "27/10/2025"
 */
export function formatDate(dateString, locale = "es-AR") {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
