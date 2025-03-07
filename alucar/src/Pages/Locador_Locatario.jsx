import { useEffect } from "react"
import RolePage from "../Components/RolePage"
import { useLocation } from "react-router-dom"

function Locador_Locatario() {
  const location = useLocation()
  const userData = location.state
  return(
    <RolePage userData = {userData} />
  )
}

export default Locador_Locatario