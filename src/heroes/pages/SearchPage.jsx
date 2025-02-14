import { useLocation, useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";
import 'animate.css';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="flex items-center justify-center p-6 animate__animated animate__fadeIn">
      <div className="bg-red-900 shadow-lg rounded-2xl p-8 w-full max-w-7xl flex flex-col md:flex-row gap-6 animate__animated animate__zoomIn">
        {/* Formulario de búsqueda - Izquierda */}
        <div className="w-full md:w-1/2 animate__animated animate__fadeInLeft">
          <h1 className="text-3xl font-bold text-gray-100 mb-6 ">
            Search for a Hero
          </h1>
          <form onSubmit={onSearchSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Search a Hero"
              className="w-full text-lg p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="bg-white text-red-950 px-6 py-3 rounded-lg font-semibold hover:bg-red-950 hover:text-white cursor-pointer transition animate__animated animate__bounce">
              Search
            </button>
          </form>
        </div>

        {/* Resultados - Derecha */}
        <div className="w-full md:w-1/2 animate__animated animate__fadeInRight">
          <h4 className="text-xl font-semibold text-gray-200">Results</h4>
          <hr className="my-2" />

          {q === "" ? (
            <div className="bg-blue-200 text-blue-700 p-3 rounded-lg text-center mt-4 animate__animated animate__flash ">
              Search for a hero
            </div>
          ) : (
            heroes.length === 0 && (
              <div className="bg-red-200 text-red-700 p-3 rounded-lg text-center mt-4 animate__animated animate__shakeX">
                No hero found with <b>{q}</b>
              </div>
            )
          )}

          {/* Contenedor en Grid para las cartas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
            {heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero}  />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
