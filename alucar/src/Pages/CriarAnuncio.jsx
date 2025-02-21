import { useState } from "react"
import Formulario_Anuncio from "../Components/Formulario_Anuncio"
import Card from "../Components/Card"

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
      <Formulario_Anuncio formData={formData} setFormData={setFormData} />
      <Card formData={formData} />
    </>
  )
}

export default CriarAnuncio