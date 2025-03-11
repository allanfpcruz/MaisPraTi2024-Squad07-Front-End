import './Components_styles/Logged_Navbar.css'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import alucarLogo from '../assets/AlucarLogo.png'
import gridIcon from '../assets/Grid 01.png';
import bellIcon from '../assets/Bell 03.png';
import messageIcon from "../assets/Message Circle.png";
import CaretDown from '../assets/Caret Down.png';
import addIcon from '../assets/add.png';
import logoutIcon from '../assets/Logout 04.png';
import settingsIcon from '../assets/Settings.png';
import { userContext } from '../Context/userContext';

function Logged_Navbar() {
  const [isDropdownUserOpen, setIsDropdownUserOpen] = useState(false);
	const [isDropdownNotifOpen, setIsDropdownNotifOpen] = useState(false);
  const { loggedUser, removeLoggedUser } = useContext(userContext)
  const typeOfLoggedUser = loggedUser.perfil
  const navigate = useNavigate()

	const toggleDropdown = () => {
		setIsDropdownUserOpen(!isDropdownUserOpen);
	}

	const toggleDropdownNotif = () => {
		setIsDropdownNotifOpen(!isDropdownNotifOpen);
	}

  const logout = () => {
    navigate('/')
    removeLoggedUser()
  }

  return(
    <>
      <nav className="bg-white navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
        <div className="container-fluid">
          <img className='navbar-brand p-0' src={alucarLogo} alt="AluCar Logo" style={{ height: '80px' }}/>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className='d-flex flex-grow-1 justify-content-center' id='menuLinks'>
              <ul className="w-50 navbar-nav d-flex justify-content-around">
                <li className="nav-item">
                  <a className="nav-link" href="#" id='link' onClick={() => navigate(typeOfLoggedUser === 'locador' ? '/ver-pedidos' : '/meus-pedidos')}>
                    <img className='me-2 mb-1' src={gridIcon} style={{ height: '18px' }}/>
                    {typeOfLoggedUser === 'locador' ? 'Ver Pedidos' : 'Meus  Pedidos'}
                  </a>
                </li>
                <li className='nav-item'>
                  <a className="nav-link" href="#" id='link'>
                    <img className='me-2 mb-1' src={messageIcon} style={{ height: '18px' }}/>
                    Chat
                  </a>
                </li>
                <li className='nav-item d-flex flex-column'>
                  <a className="nav-link" href="#" onClick={toggleDropdownNotif} id='link'>
                    <img className='me-2 mb-1' src={bellIcon} style={{ height: '18px' }}/>
                    Notificações
                  </a>
                  {isDropdownNotifOpen && (
                    <div className={`w-25 bg-white position-absolute mt-5 p-2 bg-light border border-secondary rounded-1`} id='responsiveDropdown'>
                      <ul className="list-unstyled ">
                        <li className="mb-2">
                          <a href="#" className="nav-link bg-light p-1 " id='dropdownNotif'>
                            Prazo de entrega de veículo(Ex de anúncio)
                            <p className='ps-2 m-0'>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            
      
              
                                  
                                  
                        <div className="d-flex ms-auto" id='btnLinks'>
                            <button className="btn btn-light border border-secondary me-2 rounded-1 d-flex align-items-center justify-content-center" onClick={toggleDropdown} id='btn1'><img src=""/>{loggedUser.name}<img className='ms-2' src={CaretDown} style={{ height: '23px' }}/></button>
                            {typeOfLoggedUser === 'locador' ?
                              <button 
                              className="btn rounded-1 d-flex align-items-center justify-content-center" 
                              id='btn2' 
                              onClick={() => navigate('/criar-anuncio')}>
                                <img className='me-2' src={addIcon} style={{ height: '12px' }}/>
                                Criar Anúncio
                              </button>
                              :
                              <></> }
                            
      
                    {isDropdownUserOpen && (
                      <div className={`bg-white position-absolute mt-5 p-2 bg-light border border-secondary rounded-1`}>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2">
                            <a href="#" className="nav-link" id='dropdownUser' onClick={() => navigate('/configuration')}><img className='me-1' src={settingsIcon} alt="ícone de configuração" style={{ height: '22px' }} />Configurações</a>
                            </li>
                            <li className="">
                            <a href="#" className="nav-link" id='dropdownUser' onClick={logout}><img className='me-1' src={logoutIcon} alt="ícone de sair" style={{ height: '22px' }} />Sair</a>
                            </li>
                        </ul>
                        </div>
                    )}
                        </div>
                    </div>
                  </div>
              </nav>
    </>
  )
}

export default Logged_Navbar