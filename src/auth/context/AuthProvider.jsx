/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";


//inicializacion 
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user: user,
  };

};

export const AuthProvider = ({ children }) => {

    //conexion entre reducer y inicializacion
  const [authState, dispatch] = useReducer(authReducer, {}, init);


    //funcion de login
  const login = async (name) => {
    const user = { id: "ABC", name };
    const action = {type: types.login, payload: user};
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };


  const logout = async() =>{
    localStorage.removeItem('user');
    const action = {type: types.logout};
    dispatch(action);
  }




  //lo que regresa ya todo validado
  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
