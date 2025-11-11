/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#6B7C5A",      // Primario
        sage: "#8A9B7A",        // Secundario / bordes suaves
        cream: "#F2EDE4",       // Fondo general
        pistachio: "#C8D6A8",   // Acentos claros
        olive: "#4A5D3E",       // Texto principal
        offwhite: "#FAF9F5",    // Blanco cálido
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
}
