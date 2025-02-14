import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import alucarLogo from '../assets/AlucarLogo.png'
import './Components_styles/Navbar_style.css'
import personIcon from '../assets/person.png'
import lockIcon from '../assets/lock.png'

function Navbar() {
  

    return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
          <div className="container-fluid">
        
        // Logo
            <img className='navbar-brand p-0' src={alucarLogo} alt="AluCar Logo" style={{ height: '80px' }}/>
    
        // Menu de Navegação
            <div className="collapse navbar-collapse" id="navbarNav">
          <div className='d-flex flex-grow-1 justify-content-center' id='menuLinks'>
            <ul className="w-50 navbar-nav d-flex justify-content-around">
                      <li className="nav-item">
                          <a className="nav-link" href="#encontre-seu-carro" id='link'>Encontre seu carro</a>
              </li>
              <li className='nav-item'>
                <a className="nav-link" href="#como-funciona" id='link'>Como funciona</a>
              </li>
              <li className='nav-item'>
                        <a className="nav-link" href="#contato" id='link'>Contato</a>
                      </li>
                  </ul>
          </div>
    
          // Botões de Login e Cadastro
                <div className="d-flex ms-auto" id='btnLinks'>
                    <button className="btn btn-dark me-2 rounded-1 d-flex align-items-center justify-content-center" id='btn1'><img className='me-2' src={personIcon} style={{ height: '15px' }}/>Login</button>
                    <button className="btn rounded-1 d-flex align-items-center justify-content-center" id='btn2'><img className='me-2' src={lockIcon} style={{ height: '18px' }}/>Cadastrar</button>
                </div>
            </div>
          </div>
      </nav>
    </>
  )
}

export default Navbar