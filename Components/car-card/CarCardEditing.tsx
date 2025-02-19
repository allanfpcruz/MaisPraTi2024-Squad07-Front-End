import './CarCardEditing.css'

const CarCardEditing = () => {
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
				Vila Nova Conceição - São Paulo
			</div>

			<div className="action-buttons">
				<button className="edit-button">
					<img src="./edit.svg" alt="edit" className="icon" />
					Editar anúncio
				</button>
				<button className="orders-button">Ver pedidos</button>
				<button className="delete-button">Excluir anúncio</button>
			</div>
		</div>
	)
}

export default CarCardEditing
