import "bootstrap/dist/css/bootstrap.min.css"
import "react-datepicker/dist/react-datepicker.css"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from "./Pages/Landing_Page"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Cadastro from "./Pages/Cadastro"
import Locador_Locatario from "./Pages/Locador_Locatario"
import CriarAnuncio from "./Pages/CriarAnuncio"
import EditarAnuncio from "./Pages/EditarAnuncio"
import Configuration from "./Pages/Configuration"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/criar-anuncio" element={<CriarAnuncio />} />
          <Route path="/editar-anuncio" element={<EditarAnuncio />} />
          <Route path="/locador-locatario" element={<Locador_Locatario />} />
          <Route path="/configuration" element={<Configuration />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App