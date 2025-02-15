import { HeroList } from "../components/HeroList";

export const DcPage = () => {
  return (
    <div className="min-h-screen p-2">
      <div className="container mx-auto text-center px-4 py-12">
        {/* Título con sombra y estilo llamativo */}
        <h1 className="text-6xl font-extrabold text-white drop-shadow-xl mb-6">
          DC Comics
        </h1>

        {/* Línea separadora estilizada */}
        <hr className="border-t-4 border-white mb-8 mx-auto w-1/4" />

        {/* Descripción breve */}
        <p className="text-xl text-white mb-10">
          Explore the heroes and stories of DC Comics. Discover the legendary characters that define the universe.
        </p>

        {/* Lista de héroes */}
        <div>
          <HeroList publisher="DC Comics" />
        </div>
      </div>
    </div>
  );
};
