/**
 * Capitaliza la primera letra de un texto.
 */
export function capitalize(text = "") {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Genera un ID aleatorio (ideal para claves temporales).
 */
export function generateId(prefix = "id") {
  return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Trunca texto largo y agrega "..."
 */
export function truncate(text = "", maxLength = 50) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
