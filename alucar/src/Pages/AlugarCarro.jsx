import { useLocation } from "react-router-dom"
import Anuncio from "../Components/Anuncio"

function AlugarCarro() {
  const location = useLocation()
  const anuncio = location.state
  return(
    <>
      <Anuncio data={anuncio} />
    </>
  )
}

export default AlugarCarro