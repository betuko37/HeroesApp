/* eslint-disable no-unused-vars */
import { Link } from "react-router";
import PropTypes from "prop-types";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_apperance,
  characters,
}) => {
  const heroImage = `/assets/${id}.jpg`;

  return (
    <div className="max-w-2xs mx-auto bg-red-900 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.7)] overflow-hidden transform transition duration-300 hover:scale-105 border-3 border-red-950 animate__animated animate__bounceInUp">
      <img
        className="w-70 h-60 object-cover object-top"
        src={heroImage}
        alt={superhero}
      />
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-100">{superhero}</h2>
        <small className="text-sm text-gray-400 mt-2">{alter_ego}</small>
        <div className="mt-4 flex justify-between items-center">
          <Link
            to={`/hero/${id}`}
            className="text-lg px-4 py-2 bg-red-950 text-gray-200 rounded-lg shadow-md cursor-pointer hover:bg-red-800 transition"
          >
            Ver más
          </Link>
          <span className="text-gray-200 text-sm">{publisher}</span>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  id: PropTypes.string,
  superhero: PropTypes.string,
  publisher: PropTypes.string,
  alter_ego: PropTypes.string,
  first_apperance: PropTypes.string,
  characters: PropTypes.string,
};
