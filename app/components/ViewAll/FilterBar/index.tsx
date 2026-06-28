const Index = () => {
	return (
		<div className="filter-bar mt-3">
			<div className="d-flex align-items-center gap-2">
				<button className="btn btn-filtros d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFiltros">
					<i className="fa-solid fa-sliders"></i> Filtros
				</button>
				<span className="result-count"><strong>48</strong> productos encontrados</span>
			</div>

			<div className="d-flex align-items-center gap-2">
				<label className="small text-muted mb-0 d-none d-sm-inline">Ordenar por:</label>
				<select className="form-select form-select-sm" style={{ width: "auto" }}>
					<option>Más relevantes</option>
					<option>Menor precio</option>
					<option>Mayor precio</option>
					<option>Más recientes</option>
					<option>Mejor calificados</option>
				</select>
			</div>
		</div>
	)
}

export default Index;