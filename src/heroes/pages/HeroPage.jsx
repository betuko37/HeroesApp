import { Navigate, useParams, useNavigate } from "react-router";
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const hero = getHeroById(id);

    if (!hero) {
        return <Navigate to={"/marvel"} />;
    }

    const heroImage = `/assets/${hero.id}.jpg`;


    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-10 bg-gradient-to-r from-red-900 to-red-700 text-white justify-center animate__animated animate__fadeIn">
            {/* Hero Image */}
            <div className="w-full md:w-1/2 flex justify-center animate__animated animate__zoomIn">
                <img 
                    src={heroImage} 
                    alt={hero.superhero} 
                    className="w-full max-w-md rounded-lg shadow-2xl border-4 border-red-500"
                />
            </div>
            
            {/* Hero Information */}
            <div className="w-full md:min-w-1/2 space-y-13 bg-red-950 p-10 rounded-lg shadow-lg h-auto flex flex-col justify-center items-center animate__animated animate__fadeInUp">
                <h1 className="text-5xl font-extrabold text-red-100 animate__animated animate__bounceIn">{hero.superhero}</h1>
                <p className="text-xl italic text-gray-300 animate__animated animate__fadeInUp">{hero.alter_ego}</p>
                <p className="text-lg animate__animated animate__fadeInUp">
                    <span className="font-semibold text-red-300">Personajes:</span> {hero.characters}
                </p>
                <p className="text-lg animate__animated animate__fadeInUp">
                    <span className="font-semibold text-red-300">Editorial:</span> {hero.publisher}
                </p>
                <p className="text-lg animate__animated animate__fadeInUp">
                    <span className="font-semibold text-red-300">Primera Aparición:</span> {hero.first_appearance}
                </p>
                <button 
                    onClick={() => navigate(-1)} 
                    className="mt-4 bg-red-400 text-red-900 font-semibold px-6 py-4 rounded-lg shadow-md transition hover:scale-105 hover:bg-gray-200 cursor-pointer animate__animated animate__pulse animate__infinite"
                >
                    ⬅ Regresar
                </button>
            </div>
        </div>
    );
};
