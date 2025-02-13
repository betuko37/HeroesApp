import { Navigate, Route, Routes } from "react-router";
import { DcPage, MarvelPage, SearchPage, HeroPage} from "../../heroes";
import { Navbar } from "../../ui";;

export const HeroesRoutes = () => {
  return (
    <div className="bg-red-950  h-screen text-2xl text-white">
      <Navbar />

      <div className="container mx-auto px-2 py-6">
        <Routes>
          {/* Heroes Router */}
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DcPage />} />

          <Route path="/search" element={<SearchPage />} />
          <Route path="/hero/:id" element={<HeroPage />} />

          {/* Ruta prederminada */}
          <Route path="/" element={<Navigate to={"/marvel"} />} />
        </Routes>
      </div>
    </div>
  );
};
