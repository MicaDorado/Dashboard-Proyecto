export default function WelcomeHero({ user }) {
  const name = user?.name ?? "Usuario";

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-soft border border-sage/30">
      
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-olive">
          Bienvenido/a, {name} 👋
        </h2>
        <p className="text-sage mt-2 text-sm md:text-base">
          Aquí puedes administrar tu menú, pedidos y desempeño general.
        </p>
      </div>

      <img 
        src="/tenedor-logo.png" 
        alt="Logo"
        className="hidden md:block w-28 opacity-80"
      />
    </div>
  );
}
