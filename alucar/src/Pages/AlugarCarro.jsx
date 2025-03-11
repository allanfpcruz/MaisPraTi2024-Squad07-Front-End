import { useLocation } from "react-router-dom"
import Anuncio from "../Components/Anuncio"
import Logged_Navbar from "../Components/Logged_Navbar"

function AlugarCarro() {
  const location = useLocation()
  const anuncio = location.state
  return(
    <>
      <Logged_Navbar />
      <Anuncio data={anuncio} />
    </>
  )
}

export default AlugarCarro