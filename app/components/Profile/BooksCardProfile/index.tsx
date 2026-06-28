import { Pencil, Trash } from "lucide-react";

const Index = () => {
	return (
		<>
			{/*<!-- Producto 1 --> */}
			<div className="col-6 col-md-4 col-lg-3">
				<div className="product-card">
					<div className="position-relative">
						<img src="https://picsum.photos/300/200?random=1" alt="Producto" className="profile-card-image"/>
						<span className="badge bg-success badge-status position-absolute top-0 end-0 m-2">Activo</span>
					</div>
					<div className="p-3">
						<h6 className="mb-1">Bicicleta rodado 26</h6>
						<p className="text-muted small mb-2">Publicado hace 3 días</p>
						<p className="fw-bold text-success mb-3">Gs. 850.000</p>
						<div className="d-flex gap-2 product-actions">
							<button className="btn btn-outline-secondary btn-sm flex-fill" disabled><Pencil /> <span className="d-none d-sm-inline">Editar</span></button>
							<button className="btn btn-outline-danger btn-sm">
								<Trash width={20} />
							</button>
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
							<button className="btn btn-outline-secondary btn-sm flex-fill" disabled><Pencil /> <span className="d-none d-sm-inline">Editar</span></button>
							<button className="btn btn-outline-danger btn-sm">
								<Trash width={20} />
							</button>
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
							<button className="btn btn-outline-secondary btn-sm flex-fill" disabled><Pencil /> <span className="d-none d-sm-inline">Editar</span></button>
							<button className="btn btn-outline-danger btn-sm">
								<Trash width={20} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Index;