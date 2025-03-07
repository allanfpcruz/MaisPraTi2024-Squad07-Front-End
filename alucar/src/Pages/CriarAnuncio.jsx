import { useState } from "react"
import Formulario_Anuncio from "../Components/Formulario_Anuncio"
import CarCard_Editing from "../Components/CarCard_Editing"
import Logged_Navbar from "../Components/Logged_Navbar"

function CriarAnuncio() {
  const [formData, setFormData] = useState({
    nome: '',
    local: '',
    cambio: 'Manual',
    quilometragem: '',
    combustivel: 'Álcool',
    altcombustivel: 'Álcool',
    potencia: '',
    sistemadirecao: 'Hidráulico',
    numpassageiros: 0,
    placa: '',
    valor: '',
    documentos: [],
    descricao: ''
  })

  return (
    <>
      <Logged_Navbar />
      <Formulario_Anuncio formData={formData} setFormData={setFormData} type='Criar' />
      <CarCard_Editing formData={formData} />
    </>
  )
}

export default CriarAnuncio