import { Component, useContext } from 'react'
import './Components_styles/CarCard_Favorite.css'
import { userContext } from '../Context/userContext';
import { useLocation, useNavigate } from 'react-router-dom';

function CarCard_Favorite(props) {
	const anuncio = props.data
	const { loggedUser } = useContext(userContext)
	const navigate = useNavigate()
	const location = useLocation()

	//caso não esteja logado ou esteja logado como locador, vai para login
	//caso seja locatario, se estiver na landing-page, vai para home, caso ja esteja na home, vai para pagina de pedido
	const tryRent = () => {
		!loggedUser || loggedUser.perfil === 'locador' ? navigate('/login') : location.pathname === '/' ? navigate('/home') : navigate('/alugar-carro', { state: anuncio })
	}

	const rentCar = () => {
		alert('ok')
	}

	return (
		<section className="card-container">
			<div className="content">
				<img
					src="./chevrolet-tracker-rs-2024.png"
					alt=""
					className="image-content"
				/>
				<div className="user-content">
					<img src="./user.png" alt="user" className="user-icon" />
				</div>
				<div className="info-content">
					<h3>{anuncio.name}</h3>
					<hr />

					<div className="car-items">
						<div className="car-item">
							<img
								src="./cambio.svg"
								alt="speedometer"
								className="car-icon"
							/>
							<p>{anuncio.transmission}</p>
						</div>
						<div className="car-item">
							<img src="./km.svg" alt="gas station" className="car-icon" />
							<p>{anuncio.mileage}</p>
						</div>
						<div className="car-item">
							<img src="./gasolina.svg" alt="engine" className="car-icon" />
							<p>{anuncio.main_fuel}</p>
						</div>
					</div>
				</div>

				<div className="button-actions-content">
					<button className="button-action">
						<img
							src="./location_on.svg"
							alt="location on"
							className="search-icon"
						/>
						{anuncio.location}
					</button>
					<button className="button-action" onClick={tryRent}>
						<img
							src="./calendar_month.svg"
							alt="calendar month"
							className="search-icon"
						/>
						Alugue Agora
					</button>
				</div>
			</div>
		</section>
	)
}

export default CarCard_Favorite
