import { useState } from "react"
import Formulario_Anuncio from "../Components/Formulario_Anuncio"
import CarCard_Editing from "../Components/CarCard_Editing"
import Logged_Navbar from "../Components/Logged_Navbar"

function CriarAnuncio() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    transmission: 'Manual',
    mileage: '',
    main_fuel: 'Álcool',
    secundary_fuel: 'Álcool',
    engine_power: '',
    steering_system: 'Hidráulico',
    number_of_seats: 0,
    plate: '',
    daily_rent_value: '',
    photos: [],
    desciption: ''
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