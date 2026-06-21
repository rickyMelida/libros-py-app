const Index = () => {
	return (
		<>

			<div className="container">
				<div className="profile-card d-flex flex-wrap align-items-center gap-4">
					<img src="https://i.pravatar.cc/150?img=12" className="avatar" alt="Avatar de usuario" />

					<div className="flex-grow-1">
						<h4 className="mb-1">Camila Ríos</h4>
						<p className="text-muted mb-1"><i className="fa-solid fa-location-dot me-1"></i> Asunción, Paraguay</p>
						<p className="text-muted mb-0"><i className="fa-solid fa-star text-warning me-1"></i> 4.8 · 32 reseñas</p>
					</div>

					<div className="d-flex gap-4">
						<div className="stat-block">
							<div className="stat-number">12</div>
							<div className="stat-label">Publicados</div>
						</div>
						<div className="stat-block">
							<div className="stat-number">27</div>
							<div className="stat-label">Vendidos</div>
						</div>
						<div className="stat-block">
							<div className="stat-number">98%</div>
							<div className="stat-label">Respuesta</div>
						</div>
					</div>

					<button className="btn btn-success px-4 rounded-pill" data-bs-toggle="modal" data-bs-target="#modalProducto">
						<i className="fa-solid fa-plus me-2"></i>Agregar producto
					</button>
				</div>


				{/*<!-- TABS DE ESTADO -->*/}
				<div className="d-flex justify-content-between align-items-center mt-5 mb-3 flex-wrap gap-2">
					<h5 className="mb-0">Mis productos</h5>
					<ul className="nav nav-pills">
						<li className="nav-item"><a className="nav-link active" href="#">Activos</a></li>
						<li className="nav-item"><a className="nav-link" href="#">Vendidos</a></li>
						<li className="nav-item"><a className="nav-link" href="#">Pausados</a></li>
					</ul>
				</div>


				{/*<!-- GRILLA DE PRODUCTOS -->*/}
				<div className="row g-4 pb-5">

					{/*<!-- Card "agregar producto" dentro de la grilla -->*/}
					<div className="col-6 col-md-4 col-lg-3">
						<div className="add-product-card" data-bs-toggle="modal" data-bs-target="#modalProducto">
							<i className="fa-solid fa-circle-plus"></i>
							<span className="fw-semibold">Agregar producto</span>
						</div>
					</div>

					{/*<!-- Producto 1 --> */}
					<div className="col-6 col-md-4 col-lg-3">
						<div className="product-card">
							<div className="position-relative">
								<img src="https://picsum.photos/300/200?random=1" alt="Producto" />
								<span className="badge bg-success badge-status position-absolute top-0 end-0 m-2">Activo</span>
							</div>
							<div className="p-3">
								<h6 className="mb-1">Bicicleta rodado 26</h6>
								<p className="text-muted small mb-2">Publicado hace 3 días</p>
								<p className="fw-bold text-success mb-3">Gs. 850.000</p>
								<div className="d-flex gap-2 product-actions">
									<button className="btn btn-outline-secondary btn-sm flex-fill"><i className="fa-solid fa-pen"></i> <span className="d-none d-sm-inline">Editar</span></button>
									<button className="btn btn-outline-danger btn-sm"><i className="fa-solid fa-trash"></i></button>
								</div>
							</div>
						</div>
					</div>

					{/*<!-- Producto 2 -->*/}
					<div className="col-6 col-md-4 col-lg-3">
						<div className="product-card">
							<div className="position-relative">
								<img src="https://picsum.photos/300/200?random=2" alt="Producto" />
								<span className="badge bg-secondary badge-status position-absolute top-0 end-0 m-2">Pausado</span>
							</div>
							<div className="p-3">
								<h6 className="mb-1">Silla de oficina</h6>
								<p className="text-muted small mb-2">Publicado hace 1 semana</p>
								<p className="fw-bold text-success mb-3">Gs. 420.000</p>
								<div className="d-flex gap-2 product-actions">
									<button className="btn btn-outline-secondary btn-sm flex-fill"><i className="fa-solid fa-pen"></i> <span className="d-none d-sm-inline">Editar</span></button>
									<button className="btn btn-outline-danger btn-sm"><i className="fa-solid fa-trash"></i></button>
								</div>
							</div>
						</div>
					</div>

					{/*<!-- Producto 3 --> */}
					<div className="col-6 col-md-4 col-lg-3">
						<div className="product-card">
							<div className="position-relative">
								<img src="https://picsum.photos/300/200?random=3" alt="Producto" />
								<span className="badge bg-primary badge-status position-absolute top-0 end-0 m-2">Vendido</span>
							</div>
							<div className="p-3">
								<h6 className="mb-1">Notebook Lenovo i5</h6>
								<p className="text-muted small mb-2">Publicado hace 2 semanas</p>
								<p className="fw-bold text-success mb-3">Gs. 2.300.000</p>
								<div className="d-flex gap-2 product-actions">
									<button className="btn btn-outline-secondary btn-sm flex-fill" disabled><i className="fa-solid fa-pen"></i> <span className="d-none d-sm-inline">Editar</span></button>
									<button className="btn btn-outline-danger btn-sm"><i className="fa-solid fa-trash"></i></button>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<button className="fab-add" data-bs-toggle="modal" data-bs-target="#modalProducto" aria-label="Agregar producto">
				<i className="fa-solid fa-plus"></i>
			</button>

			
		</>
	)
}

export default Index;