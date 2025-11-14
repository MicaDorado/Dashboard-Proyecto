import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  // Estados de todos los campos
  const [form, setForm] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    companyName: "",
    companyType: "",
    taxId: "",
    industry: "",
    website: "",
    address: "",
    shippingSame: true,
    password: "",
    confirmPassword: "",
    newsletter: false,
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado (conectaremos el backend en el próximo paso)");
  };

  // Estilo igual al Login
  const inputStyle =
    "border border-[#d4a373]/40 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#d4a373] bg-white";

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FAF4EC] py-10">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] max-w-4xl bg-white border border-[#d4a373]/40 rounded-xl p-10 shadow-md space-y-8"
      >
        <h2 className="text-3xl font-semibold text-center text-[#5c4033]">
          Registro de Empresa
        </h2>

        {/* Sección 1 */}
        <div>
          <h3 className="text-xl font-semibold text-[#5c4033] mb-4">
            Datos del Contacto Principal
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label>Nombre y Apellidos</label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div>
              <label>Cargo / Puesto</label>
              <input
                type="text"
                name="jobTitle"
                value={form.jobTitle}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div>
              <label>Correo Electrónico Corporativo</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div>
              <label>Número de Teléfono</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>
          </div>
        </div>

        {/* Sección 2 */}
        <div>
          <h3 className="text-xl font-semibold text-[#5c4033] mb-4">
            Datos de la Empresa
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label>Nombre Legal de la Empresa</label>
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div>
              <label>Tipo de Empresa</label>
              <input
                type="text"
                name="companyType"
                value={form.companyType}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div>
              <label>Número de Identificación Fiscal / CIF / VAT</label>
              <input
                type="text"
                name="taxId"
                value={form.taxId}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div>
              <label>Sector / Industria</label>
              <input
                type="text"
                name="industry"
                value={form.industry}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div className="md:col-span-2">
              <label>Sitio Web (Opcional)</label>
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>
          </div>
        </div>

        {/* Sección 3 */}
        <div>
          <h3 className="text-xl font-semibold text-[#5c4033] mb-4">
            Dirección y Facturación
          </h3>

          <label>Dirección Social Completa</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className={inputStyle}
          />

          <div className="mt-3 flex items-center gap-2">
            <input
              type="checkbox"
              name="shippingSame"
              checked={form.shippingSame}
              onChange={handleChange}
            />
            <label>La dirección de envío es la misma</label>
          </div>
        </div>

        {/* Sección 4 */}
        <div>
          <h3 className="text-xl font-semibold text-[#5c4033] mb-4">
            Preferencias y Legalidad
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div>
              <label>Confirmar contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div>
              <input
                type="checkbox"
                name="newsletter"
                checked={form.newsletter}
                onChange={handleChange}
              />{" "}
              Suscribirse al newsletter
            </div>

            <div>
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
              />{" "}
              Acepto Términos y Condiciones
            </div>
          </div>
        </div>

        {/* BOTÓN REGISTRARSE */}
        <button
          type="submit"
          className="bg-[#5c7d45] text-white rounded-md py-3 w-full font-semibold hover:bg-[#4d6a3a] transition"
        >
          Registrarse
        </button>

        {/* BOTÓN → VOLVER AL LOGIN */}
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="w-full text-center text-sm text-[#5c4033] hover:underline mt-2"
        >
          Ya tengo una cuenta
        </button>
      </form>
    </div>
  );
}
