const Index = () => {
	return (

		<div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasFiltros">
			<div className="offcanvas-header">
				<h5 className="offcanvas-title"><i className="fa-solid fa-sliders me-2"></i>Filtros</h5>
				<button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
			</div>
			<div className="offcanvas-body">
				<h6><i className="fa-solid fa-layer-group me-2"></i>Categoría</h6>
				<div className="form-check"><input className="form-check-input" type="checkbox" checked id="mCatTec" /><label className="form-check-label" htmlFor="mCatTec">Tecnología</label></div>
				<div className="form-check"><input className="form-check-input" type="checkbox" id="mCatHogar" /><label className="form-check-label" htmlFor="mCatHogar">Hogar</label></div>
				<div className="form-check"><input className="form-check-input" type="checkbox" id="mCatRopa" /><label className="form-check-label" htmlFor="mCatRopa">Ropa</label></div>
				<div className="form-check"><input className="form-check-input" type="checkbox" id="mCatVeh" /><label className="form-check-label" htmlFor="mCatVeh">Vehículos</label></div>
				<div className="form-check"><input className="form-check-input" type="checkbox" id="mCatDep" /><label className="form-check-label" htmlFor="mCatDep">Deportes</label></div>

				<hr />

				<h6><i className="fa-solid fa-coins me-2"></i>Precio</h6>
				<div className="price-range-inputs mb-3">
					<input type="number" className="form-control form-control-sm" placeholder="Mín." />
					<span className="text-muted">-</span>
					<input type="number" className="form-control form-control-sm" placeholder="Máx." />
				</div>

				<h6><i className="fa-solid fa-tag me-2"></i>Estado del producto</h6>
				<div className="form-check"><input className="form-check-input" type="checkbox" id="mEstNuevo" /><label className="form-check-label" htmlFor="mEstNuevo">Nuevo</label></div>
				<div className="form-check"><input className="form-check-input" type="checkbox" id="mEstUsado" /><label className="form-check-label" htmlFor="mEstUsado">Usado</label></div>

				<button className="btn btn-comprar w-100 mt-4 py-2" data-bs-dismiss="offcanvas">Ver resultados</button>
			</div>
		</div>
	)
}

export default Index;