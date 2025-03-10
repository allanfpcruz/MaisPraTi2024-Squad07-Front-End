import { useState } from "react"
import CreateOrder from "./CreateOrder"

function Anuncio(props) {
  const anuncio = props.data
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(isOpen ? false : true)
  }
  return(
    <>
      <h1>{anuncio.title}</h1>
      <h2>{anuncio.location}</h2>
      <h2>R${anuncio.daily_rent_value}</h2>
      <h2>Detalhes: </h2>
      <p>Câmbio: {anuncio.transmission}</p>
      <p>Quilometragem: {anuncio.mileage}</p>
      <p>Combustivel: {anuncio.main_fuel}/{anuncio.secundary_fuel}</p>
      <p>{anuncio.description}</p>
      <button onClick={toggleIsOpen}>Alugar</button>

      {isOpen && (
        <CreateOrder toggleIsOpen={toggleIsOpen} anuncio={anuncio} />
      )}
    </>
  )
}

export default Anuncio