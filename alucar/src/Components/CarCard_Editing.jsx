import { useEffect } from 'react'
import './Components_styles/CarCard_Editing.css'

const CarCard_Editing = ({ formData }) => {
	useEffect(() => {
		console.log(formData)
	}, [])
	return (
		<div className="car-card">
			<div className="image-gallery">
				<div className="main-image">
					<img
						src="./chevrolet-tracker-rs-2024.png"
						alt="car"
						className="car-image"
					/>
					<button className="prev-button">{'<'}</button>
					<button className="next-button">{'>'}</button>
				</div>
				<div className="thumbnail-container">
					<img
						src="./chevrolet-tracker-rs-2024.png"
						alt="thumb1"
						className="thumbnail"
					/>
					<img
						src="./chevrolet-tracker-rs-2024.png"
						alt="thumb2"
						className="thumbnail"
					/>
					<img
						src="./chevrolet-tracker-rs-2024.png"
						alt="thumb3"
						className="thumbnail"
					/>
				</div>
			</div>

			<div className="car-info">
				<h3>{formData.title}</h3>
				<div className="car-details">
					<span>
						<img src="./cambio.svg" alt="câmbio" className="icon" />
						{formData.transmission}
					</span>
					<span>
						<img src="./km.svg" alt="km" className="icon" />
						{formData.mileage} Km
					</span>
					<span>
						<img src="./gasolina.svg" alt="combustível" className="icon" />
						{formData.main_fuel}
					</span>
				</div>
			</div>

			<div className="pricing">
				<p>Por Dia</p>
				<h2>R$ {formData.daily_rent_value}</h2>
			</div>
			<div className="location">
				<img src="./location_on.svg" alt="location" className="icon" />
				{formData.location}
			</div>

			<button className="rent-button">
				<img src="./calendar_month.svg" alt="calendar" className="icon" />
				Alugue Agora
			</button>
		</div>
	)
}

export default CarCard_Editing
