import { Link, NavLink, useNavigate } from "react-router";
import { FaBars } from "react-icons/fa";
import { useState, useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logged, user, logout } = useContext(AuthContext);

  const onLogout = () => {
    setIsOpen(false);
    navigate("/login", { replace: true });
    logout();
  };

  return (
    <nav className="bg-red-900 shadow-lg w-full py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50">
      {/* Logo */}
      <Link
        className="text-2xl font-bold uppercase text-white tracking-widest hover:text-gray-300 transition"
        to="/"
      >
        Marvel Page
      </Link>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-white text-2xl z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      {/* Navigation Links */}
      <div
        className={`fixed md:relative top-0 left-0 w-full h-full md:h-auto md:w-auto bg-red-900 md:bg-transparent p-6 md:p-0 flex flex-col md:flex-row items-center gap-6 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Botón para cerrar en móviles */}
        <button
          className="md:hidden absolute top-5 right-6 text-white text-3xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        {logged && (
          <span className="text-white font-semibold px-4 py-2 rounded-lg bg-red-800">
            Bienvenido, {user.name} 👋
          </span>
        )}

        <NavLink
          to="/marvel"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold text-white px-4 py-2 rounded-lg bg-red-700 transition duration-300 hover:bg-red-800 hover:shadow-md"
              : "text-lg font-semibold text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-red-800 hover:shadow-md"
          }
          onClick={() => setIsOpen(false)}
        >
          Marvel
        </NavLink>

        <NavLink
          to="/dc"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold text-white px-4 py-2 rounded-lg bg-red-700 transition duration-300 hover:bg-red-800 hover:shadow-md"
              : "text-lg font-semibold text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-red-800 hover:shadow-md"
          }
          onClick={() => setIsOpen(false)}
        >
          DC
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold text-white px-4 py-2 rounded-lg bg-red-700 transition duration-300 hover:bg-red-800 hover:shadow-md"
              : "text-lg font-semibold text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-red-800 hover:shadow-md"
          }
          onClick={() => setIsOpen(false)}
        >
          Search
        </NavLink>

        <NavLink
          to="/login"
          className="text-lg font-semibold text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-red-800 hover:shadow-md"
          onClick={onLogout}
        >
          Logout
        </NavLink>
      </div>
    </nav>
  );
};
