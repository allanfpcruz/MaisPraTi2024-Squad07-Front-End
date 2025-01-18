import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import alucarLogo from './assets/AlucarLogo.png'
import './App.css'
import personIcon from './assets/person.png'
import lockIcon from './assets/lock.png'

function App() {
  

  	return (
    <>
	<nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
      	<div className="container-fluid">
        	<a className="navbar-brand p-0"><img src={alucarLogo} alt="AluCar Logo" style={{ height: '80px' }}/></a>
        
			<button
        	  className="navbar-toggler"
        	  type="button"
        	  data-bs-toggle="collapse"
        	  data-bs-target="#navbarNav"
        	  aria-controls="navbarNav"
        	  aria-expanded="false"
        	  aria-label="Toggle navigation"
        	>
        	<span className="navbar-toggler-icon"></span>
			</button>

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

export default App
