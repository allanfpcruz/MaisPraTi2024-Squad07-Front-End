import { useContext } from "react";
import { userContext } from "../Context/userContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { loggedUser } = useContext(userContext)
  //verifica se ha usuario logado(o objeto loggedUser deve apresentar chaves validas) e se nao ha chave perfil
  const isAuthenticated = loggedUser && Object.keys(loggedUser).length > 0 && !Object.hasOwn(loggedUser, "perfil")

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute