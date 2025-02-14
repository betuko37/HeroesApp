import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/marvel";
    login("Jesus Zavala");
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="flex h-screen">
      {/* Sección Izquierda - Imagen */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/back.jpg')",
        }}
      ></div>

      {/* Sección Derecha - Formulario */}
      <div className="w-1/2 bg-black flex justify-center items-center">
        <div className="w-2xl p-10 bg-white/90 shadow-2xl rounded-lg">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="/assets/R.png" alt="Marvel Logo" className="h-25" />
          </div>

          {/* Título */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Bienvenido de Nuevo !!</h1>

          {/* Inputs */}
          <div className="flex flex-col gap-4">
            <input
              className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              placeholder="Usuario"
            />
            <input
              className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="password"
              placeholder="Contraseña"
            />
          </div>

          {/* Recordar y Olvidé mi contraseña */}
          <div className="flex justify-between text-sm mt-3 text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Recordarme
            </label>
            <a href="#" className="text-red-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Botón de Login */}
          <button
            onClick={onLogin}
            className="w-full cursor-pointer bg-red-600 text-white text-lg font-semibold py-2 mt-6 rounded-lg transition hover:bg-red-800"
          >
            Login
          </button>

          {/* Redes Sociales */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-800 transition">
              <FaFacebook size={20} />
            </button>
            <button className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-600 transition">
              <FaTwitter size={20} />
            </button>
          </div>

          {/* Registro */}
          <p className="text-center text-gray-600 text-sm mt-4">
            ¿No tienes cuenta? <a href="#" className="text-red-500 hover:underline">Regístrate aquí</a>
          </p>
        </div>
      </div>
    </div>
  );
};
