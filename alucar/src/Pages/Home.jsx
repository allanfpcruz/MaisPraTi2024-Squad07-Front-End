import { useContext, useEffect } from "react"
import Logged_Navbar from "../Components/Logged_Navbar"
import Sidebar from "../Components/Sidebar"
import { userContext } from "../Context/userContext"
import Adversiments from "../Components/Adversiments"

function Home() {
  const { loggedUser } = useContext(userContext)
  const typeUser = loggedUser.perfil

  // useEffect(() => {
  //   console.log('Usuário logado: ', loggedUser)
  // }, [])

  return(
    <>
      <Logged_Navbar />
      <Sidebar />
      <main>
        <Adversiments />
      </main>
    </>
  )
}

export default Home