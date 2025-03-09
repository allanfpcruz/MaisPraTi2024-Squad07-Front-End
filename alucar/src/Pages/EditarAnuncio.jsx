import { useEffect, useState } from "react"
import Formulario_Anuncio from "../Components/Formulario_Anuncio"
import CarCard_Editing from "../Components/CarCard_Editing"
import Logged_Navbar from "../Components/Logged_Navbar"
import { useLocation } from "react-router-dom"

function EditarAnuncio() {
  const location = useLocation()
  let ads = location.state
  const [formData, setFormData] = useState({ ...ads })

  useEffect(() => {
    console.log(formData)
  }, [])

  return (
    <>
      <Logged_Navbar />
      <Formulario_Anuncio formData={formData} setFormData={setFormData} type='Editar' />
      <CarCard_Editing formData={formData} />
    </>
  )
}

export default EditarAnuncio