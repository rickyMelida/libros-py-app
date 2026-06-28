const Index = () => {
	return (
		<div className="d-flex justify-content-between align-items-center mt-5 mb-3 flex-wrap gap-2">
			<h5 className="mb-0">Mis Libros</h5>
			<ul className="nav nav-pills">
				<li className="nav-item"><a className="nav-link active" href="#">Activos</a></li>
				<li className="nav-item"><a className="nav-link" href="#">Vendidos</a></li>
				<li className="nav-item"><a className="nav-link" href="#">Pausados</a></li>
			</ul>
		</div>
	)
}

export default Index;