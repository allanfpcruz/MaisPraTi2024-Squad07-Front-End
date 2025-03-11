import { useContext } from "react"
import useOrder from "../Hooks/UseOrders"
import { userContext } from "../Context/userContext"
import Order from "./Order"

function MyOrders() {
  // const { getAllMyOrders } = useOrder()
  // const { loggedUser } = useContext(userContext)
  // //pega todos os pedidos com base no usuario logado
  // const orders = getAllMyOrders(loggedUser.id)

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

  const acceptedOrders = orders.filter(order => order.accepted === true)
  const analysingOrders = orders.filter(order => order.accepted === false)
  return(
    <>
      <h3>Pedidos em análise: </h3>
      {analysingOrders.map(order => (
          <Order orderData={order} />
      ))}
      <h3>Pedidos aceitos: </h3>
      {acceptedOrders.map(order => (
          <Order orderData={order} />
      ))}
    </>
  )
}

export default MyOrders