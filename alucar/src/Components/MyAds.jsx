import CarCard from "./CarCard"
import useCars from "../Hooks/UseCars"
import { userContext } from "../Context/userContext"
import { useContext, useEffect } from "react"

function MyAds() {
  //pega todos os anuncios atribuidos ao usuario logado
  // const { getAllMyAdds } = useCars()
  // const { loggedUser } = useContext(userContext)
  //recarrega os anuncios sempre que o componente e renderizado
  // useEffect(() => {  
  //   // const anuncios = getAllMyAdds(loggedUser.id)
  // }, [])

  //teste de retorno de anuncios
  let anuncios = [
    {
      id: 1,
      title: 'Carro 0km',
      location: '',
      transmission: 'Automático',
      mileage: '16800km',
      main_fuel: 'Álcool',
      secundary_fuel: 'Gasolina',
      engine_power: '',
      steering_system: 'Hidráulico',
      number_of_seats: 0,
      plate: '',
      daily_rent_value: '',
      photos: [],
      desciption: ''
    }, {
      id: 2,
      title: 'Seminovo',
      location: '',
      transmission: 'Automático',
      mileage: '15000km',
      main_fuel: 'Gás',
      secundary_fuel: 'Gasolina',
      engine_power: '',
      steering_system: 'Hidráulico',
      number_of_seats: 5,
      plate: '',
      daily_rent_value: '',
      photos: [],
      desciption: ''
    },
    {
      id: 3,
      title: 'Carro novo disponível',
      location: 'São Paulo, SP',
      transmission: 'Manual',
      mileage: '1320',
      main_fuel: 'Eletrico',
      secundary_fuel: 'Gasolina',
      engine_power: '',
      steering_system: 'Hidráulico',
      number_of_seats: 5,
      plate: '',
      daily_rent_value: '',
      photos: [],
      desciption: ''
    }
  ]

  return(
    <>
      {anuncios.map((anuncio) => (
        <CarCard data={anuncio} />
      ))}
    </>
  )
}

export default MyAds