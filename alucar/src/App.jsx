import "bootstrap/dist/css/bootstrap.min.css"
import "react-datepicker/dist/react-datepicker.css"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from "./Pages/Landing_Page"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Cadastro from "./Pages/Cadastro"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App