import { useContext, useState } from "react"
import Formulario_Anuncio from "../Components/Formulario_Anuncio"
import CarCard_Editing from "../Components/CarCard_Editing"
import Logged_Navbar from "../Components/Logged_Navbar"
import { userContext } from "../Context/userContext"

function CriarAnuncio() {
  const { loggedUser } = useContext(userContext)
  const [formData, setFormData] = useState({
    owner_id: loggedUser.id,
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
      <div
        className="ad-cont"
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "flex-center",
        }}
      >
        <Formulario_Anuncio formData={formData} setFormData={setFormData} type="Criar" />
        <CarCard_Editing formData={formData} />
      </div>
    </>
  )
}

export default CriarAnuncio