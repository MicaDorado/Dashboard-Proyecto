export default function WelcomeHero() {
  return (
    <div className="bg-blush rounded-2xl p-6 md:p-8 flex items-center justify-between shadow-soft border border-peach/40">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-olive">Bienvenida, Mica 👋</h2>
        <div className="inline-flex items-center mt-3 px-3 py-1 rounded-full bg-offwhite border border-sage/30 text-olive text-sm">
          Dashboard de comida saludable
        </div>
      </div>

      <svg className="hidden md:block w-56 h-32" viewBox="0 0 300 160">
        <circle cx="80" cy="90" r="40" className="fill-moss" />
        <ellipse cx="180" cy="95" rx="50" ry="28" className="fill-peach" />
        <circle cx="185" cy="88" r="10" className="fill-forest" />
        <rect x="62" y="50" width="10" height="20" className="fill-olive" />
      </svg>
    </div>
  );
}
