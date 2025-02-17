import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Search from '../Components/Search'
import Como_Funciona from "../Components/Como_Funciona"
import Testimonials from "../Components/Testimonials"
import Footer from "../Components/Footer"

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Search /> 
      <Como_Funciona />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home