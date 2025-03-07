import CarCard from "./CarCard"

function MyAds() {
  const quantidade = ['anuncio1', 'anuncio2']
  return(
    <>
      {quantidade.map((anuncio) => (
        <CarCard />
      ))}
    </>
  )
}

export default MyAds