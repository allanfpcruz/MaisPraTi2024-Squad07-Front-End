import "bootstrap/dist/css/bootstrap.min.css"
import "react-datepicker/dist/react-datepicker.css"
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Search from './Components/Search'
import Como_Funciona from "./Components/Como_Funciona"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Search /> 
      <Como_Funciona />
      {/* o footer esta com algum problema de estilização */}
      {/* <Footer /> */}
    </>
  )
}

export default App