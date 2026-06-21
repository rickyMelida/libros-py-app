const Index = () => {
	return (
		<div
			className="modal fade show"
			style={{ display: "block" }}
			tabIndex={-1}
			role="dialog"
			aria-modal="true"
		>
			<div className="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-sm-down">
				<div className="modal-content rounded-4">
					<div className="modal-header border-0">
						<h5 className="modal-title">Agregar producto</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal"></button>
					</div>
					<div className="modal-body">
						<form>
							<div className="row g-3">
								<div className="col-md-6">
									<label className="form-label">Título</label>
									<input type="text" className="form-control" placeholder="Ej: Bicicleta rodado 26" />
								</div>
								<div className="col-md-6">
									<label className="form-label">Precio (Gs.)</label>
									<input type="number" className="form-control" placeholder="850000" />
								</div>
								<div className="col-md-6">
									<label className="form-label">Categoría</label>
									<select className="form-select">
										<option>Hogar</option>
										<option>Tecnología</option>
										<option>Vehículos</option>
										<option>Ropa</option>
									</select>
								</div>
								<div className="col-md-6">
									<label className="form-label">Estado</label>
									<select className="form-select">
										<option>Nuevo</option>
										<option>Usado</option>
									</select>
								</div>
								<div className="col-12">
									<label className="form-label">Descripción</label>
									<textarea className="form-control" rows={3} placeholder="Detalles del producto..."></textarea>
								</div>
								<div className="col-12">
									<label className="form-label">Fotos</label>
									<input type="file" className="form-control" multiple accept="image/*" />
								</div>
							</div>
						</form>
					</div>
					<div className="modal-footer border-0">
						<button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
						<button type="button" className="btn btn-success px-4">Publicar producto</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Index;
