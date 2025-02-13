import { Link, NavLink, useNavigate } from "react-router";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onLogout = () => {
    setIsOpen(false);
    navigate("/login", { replace: true });
  };

  return (
    <nav className="bg-red-900 shadow-lg w-full py-4 px-10 flex justify-between items-center relative z-50">
      {/* Logo */}
      <Link
        className="text-2xl font-bold uppercase text-white tracking-widest hover:text-gray-300 transition"
        to="/"
      >
        Marvel Page
      </Link>

      {/* Navigation Links */}
      <div
        className={`md:flex gap-6 ${
          isOpen ? "block z-50" : "hidden"
        } absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-red-900 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
      >
        <NavLink
          to="/marvel"
          className={({ isActive }) =>
            isActive
              ? "block md:inline text-lg font-semibold text-white px-4 py-2 rounded-lg bg-red-700 transition duration-300 hover:bg-red-800 hover:shadow-md"
              : "block md:inline text-lg font-semibold text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-red-800 hover:shadow-md"
          }
          onClick={() => setIsOpen(false)}
        >
          Marvel
        </NavLink>
        <NavLink
          to="/dc"
          className={({ isActive }) =>
            isActive
              ? "block md:inline text-lg font-semibold text-white px-4 py-2 rounded-lg bg-red-700 transition duration-300 hover:bg-red-800 hover:shadow-md"
              : "block md:inline text-lg font-semibold text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-red-800 hover:shadow-md"
          }
          onClick={() => setIsOpen(false)}
        >
          DC
        </NavLink>
        <NavLink
          to="/login"
          className="block md:inline text-lg font-semibold text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-red-800 hover:shadow-md"
          onClick={onLogout}
        >
          Logout
        </NavLink>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-white text-2xl z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>
    </nav>
  );
};
