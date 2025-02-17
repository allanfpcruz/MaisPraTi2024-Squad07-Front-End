import "bootstrap/dist/css/bootstrap.min.css"
import "react-datepicker/dist/react-datepicker.css"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Cadastro from "./Pages/Cadastro"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <Banner />
      <Search /> 
      <Como_Funciona />
      <Testimonials />
      o footer esta com algum problema de estilização
      <Footer /> */}
    </>
  )
}

export default App