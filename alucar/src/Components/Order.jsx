import { useContext } from "react"
import useCars from "../Hooks/UseCars"
import { userContext } from "../Context/userContext"
import useOrder from "../Hooks/UseOrders"

function Order({ orderData }) {
  const { loggedUser } = useContext(userContext)
  const { acceptOrder, rejectOrder } = useOrder()
  //pega o anuncio referente a esse pedido
  // const { getAdsById } = useCars()
  // const anuncio = getAdsById(orderData.anuncio_id)
  const anuncio = {
    id: 1,
    title: 'Carro 0km',
    location: 'São Bernardo, SP',
    transmission: 'Manual',
    mileage: '16800km',
    main_fuel: 'Álcool',
    secundary_fuel: 'Gasolina',
    engine_power: '660Cv',
    steering_system: 'Hidráulico',
    number_of_seats: 5,
    plate: 'FGQ1086',
    daily_rent_value: '200',
    photos: [],
    description: 'Carro manual em ótimo estado'
  }
  return(
    <>
      <h1>{anuncio.title}</h1>
      {loggedUser.perfil === 'locador' ?
        <div>
          <div>
            <button onClick={() => acceptOrder(orderData.id, orderData)}>Aceitar</button>
            <button onClick={() => rejectOrder(orderData.id)}>Rejeitar</button>
          </div>
        </div>
      : 
      <></>
      }
      {/* exibir card com pedido com as infos de orderData(pedido) e anuncio(anuncio correspondente ao pedido) */}
    </>
  )
}

export default Order