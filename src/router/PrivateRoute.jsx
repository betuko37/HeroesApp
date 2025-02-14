/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router";

export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    // Solo guardar el lastPath si el usuario NO está autenticado
    if (logged) {
        const lastPath = pathname + search;
        localStorage.setItem("lastPath", lastPath);
    }

    return logged ? children : <Navigate to="/login" />;
};
