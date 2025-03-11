import { useContext } from "react";
import { userContext } from "../Context/userContext";
import { Navigate, Outlet } from "react-router-dom";

function DriverProtectedRoute() {
  const { loggedUser } = useContext(userContext)
  //verifica se esta logado e se o perfil logado e um locatario
  const isAuthenticated = loggedUser && loggedUser.perfil === 'locatário'

  return isAuthenticated ? <Outlet /> : <Navigate to='/home' />
}

export default DriverProtectedRoute