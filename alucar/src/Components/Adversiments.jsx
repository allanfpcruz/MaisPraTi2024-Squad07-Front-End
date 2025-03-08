import { useState } from "react"
import MyAds from "./MyAds"
import Favortie_Ads from "./Favorite_Ads"

function Adversiments() {
  const [showFavorites, setShowFavorites] = useState(false)

  const toggleShow = () => {
    setShowFavorites(showFavorites ? false : true)
  }

  return(
    <>
      <h2>Anúncios</h2>
      <button onClick={toggleShow}>Meus Anúncios</button>
      <button onClick={toggleShow}>Favoritos</button>
      {showFavorites ?
        <Favortie_Ads />
      :
        <MyAds />
      }
    </>
  )
}

export default Adversiments