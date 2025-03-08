import CarCard from "./CarCard"

function MyAds() {
  const anuncios = ['anuncio1', 'anuncio2']
  return(
    <>
      {anuncios.map((anuncio) => (
        <CarCard />
      ))}
    </>
  )
}

export default MyAds