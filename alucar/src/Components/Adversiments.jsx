import { useContext } from "react"
import { userContext } from "../Context/userContext"
import MyAds from "./MyAds"
import Favortie_Ads from "./Favorite_Ads"

function Adversiments() {
  const { loggedUser } = useContext(userContext)
  const typeUser = loggedUser.perfil

  return(
    <>
      <h2>{typeUser === 'locador' ? 'Meus Anúncios' : 'Anúncios para Você'}</h2>
      {typeUser === 'locador' ?
        <MyAds />
      :
        <Favortie_Ads />
      }
    </>
  )
}

export default Adversiments