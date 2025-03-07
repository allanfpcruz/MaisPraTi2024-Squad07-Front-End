import CarCard_Editing_Favorite from "./CarCard_Editing_Favorite";

function Favortie_Ads() {
  const quantidade = ['anuncio1', 'anuncio2', 'anuncio3']
  return(
    quantidade.map((anuncio) => (
      <CarCard_Editing_Favorite />
    ))
  )
}

export default Favortie_Ads