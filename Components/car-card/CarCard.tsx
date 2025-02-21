import './CarCard.css'

const CarCard = () => {
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
				<h3>Fiat Pulse 2024</h3>
				<div className="car-details">
					<span>
						<img src="./cambio.svg" alt="câmbio" className="icon" />
						Manual
					</span>
					<span>
						<img src="./km.svg" alt="km" className="icon" />
						135.921 km
					</span>
					<span>
						<img src="./gasolina.svg" alt="combustível" className="icon" />
						Gasolina/Etanol
					</span>
				</div>
			</div>

			<div className="pricing">
				<p>Por Dia</p>
				<h2>R$ 180,00</h2>
			</div>
			<div className="location">
				<img src="./location_on.svg" alt="location" className="icon" />
				Vila Nova Conceição - São Paulo
			</div>

			<button className="rent-button">
				<img src="./calendar_month.svg" alt="calendar" className="icon" />
				Alugue Agora
			</button>
		</div>
	)
}

export default CarCard
