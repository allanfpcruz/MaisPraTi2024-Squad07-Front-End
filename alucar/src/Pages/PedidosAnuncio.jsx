import { useLocation } from "react-router-dom";
import AdsOrders from "../Components/AdsOrders";
import Logged_Navbar from "../Components/Logged_Navbar";
import Sidebar from "../Components/Sidebar";

function PedidosAnuncio() {
  const location = useLocation()
  const anuncio_id = location.state

  return(
    <>
      <Logged_Navbar />
      <Sidebar />
      <AdsOrders anuncio_id={anuncio_id} />
    </>
  )
}

export default PedidosAnuncio