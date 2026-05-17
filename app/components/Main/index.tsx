import Card from "@/components/common/Card";

const index = ({ title, section }: { title: string, section: string }) => {
	return (
		<>
			<div className="container-fluid px-3 px-md-4">

				<div className="position-fixed bottom-0 end-0 mb-4 me-4" style={{ zIndex: 999 }}>
					<div id="button-up" style={{ display: "none" }}><span>↑</span></div>
				</div>

				<div className="row mb-4">
					<div className="col-12">
						<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
							<div className="carousel-inner" id="carousel-container"><div className="carousel-item">
								<img src="http://127.0.0.1:5500/img/books/libro1.jpg" className="d-block w-100" />
							</div><div className="carousel-item active">
									<img src="http://127.0.0.1:5500/img/books/libro2.jpg" className="d-block w-100" />
								</div><div className="carousel-item">
									<img src="http://127.0.0.1:5500/img/books/libro3.jpg" className="d-block w-100" /></div><div className="carousel-item">
									<img src="http://127.0.0.1:5500/img/books/libro4.jpg" className="d-block w-100" /></div></div>
							<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Anterior</span>
							</button>
							<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Siguiente</span>
							</button>
						</div>
					</div>
				</div>

				<div className="books-section row page-animate" id="destacado">
					<div className="col-12 d-flex justify-content-between align-items-center mb-3">
						<h5 className="section-title mb-0" id="destacados">Lo más destacado</h5>
						<a href="./views/unauthorized.html" className="view-all-link">Ver todos →</a>
					</div>
					<hr className="col-12 line-horizontal mb-3" />
					<div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3"><div className="card" id="5" style={{ width: "18rem" }}><img src="http://127.0.0.1:5500/img/books/libro5.jpg" height="350" className="card-img-top" /><div className="card-body"><h5 className="card-title mb-5" style={{ maxHeight: "24px" }}>DESTROZA ESTE ALBUM</h5><hr className="mx-2" /><p className="card-text"><div className="pb-2"><strong>Estado: </strong>Nuevo</div><div className="py-2"><strong>Para: </strong>Vender</div><strong className="text-success d-block"></strong></p><button type="button" className="btn btn-primary btn-lg btn-block w-100">Contactar</button><section className="mt-4"><img src="../img/avatar.svg" width="10" alt="Avatar" className="avatar" /><cite className="text-primary pt-2 d-block w-50 users" id="user-0">Johan Doe</cite><span className="text-dark float-end pt-2" id="bookmarkContainer"><img src="../img/bookmark.png" width="35" title="Agregar como favorito" /></span></section></div></div></div><div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3"><div className="card" id="6" style={{ width: "18rem" }}><img src="http://127.0.0.1:5500/img/books/libro6.jpg" height="350" className="card-img-top" /><div className="card-body"><h5 className="card-title mb-5" style={{ maxHeight: "24px" }}>ESCUELA DE TRADING</h5><hr className="mx-2" /><p className="card-text"><div className="pb-2"><strong>Estado: </strong>Usado</div><div className="py-2"><strong>Para: </strong>Vender</div><strong className="text-success d-block"></strong></p><button type="button" className="btn btn-primary btn-lg btn-block w-100">Contactar</button><section className="mt-4"><img src="../img/avatar.svg" width="10" alt="Avatar" className="avatar" /><cite className="text-primary pt-2 d-block w-50 users" id="user-1">Johan Doe</cite><span className="text-dark float-end pt-2" id="bookmarkContainer"><img src="../img/bookmark.png" width="35" title="Agregar como favorito" /></span></section></div></div></div><div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3"><div className="card" id="7" style={{ width: "18rem" }}><img src="http://127.0.0.1:5500/img/books/libro7.jpg" height="350" className="card-img-top" /><div className="card-body"><h5 className="card-title mb-5" style={{ maxHeight: "24px" }}>DE ANIMALES A DIOSES</h5><hr className="mx-2" /><p className="card-text"><div className="pb-2"><strong>Estado: </strong>Semi Nuevo</div><div className="py-2"><strong>Para: </strong>Permutar</div><strong className="text-success d-block"></strong></p><button type="button" className="btn btn-primary btn-lg btn-block w-100">Contactar</button><section className="mt-4"><img src="../img/avatar.svg" width="10" alt="Avatar" className="avatar" /><cite className="text-primary pt-2 d-block w-50 users" id="user-2">Johan Doe</cite><span className="text-dark float-end pt-2" id="bookmarkContainer"><img src="../img/bookmark.png" width="35" title="Agregar como favorito" /></span></section></div></div></div><div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3"><div className="card" id="8" style={{ width: "18rem" }}><img src="http://127.0.0.1:5500/img/books/libro8.jpg" height="350" className="card-img-top" /><div className="card-body"><h5 className="card-title mb-5" style={{ maxHeight: "24px" }}>SAPIENS - DE ANIMALES A DIOSES</h5><hr className="mx-2" /><p className="card-text"><div className="pb-2"><strong>Estado: </strong>Semi Nuevo</div><div className="py-2"><strong>Para: </strong>Permutar</div><strong className="text-success d-block"></strong></p><button type="button" className="btn btn-primary btn-lg btn-block w-100">Contactar</button><section className="mt-4"><img src="../img/avatar.svg" width="10" alt="Avatar" className="avatar" /><cite className="text-primary pt-2 d-block w-50 users" id="user-3">Johan Doe</cite><span className="text-dark float-end pt-2" id="bookmarkContainer"><img src="../img/bookmark.png" width="35" title="Agregar como favorito" /></span></section></div></div></div></div>


				<div className="books-section books-section-alt row mt-3 page-animate" id="reciente">
					<div className="col-12 d-flex justify-content-between align-items-center mb-3">
						<h5 className="section-title mb-0" id="recientes">Lo más reciente</h5>
						<a href="./views/unauthorized.html" className="view-all-link">Ver todos →</a>
					</div>
					<hr className="col-12 line-horizontal mb-3" />
					<div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3">
						<div className="card" id="1" style={{ width: "18rem" }}><img src="http://127.0.0.1:5500/img/books/libro1.jpg" height="350" className="card-img-top" /><div className="card-body"><h5 className="card-title mb-5" style={{ maxHeight: "24px" }}>Corazon de fuego III</h5><hr className="mx-2" /><p className="card-text"><div className="pb-2"><strong>Estado: </strong>Nuevo</div><div className="py-2"><strong>Para: </strong>Vender</div><strong className="text-success d-block"></strong></p><button type="button" className="btn btn-primary btn-lg btn-block w-100">Contactar</button><section className="mt-4"><img src="../img/avatar.svg" width="10" alt="Avatar" className="avatar" /><cite className="text-primary pt-2 d-block w-50 users" id="user-0">Johan Doe</cite><span className="text-dark float-end pt-2" id="bookmarkContainer"><img src="../img/bookmark.png" width="35" title="Agregar como favorito" /></span></section></div></div></div><div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3"><div className="card" id="2" style={{ width: "18rem" }}><img src="http://127.0.0.1:5500/img/books/libro2.jpg" height="350" className="card-img-top" /><div className="card-body"><h5 className="card-title mb-5" style={{ maxHeight: "24px" }}>Libro Negro de la Nueva Izquierda</h5><hr className="mx-2" /><p className="card-text"><div className="pb-2"><strong>Estado: </strong>Nuevo</div><div className="py-2"><strong>Para: </strong>Permutar</div><strong className="text-success d-block"></strong></p><button type="button" className="btn btn-primary btn-lg btn-block w-100">Contactar</button><section className="mt-4"><img src="../img/avatar.svg" width="10" alt="Avatar" className="avatar" /><cite className="text-primary pt-2 d-block w-50 users" id="user-2">Johan Doe</cite><span className="text-dark float-end pt-2" id="bookmarkContainer"><img src="../img/bookmark.png" width="35" title="Agregar como favorito" /></span></section></div></div></div><div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3"><div className="card" id="3" style={{ width: "18rem" }}><img src="http://127.0.0.1:5500/img/books/libro3.jpg" height="350" className="card-img-top" /><div className="card-body"><h5 className="card-title mb-5" style={{ maxHeight: "24px" }}>EL SINDROME DE WOODY ALLEN</h5><hr className="mx-2" /><p className="card-text"><div className="pb-2"><strong>Estado: </strong>Usado</div><div className="py-2"><strong>Para: </strong>Permutar</div><strong className="text-success d-block"></strong></p><button type="button" className="btn btn-primary btn-lg btn-block w-100">Contactar</button><section className="mt-4"><img src="../img/avatar.svg" width="10" alt="Avatar" className="avatar" /><cite className="text-primary pt-2 d-block w-50 users" id="user-4">Johan Doe</cite><span className="text-dark float-end pt-2" id="bookmarkContainer"><img src="../img/bookmark.png" width="35" title="Agregar como favorito" /></span></section></div></div></div><div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3"><div className="card" id="4" style={{ width: "18rem" }}><img src="http://127.0.0.1:5500/img/books/libro4.jpg" height="350" className="card-img-top" /><div className="card-body"><h5 className="card-title mb-5" style={{ maxHeight: "24px" }}>TOKYO GHOUL 4</h5><hr className="mx-2" /><p className="card-text"><div className="pb-2"><strong>Estado: </strong>Semi Nuevo</div><div className="py-2"><strong>Para: </strong>Cambiar</div><strong className="text-success d-block"></strong></p><button type="button" className="btn btn-primary btn-lg btn-block w-100">Contactar</button><section className="mt-4"><img src="../img/avatar.svg" width="10" alt="Avatar" className="avatar" /><cite className="text-primary pt-2 d-block w-50 users" id="user-6">Johan Doe</cite><span className="text-dark float-end pt-2" id="bookmarkContainer"><img src="../img/bookmark.png" width="35" title="Agregar como favorito" /></span></section></div></div></div></div>


				<div className="books-section row mt-3 page-animate" id="otro">
					<div className="col-12 d-flex justify-content-between align-items-center mb-3">
						<h5 className="section-title mb-0" id="otros">Otros libros</h5>
						<a href="./views/unauthorized.html" className="view-all-link">Ver todos →</a>
					</div>
					<hr className="col-12 line-horizontal mb-3" />
					<div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3"><div className="card" id="9" style={{ width: "18rem" }}><img src="http://127.0.0.1:5500/img/books/libro9.jpg" height="350" className="card-img-top" /><div className="card-body"><h5 className="card-title mb-5" style={{ maxHeight: "24px" }}>ASTRONOMIA - UNA GUIA ILUSTRADA DEL UNIVERSO</h5><hr className="mx-2" /><p className="card-text"><div className="pb-2"><strong>Estado: </strong>Nuevo</div><div className="py-2"><strong>Para: </strong>Vender</div><strong className="text-success d-block"></strong></p><button type="button" className="btn btn-primary btn-lg btn-block w-100">Contactar</button><section className="mt-4"><img src="../img/avatar.svg" width="10" alt="Avatar" className="avatar" /><cite className="text-primary pt-2 d-block w-50 users" id="user-0">Johan Doe</cite><span className="text-dark float-end pt-2" id="bookmarkContainer"><img src="../img/bookmark.png" width="35" title="Agregar como favorito" /></span></section></div></div></div><div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3"><div className="card" id="10" style={{ width: "18rem" }}><img src="http://127.0.0.1:5500/img/books/libro10.jpg" height="350" className="card-img-top" /><div className="card-body"><h5 className="card-title mb-5" style={{ maxHeight: "24px" }}>COMO FUNCIONA EL CUERPO</h5><hr className="mx-2" /><p className="card-text"><div className="pb-2"><strong>Estado: </strong>Usado</div><div className="py-2"><strong>Para: </strong>Vender</div><strong className="text-success d-block"></strong></p><button type="button" className="btn btn-primary btn-lg btn-block w-100">Contactar</button><section className="mt-4"><img src="../img/avatar.svg" width="10" alt="Avatar" className="avatar" /><cite className="text-primary pt-2 d-block w-50 users" id="user-5">Johan Doe</cite><span className="text-dark float-end pt-2" id="bookmarkContainer"><img src="../img/bookmark.png" width="35" title="Agregar como favorito" /></span></section></div></div></div><div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3"><div className="card" id="11" style={{ width: "18rem" }}><img src="http://127.0.0.1:5500/img/books/libro11.jpg" height="350" className="card-img-top" /><div className="card-body"><h5 className="card-title mb-5" style={{ maxHeight: "24px" }}>CIUDADES DE CINE</h5><hr className="mx-2" /><p className="card-text"><div className="pb-2"><strong>Estado: </strong>Semi Nuevo</div><div className="py-2"><strong>Para: </strong>Permutar</div><strong className="text-success d-block"></strong></p><button type="button" className="btn btn-primary btn-lg btn-block w-100">Contactar</button><section className="mt-4"><img src="../img/avatar.svg" width="10" alt="Avatar" className="avatar" /><cite className="text-primary pt-2 d-block w-50 users" id="user-10">Johan Doe</cite><span className="text-dark float-end pt-2" id="bookmarkContainer"><img src="../img/bookmark.png" width="35" title="Agregar como favorito" /></span></section></div></div></div><div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3"><div className="card" id="12" style={{ width: "18rem" }}><img src="http://127.0.0.1:5500/img/books/libro12.jpg" height="350" className="card-img-top" /><div className="card-body"><h5 className="card-title mb-5" style={{ maxHeight: "24px" }}>CIENCIA PARA LOS NIÑOS</h5><hr className="mx-2" /><p className="card-text"><div className="pb-2"><strong>Estado: </strong>Semi Nuevo</div><div className="py-2"><strong>Para: </strong>Permutar</div><strong className="text-success d-block"></strong></p><button type="button" className="btn btn-primary btn-lg btn-block w-100">Contactar</button><section className="mt-4"><img src="../img/avatar.svg" width="10" alt="Avatar" className="avatar" /><cite className="text-primary pt-2 d-block w-50 users" id="user-15">Johan Doe</cite><span className="text-dark float-end pt-2" id="bookmarkContainer"><img src="../img/bookmark.png" width="35" title="Agregar como favorito" /></span></section></div></div></div></div>

				<div className="row mt-4">
					<div className="col-12">
						<div className="container">
							<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
								<div className="col-md-4 d-flex align-items-center">
									<span className="text-muted">© 2024 Change Books</span>
								</div>
								<ul className="nav col-md-4 justify-content-end list-unstyled d-flex gap-3">
									<li>
										<a className="text-muted" href="#" title="Facebook">
											<img src="./img/facebook.svg" alt="Facebook" width="22" />
										</a>
									</li>
									<li>
										<a className="text-muted" href="#" title="Instagram">
											<img src="./img/instagram.svg" alt="Instagram" width="22" />
										</a>
									</li>
									<li>
										<a className="text-muted" href="#" title="Twitter">
											<img src="./img/twitter.svg" alt="Twitter" width="22" />
										</a>
									</li>
								</ul>
							</footer>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default index;
