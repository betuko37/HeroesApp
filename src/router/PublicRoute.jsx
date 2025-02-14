import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router";


// eslint-disable-next-line react/prop-types
export const PublicRoute = ({ children }) => {
 
    const { logged } = useContext(AuthContext);
 
    const lastPath = localStorage.getItem('lastPath');
 
    return !logged ? children : <Navigate to={lastPath} />
}