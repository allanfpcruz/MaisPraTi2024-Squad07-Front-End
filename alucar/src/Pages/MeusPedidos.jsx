import Logged_Navbar from "../Components/Logged_Navbar"
import MyOrders from "../Components/MyOrders"
import Sidebar from "../Components/Sidebar"

function MeusPedidos() {
  return(
    <>
      <Logged_Navbar />
      <Sidebar />
      <MyOrders />
    </>
  )
}

export default MeusPedidos