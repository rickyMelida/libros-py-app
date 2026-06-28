const Index = () => {
	return (
		<div className="mobile-buy-bar">
			<div className="flex-grow-1">
				<div className="price-tag-mini">Gs. 4.500.000</div>
				<div className="seller-stat" style={{ fontSize: ".7rem" }}>Stock disponible</div>
			</div>
			<button className="btn-fav-detail"
				aria-label="Agregar a favoritos"

			>
				<i className="fa-regular fa-heart"></i>
			</button>
			<button className="btn btn-comprar-grande px-4">Comprar</button>
		</div>
	)
}

export default Index;