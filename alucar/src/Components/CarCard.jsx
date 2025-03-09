import { useNavigate } from 'react-router-dom'
import './Components_styles/CarCard.css'
import { useEffect } from 'react'
import useCars from '../Hooks/UseCars'

const CarCard = (infos) => {
	const data = infos.data
	const navigate = useNavigate()
	const { deleteAds } = useCars()

	return (
		<div className="car-card">
			<div className="image-gallery">
				<div className="main-image">
					<img
						src="./chevrolet-tracker-rs-2024.png"
						alt="Fiat Pulse 2024"
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
				<h3>{data.title}</h3>
				<div className="car-details">
					<span>
						<img src="./cambio.svg" alt="câmbio" className="icon" />
						{data.transmission}
					</span>
					<span>
						<img src="./km.svg" alt="km" className="icon" />
						{data.mileage} km
					</span>
					<span>
						<img src="./gasolina.svg" alt="combustível" className="icon" />
						{data.main_fuel}/{data.secundary_fuel}
					</span>
				</div>
			</div>

			<div className="pricing">
				<p>Por Dia</p>
				<h2>R$ {data.daily_rent_value},00</h2>
			</div>

			<div className="documents">
				{[
					{ name: 'NotaFiscalOuCRV.pdf', size: '236 kb' },
					{ name: 'CRLV.pdf', size: '103 kb' },
					{ name: 'IPVA.pdf', size: '422 kb' },
				].map((doc, index) => {
					const truncatedName =
						doc.name.length > 10 ? doc.name.slice(0, 10) + '...' : doc.name

					return (
						<div key={index} className="document-card">
							<p title={doc.name}>{truncatedName}</p>
							<span>{doc.size}</span>
							<button className="download-button">Baixar</button>
						</div>
					)
				})}
			</div>

			<div className="location">
				<img src="./location_on.svg" alt="location" className="icon" />
				{data.location}
			</div>

			<div className="action-buttons">
				<button className="edit-button" onClick={() => navigate('/editar-anuncio', { state: data })}>
					<img src="./edit.svg" alt="edit" className="icon" />
					Editar anúncio
				</button>
				<button className="orders-button" onClick={() => navigate('/pedidos-anuncio')}>Ver pedidos</button>
				<button className="delete-button" onClick={(() => deleteAds(data.id))}>Excluir anúncio</button>
			</div>
		</div>
	)
}

export default CarCard
