import { useLocation, useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);
    const heroes = getHeroesByName(q);

    const {searchText, onInputChange} = useForm({
        searchText: '',
    });

    const onSearchSubmit = (event) =>{
        event.preventDefault();
        if(searchText.trim().length <= 1) return;

        navigate(`?q=${searchText}`)
    }


    return (
        <div className=" flex items-center justify-center p-6">
            <div className="bg-red-900 shadow-lg rounded-2xl p-8 w-full max-w-7xl flex flex-col md:flex-row gap-6">
                {/* Formulario de búsqueda - Izquierda */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-bold text-gray-100 mb-6">Search for a Hero</h1>
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
                        <button 
                            className=" bg-white text-red-950 px-6 py-3 rounded-lg font-semibold hover:bg-red-950 hover:text-white cursor-pointer transition">
                            Search
                        </button>
                    </form>
                </div>

                {/* Resultados - Derecha */}
                <div className="w-full md:w-1/2">
                    <h4 className="text-xl font-semibold text-gray-200">Results</h4>
                    <hr className="my-2" />
                    
                    {/* Alerta de búsqueda */}
                    <div className="bg-blue-200 text-blue-700 p-3 rounded-lg text-center mt-4">
                        Search for a hero
                    </div>

                    {/* Alerta de error */}
                    <div className="bg-red-200 text-red-700 p-3 rounded-lg text-center mt-4">
                        No hero found with <b>{q}</b>
                    </div>

                        {
                            heroes.map( hero => (
                                <HeroCard key={hero.id} {...hero}/>
                            ))
                        }

                </div>
            </div>
        </div>
    );
}
