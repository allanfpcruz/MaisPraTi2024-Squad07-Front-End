import AdsOrders from "../Components/AdsOrders"
import Logged_Navbar from "../Components/Logged_Navbar"
import Sidebar from "../Components/Sidebar"

function VerPedidos() {
  return(
    <>
      <Logged_Navbar />
      <Sidebar />
      <AdsOrders />
    </>
  )
}

export default VerPedidos