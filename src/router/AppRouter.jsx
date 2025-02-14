import { Route, Routes } from "react-router";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      
      <Routes>
        {/* Auth Router */}
        <Route path="/login" element={ <PublicRoute> <LoginPage/> </PublicRoute>} />

        {/* ruta protegida */}
        <Route path="/*" element={ <PrivateRoute> <HeroesRoutes /> </PrivateRoute>} />


          {/* Antigua forma publica */}
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}

      </Routes>
    </>
  );
};
