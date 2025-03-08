import CarCard_Favorite from "./CarCard_Favorite";

function Favortie_Ads() {
  const anuncios = ['anuncio1', 'anuncio2', 'anuncio3']
  return(
    anuncios.map((anuncio) => (
      <CarCard_Favorite />
    ))
  )
}

export default Favortie_Ads