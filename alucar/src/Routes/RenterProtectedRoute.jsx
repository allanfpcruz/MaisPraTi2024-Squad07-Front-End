import { useContext } from "react";
import { userContext } from "../Context/userContext";
import { Navigate, Outlet } from "react-router-dom";

function RenterProtectedRoute() {
  const { loggedUser } = useContext(userContext)
  //verifica se esta logado e se o perfil logado e um locatario
  const isAuthenticated = loggedUser && loggedUser.perfil === 'locador'

  return isAuthenticated ? <Outlet /> : <Navigate to='/home' />
}

export default RenterProtectedRoute