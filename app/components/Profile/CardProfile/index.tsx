import Loading from "@/components/Common/Loading/Index";

const Index = () => {
	const user = localStorage.getItem('user');
	const jsonUSer = JSON.parse(user ??"{}");

	if(!jsonUSer.name)
		return <Loading />

	return (
		<div className="profile-card d-flex flex-wrap align-items-center gap-4">
			<img src="https://i.pravatar.cc/150?img=12" className="avatar" alt="Avatar de usuario" />

			<div className="flex-grow-1">
				<h4 className="mb-1">{jsonUSer.name}</h4>
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
	)
}

export default Index;