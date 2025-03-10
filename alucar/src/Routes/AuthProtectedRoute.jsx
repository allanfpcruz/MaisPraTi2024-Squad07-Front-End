import { useContext } from "react";
import { userContext } from "../Context/userContext";
import { Navigate, Outlet } from "react-router-dom";

function AuthProtectedRoute() {
  const { loggedUser } = useContext(userContext)
  console.log(loggedUser)
  //verifica se o usuario logado apresenta perfil(as rotas de home, configuration, etc precisam de um perfil definido para serem acessadas)
  const isAuthenticated = loggedUser && Object.hasOwn(loggedUser, "perfil");

  return isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default AuthProtectedRoute