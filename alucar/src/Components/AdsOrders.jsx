import { useLocation } from "react-router-dom"
import useCars from "../Hooks/UseCars"
import Order from "./Order"
import useOrder from "../Hooks/UseOrders"
import { useContext } from "react"
import { userContext } from "../Context/userContext"

function AdsOrders({ anuncio_id }) {
  // const { getAllOrdersByAdsId } = useOrder()
  // const { loggedUser } = useContext(userContext)
  // let orders
  // anuncio_id ? 
  // //pega todos os pedidos referentes ao anuncio acessado
  // orders = getAllOrdersByAdsId(anuncio_id)
  // :
  // //pega todos os pedidos
  // orders = getAllOrdersByRent(loggedUser.id)

  const orders = [
    {
      anuncio_id: 1,
      driver_id: "f52519d8-e0e8-4a0f-88af-3bd63274e026",
      end_data: "2025-03-12",
      start_data: "2025-03-11",
      total_days: 2,
      total_value: 400,
      accepted: false
    },
    {
      anuncio_id: 2,
      driver_id: "f52519d8-e0e8-4a0f-88af-3bd63274e026",
      end_data: "2025-03-15",
      start_data: "2025-04-17",
      total_days: 3,
      total_value: 600,
      accepted: true
    },
  ]
  return(
    <>  
      {
        orders.map(order => (
          <Order orderData={order} />
        ))
      }
    </>
  )
}

export default AdsOrders