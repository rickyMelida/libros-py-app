const Index = () => {
	return (
		<div className="col-lg-3 filter-sidebar-desktop">
			<div className="filter-sidebar">
				<h6><i className="fa-solid fa-layer-group me-2"></i>Categoría</h6>
				<div className="form-check"><input className="form-check-input" type="checkbox" checked id="catTec" /> <label className="form-check-label" htmlFor="catTec">Tecnología</label></div>
				<div className="form-check"><input className="form-check-input" type="checkbox" id="catHogar" /><label className="form-check-label" htmlFor="catHogar">Hogar</label></div>
				<div className="form-check"><input className="form-check-input" type="checkbox" id="catRopa" /><label className="form-check-label" htmlFor="catRopa">Ropa</label></div>
				<div className="form-check"><input className="form-check-input" type="checkbox" id="catVeh" /><label className="form-check-label" htmlFor="catVeh">Vehículos</label></div>
				<div className="form-check"><input className="form-check-input" type="checkbox" id="catDep" /><label className="form-check-label" htmlFor="catDep">Deportes</label></div>

				<hr />

				<h6><i className="fa-solid fa-coins me-2"></i>Precio</h6>
				<div className="price-range-inputs mb-2">
					<input type="number" className="form-control form-control-sm" placeholder="Mín." />
					<span className="text-muted">-</span>
					<input type="number" className="form-control form-control-sm" placeholder="Máx." />
				</div>
				<button className="btn btn-outline-secondary btn-sm w-100">Aplicar</button>

				<hr />

				<h6><i className="fa-solid fa-tag me-2"></i>Estado del producto</h6>
				<div className="form-check"><input className="form-check-input" type="checkbox" id="estNuevo" /><label className="form-check-label" htmlFor="estNuevo">Nuevo</label></div>
				<div className="form-check"><input className="form-check-input" type="checkbox" id="estUsado" /><label className="form-check-label" htmlFor="estUsado">Usado</label></div>

				<hr />

				<h6><i className="fa-solid fa-star me-2"></i>Calificación del vendedor</h6>
				<div className="form-check"><input className="form-check-input" type="checkbox" id="rate4" /><label className="form-check-label" htmlFor="rate4">4 estrellas o más</label></div>
				<div className="form-check"><input className="form-check-input" type="checkbox" id="rate3" /><label className="form-check-label" htmlFor="rate3">3 estrellas o más</label></div>
			</div>
		</div>
	)
}

export default Index;