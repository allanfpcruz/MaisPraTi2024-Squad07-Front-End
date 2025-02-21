import { useContext, useEffect } from "react"
import Logged_Navbar from "../Components/Logged_Navbar"
import Sidebar from "../Components/Sidebar"
import { userContext } from "../Context/userContext"

function Home() {
  const { loggedUser } = useContext(userContext)

  useEffect(() => {
    console.log('Usuário logado: ', loggedUser)
  }, [])

  return(
    <>
      <Logged_Navbar />
      <Sidebar />
    </>
  )
}

export default Home