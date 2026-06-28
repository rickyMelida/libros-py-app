import ActiveFiltersChip from "./ActiveFiltersChip";
import FilterBar from "./FilterBar";
import FiltersSideBar from "./FiltersSideBar";

const Index = ({ section }: { section: any }) => {
	console.log({ section })
	return (
		<>
			<div className="container">
				<FilterBar />
				<ActiveFiltersChip />

				<div className="row g-4 mt-1">
					<FiltersSideBar />

					{/*	<!-- GRILLA DE PRODUCTOS --> */}
					<div className="col-lg-9">
						<div className="row g-3 g-md-4" id="gridProductos">
							{/*<!-- Producto 1 -->*/}
							<div className="col-6 col-md-4 col-lg-4">
								<a href="detalle-producto.html" className="product-card">
									<div className="product-img-wrap">
										<img src="https://picsum.photos/300/200?random=10" alt="Cámara mirrorless" />
										<span className="badge badge-tag">DESTACADO</span>
										<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
									</div>
									<div className="product-body">
										<div className="product-title">Cámara mirrorless Sony A6400</div>
										<div className="product-price">Gs. 4.500.000</div>
										<div className="product-footer">
											<div className="seller-info">
												<img src="https://i.pravatar.cc/60?img=22" className="seller-avatar-wa" alt="Vendedor" />
												<span className="seller-name">Lucas G.</span>
											</div>
											<button className="btn-comprar">Comprar</button>
										</div>
									</div>
								</a>
							</div>

							{/*<!-- Producto 2 -->*/}
							<div className="col-6 col-md-4 col-lg-4">
								<a href="detalle-producto.html" className="product-card">
									<div className="product-img-wrap">
										<img src="https://picsum.photos/300/200?random=11" alt="Smart TV" />
										<span className="badge badge-tag">DESTACADO</span>
										<button className="btn-fav active" aria-label="Quitar de favoritos"><i className="fa-solid fa-heart"></i></button>
									</div>
									<div className="product-body">
										<div className="product-title">Smart TV LED 55" 4K</div>
										<div className="product-price">Gs. 3.200.000</div>
										<div className="product-footer">
											<div className="seller-info">
												<img src="https://i.pravatar.cc/60?img=35" className="seller-avatar-wa" alt="Vendedor" />
												<span className="seller-name">Marta F.</span>
											</div>
											<button className="btn-comprar">Comprar</button>
										</div>
									</div>
								</a>
							</div>

							{/*<!-- Producto 3 -->*/}
							<div className="col-6 col-md-4 col-lg-4">
								<a href="detalle-producto.html" className="product-card">
									<div className="product-img-wrap">
										<img src="https://picsum.photos/300/200?random=12" alt="Bicicleta" />
										<span className="badge badge-tag">DESTACADO</span>
										<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
									</div>
									<div className="product-body">
										<div className="product-title">Bicicleta de montaña aro 29</div>
										<div className="product-price">Gs. 1.950.000</div>
										<div className="product-footer">
											<div className="seller-info">
												<img src="https://i.pravatar.cc/60?img=44" className="seller-avatar-wa" alt="Vendedor" />
												<span className="seller-name">Diego R.</span>
											</div>
											<button className="btn-comprar">Comprar</button>
										</div>
									</div>
								</a>
							</div>

							{/*<!-- Producto 4 -->*/}
							<div className="col-6 col-md-4 col-lg-4">
								<a href="detalle-producto.html" className="product-card">
									<div className="product-img-wrap">
										<img src="https://picsum.photos/300/200?random=13" alt="Notebook gamer" />
										<span className="badge badge-tag">DESTACADO</span>
										<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
									</div>
									<div className="product-body">
										<div className="product-title">Notebook gamer RTX 3060</div>
										<div className="product-price">Gs. 7.800.000</div>
										<div className="product-footer">
											<div className="seller-info">
												<img src="https://i.pravatar.cc/60?img=51" className="seller-avatar-wa" alt="Vendedor" />
												<span className="seller-name">Sofía A.</span>
											</div>
											<button className="btn-comprar">Comprar</button>
										</div>
									</div>
								</a>
							</div>

							{/*<!-- Producto 5 -->*/}
							<div className="col-6 col-md-4 col-lg-4">
								<a href="detalle-producto.html" className="product-card">
									<div className="product-img-wrap">
										<img src="https://picsum.photos/300/200?random=40" alt="Consola de videojuegos" />
										<span className="badge badge-tag">DESTACADO</span>
										<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
									</div>
									<div className="product-body">
										<div className="product-title">Consola PlayStation 5 + 2 controles</div>
										<div className="product-price">Gs. 5.100.000</div>
										<div className="product-footer">
											<div className="seller-info">
												<img src="https://i.pravatar.cc/60?img=18" className="seller-avatar-wa" alt="Vendedor" />
												<span className="seller-name">Andrés P.</span>
											</div>
											<button className="btn-comprar">Comprar</button>
										</div>
									</div>
								</a>
							</div>

							{/*<!-- Producto 6 -->*/}
							<div className="col-6 col-md-4 col-lg-4">
								<a href="detalle-producto.html" className="product-card">
									<div className="product-img-wrap">
										<img src="https://picsum.photos/300/200?random=41" alt="Reloj inteligente" />
										<span className="badge badge-tag">DESTACADO</span>
										<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
									</div>
									<div className="product-body">
										<div className="product-title">Reloj inteligente Apple Watch SE</div>
										<div className="product-price">Gs. 1.650.000</div>
										<div className="product-footer">
											<div className="seller-info">
												<img src="https://i.pravatar.cc/60?img=27" className="seller-avatar-wa" alt="Vendedor" />
												<span className="seller-name">Karen V.</span>
											</div>
											<button className="btn-comprar">Comprar</button>
										</div>
									</div>
								</a>
							</div>

							{/*<!-- Producto 7 -->*/}
							<div className="col-6 col-md-4 col-lg-4">
								<a href="detalle-producto.html" className="product-card">
									<div className="product-img-wrap">
										<img src="https://picsum.photos/300/200?random=42" alt="Drone" />
										<span className="badge badge-tag">DESTACADO</span>
										<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
									</div>
									<div className="product-body">
										<div className="product-title">Drone DJI Mini 3 con control</div>
										<div className="product-price">Gs. 3.900.000</div>
										<div className="product-footer">
											<div className="seller-info">
												<img src="https://i.pravatar.cc/60?img=37" className="seller-avatar-wa" alt="Vendedor" />
												<span className="seller-name">Hugo T.</span>
											</div>
											<button className="btn-comprar">Comprar</button>
										</div>
									</div>
								</a>
							</div>

							{/*<!-- Producto 8 -->*/}
							<div className="col-6 col-md-4 col-lg-4">
								<a href="detalle-producto.html" className="product-card">
									<div className="product-img-wrap">
										<img src="https://picsum.photos/300/200?random=43" alt="Parlante bluetooth" />
										<span className="badge badge-tag">DESTACADO</span>
										<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
									</div>
									<div className="product-body">
										<div className="product-title">Parlante JBL Bluetooth portátil</div>
										<div className="product-price">Gs. 480.000</div>
										<div className="product-footer">
											<div className="seller-info">
												<img src="https://i.pravatar.cc/60?img=58" className="seller-avatar-wa" alt="Vendedor" />
												<span className="seller-name">Mirta D.</span>
											</div>
											<button className="btn-comprar">Comprar</button>
										</div>
									</div>
								</a>
							</div>

							{/*<!-- Producto 9 -->*/}
							<div className="col-6 col-md-4 col-lg-4">
								<a href="detalle-producto.html" className="product-card">
									<div className="product-img-wrap">
										<img src="https://picsum.photos/300/200?random=44" alt="Monitor gamer" />
										<span className="badge badge-tag">DESTACADO</span>
										<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
									</div>
									<div className="product-body">
										<div className="product-title">Monitor gamer 27" 144Hz</div>
										<div className="product-price">Gs. 2.200.000</div>
										<div className="product-footer">
											<div className="seller-info">
												<img src="https://i.pravatar.cc/60?img=64" className="seller-avatar-wa" alt="Vendedor" />
												<span className="seller-name">Federico L.</span>
											</div>
											<button className="btn-comprar">Comprar</button>
										</div>
									</div>
								</a>
							</div>
						</div>

						{/*<!-- LOADER DE SCROLL INFINITO -->*/}
						<div id="infiniteLoader" className="text-center py-4">
							<div className="spinner-border" role="status" style={{ color: "var(--accent)", display: "none" }} id="loaderSpinner"></div>
						</div>

						{/*<!-- MENSAJE CUANDO YA NO HAY MÁS PRODUCTOS --> */}
						<div id="finDeResultados" className="text-center text-muted py-4" style={{ display: "none" }}>
							<i className="fa-solid fa-circle-check mb-2" style={{ fontSize: "1.6rem", color: "var(--accent)" }}></i>
							<p className="mb-0">Ya viste todos los productos destacados disponibles</p>
						</div>
					</div>
				</div>
			</div>

			{/*<!-- Plantilla oculta de card, usada por JS para clonar nuevos productos -->*/}
			<template id="templateProductCard">
				<div className="col-6 col-md-4 col-lg-4">
					<a href="detalle-producto.html" className="product-card">
						<div className="product-img-wrap">
							<img src="" alt="Producto destacado" />
							<span className="badge badge-tag">DESTACADO</span>
							<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
						</div>
						<div className="product-body">
							<div className="product-title"></div>
							<div className="product-price"></div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="" className="seller-avatar-wa" alt="Vendedor" />
									<span className="seller-name"></span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</a>
				</div>
			</template>
		</>
	)
}

export default Index;