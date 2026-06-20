const Index = () => {
	return (
		<div className="col-md-6 offset-md-3">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mx-auto">
						<li className="nav-item active mx-4">
							<strong className="text-center d-block">20</strong>
							<a className="nav-link active-select-profile" href="#"> Mis Libros</a>
						</li>
						<li className="nav-item mx-4">
							<strong className="text-center d-block">10</strong>
							<a className="nav-link" href="#">Cambios</a>
						</li>
						<li className="nav-item mx-4">
							<strong className="text-center d-block">5</strong>
							<a className="nav-link" href="#">Compras</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Index;