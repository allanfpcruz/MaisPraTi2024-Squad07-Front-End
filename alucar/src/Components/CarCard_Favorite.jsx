import { Component } from 'react'
import './Components_styles/Card.css'

export class CarCard_Favorite extends Component {
	render() {
		const formData = this.props.formData
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
						<h3>{formData.nome}</h3>
						<hr />

						<div className="car-items">
							<div className="car-item">
								<img
									src="./cambio.svg"
									alt="speedometer"
									className="car-icon"
								/>
								<p>{formData.cambio}</p>
							</div>
							<div className="car-item">
								<img src="./km.svg" alt="gas station" className="car-icon" />
								<p>{formData.quilometragem}</p>
							</div>
							<div className="car-item">
								<img src="./gasolina.svg" alt="engine" className="car-icon" />
								<p>{formData.combustivel}</p>
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
							{formData.local}
						</button>
						<button className="button-action">
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
}

export default CarCard_Favorite
