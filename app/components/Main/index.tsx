import { HandCoins, Heart, RefreshCcwDot, Tag } from "lucide-react"

const Index = () => {
	return (
		<div className="container">

			{/*<!-- CATEGORÍAS RÁPIDAS --> */}
			<div className="row g-2 g-md-3 mt-1">
				<div className="col-4 col-md-4"><a href="#" className="category-pill">
					<HandCoins />
					<span>Venta</span></a></div>
				<div className="col-4 col-md-4"><a href="#" className="category-pill">
					<RefreshCcwDot /><span>Cambios</span></a></div>
				<div className="col-4 col-md-4"><a href="#" className="category-pill">
					<Tag /><span>Donación</span></a></div>
			</div>

			{/*<!-- PRODUCTOS DESTACADOS --> */}
			<div className="section-title">
				<h4><i className="fa-solid fa-star text-warning me-2"></i>Productos destacados</h4>
				<a href="#" className="ver-todo">Ver todo <i className="fa-solid fa-chevron-right ms-1"></i></a>
			</div>

			{/*<!-- En mobile: scroll horizontal. En desktop: grilla normal (ver d-none/d-md-flex abajo) --> */}
			<div className="scroll-row d-flex d-md-none">
				<div className="scroll-item">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=10" alt="Producto destacado" />
							<span className="badge badge-destacado badge-tag">DESTACADO</span>
							<button className="btn-fav" aria-label="Agregar a favoritos">
								<Heart color="red" />
							</button>
						</div>
						<div className="product-body">
							<div className="product-title">Cámara mirrorless Sony A6400</div>
							<div className="product-price">Gs. 4.500.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=22" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Lucas G.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>
				<div className="scroll-item">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=11" alt="Producto destacado" />
							<span className="badge badge-destacado badge-tag">DESTACADO</span>
							<button className="btn-fav active" aria-label="Quitar de favoritos"><i className="fa-solid fa-heart"></i></button>
						</div>
						<div className="product-body">
							<div className="product-title">Smart TV LED 55" 4K</div>
							<div className="product-price">Gs. 3.200.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=35" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Marta F.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>
				<div className="scroll-item">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=12" alt="Producto destacado" />
							<span className="badge badge-destacado badge-tag">DESTACADO</span>
							<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
						</div>
						<div className="product-body">
							<div className="product-title">Bicicleta de montaña aro 29</div>
							<div className="product-price">Gs. 1.950.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=44" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Diego R.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>
				<div className="scroll-item">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=13" alt="Producto destacado" />
							<span className="badge badge-destacado badge-tag">DESTACADO</span>
							<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
						</div>
						<div className="product-body">
							<div className="product-title">Notebook gamer RTX 3060</div>
							<div className="product-price">Gs. 7.800.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=51" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Sofía A.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*<!-- Versión desktop en grilla --> */}
			<div className="row g-4 d-none d-md-flex">
				<div className="col-6 col-md-4 col-lg-3">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=10" alt="Producto destacado" />
							<span className="badge badge-destacado badge-tag">DESTACADO</span>
							<button className="btn-fav" aria-label="Agregar a favoritos">
								<Heart color="red" fill="white" />
							</button>
						</div>
						<div className="product-body">
							<div className="product-title">Cámara mirrorless Sony A6400</div>
							<div className="product-price">Gs. 4.500.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=22" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Lucas G.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=11" alt="Producto destacado" />
							<span className="badge badge-destacado badge-tag">DESTACADO</span>
							<button className="btn-fav active" aria-label="Quitar de favoritos"><i className="fa-solid fa-heart"></i></button>
						</div>
						<div className="product-body">
							<div className="product-title">Smart TV LED 55" 4K</div>
							<div className="product-price">Gs. 3.200.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=35" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Marta F.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=12" alt="Producto destacado" />
							<span className="badge badge-destacado badge-tag">DESTACADO</span>
							<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
						</div>
						<div className="product-body">
							<div className="product-title">Bicicleta de montaña aro 29</div>
							<div className="product-price">Gs. 1.950.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=44" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Diego R.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=13" alt="Producto destacado" />
							<span className="badge badge-destacado badge-tag">DESTACADO</span>
							<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
						</div>
						<div className="product-body">
							<div className="product-title">Notebook gamer RTX 3060</div>
							<div className="product-price">Gs. 7.800.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=51" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Sofía A.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*<!-- PRODUCTOS RECIENTES --> */}
			<div className="section-title">
				<h4><i className="fa-solid fa-clock me-2 text-success"></i>Productos recientes</h4>
				<a href="#" className="ver-todo">Ver todo <i className="fa-solid fa-chevron-right ms-1"></i></a>
			</div>

			<div className="row g-3 g-md-4 pb-5">
				<div className="col-6 col-md-4 col-lg-3">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=20" alt="Producto reciente" />
							<span className="badge bg-success badge-tag">NUEVO</span>
							<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
						</div>
						<div className="product-body">
							<div className="product-title">Silla gamer ergonómica</div>
							<div className="product-price">Gs. 980.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=15" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Pablo M.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-6 col-md-4 col-lg-3">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=21" alt="Producto reciente" />
							<span className="badge bg-success badge-tag">NUEVO</span>
							<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
						</div>
						<div className="product-body">
							<div className="product-title">Zapatillas running talle 42</div>
							<div className="product-price">Gs. 350.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=8" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Ana V.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-6 col-md-4 col-lg-3">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=22" alt="Producto reciente" />
							<span className="badge bg-success badge-tag">NUEVO</span>
							<button className="btn-fav active" aria-label="Quitar de favoritos"><i className="fa-solid fa-heart"></i></button>
						</div>
						<div className="product-body">
							<div className="product-title">Mesa de centro de madera</div>
							<div className="product-price">Gs. 620.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=29" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Carlos N.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-6 col-md-4 col-lg-3">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=23" alt="Producto reciente" />
							<span className="badge bg-success badge-tag">NUEVO</span>
							<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
						</div>
						<div className="product-body">
							<div className="product-title">Auriculares Bluetooth</div>
							<div className="product-price">Gs. 280.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=33" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Lucía P.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-6 col-md-4 col-lg-3">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=24" alt="Producto reciente" />
							<span className="badge bg-success badge-tag">NUEVO</span>
							<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
						</div>
						<div className="product-body">
							<div className="product-title">Heladera no frost 300L</div>
							<div className="product-price">Gs. 2.750.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=41" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Roberto S.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-6 col-md-4 col-lg-3">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=25" alt="Producto reciente" />
							<span className="badge bg-success badge-tag">NUEVO</span>
							<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
						</div>
						<div className="product-body">
							<div className="product-title">Guitarra acústica</div>
							<div className="product-price">Gs. 540.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=49" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Valeria T.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-6 col-md-4 col-lg-3">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=26" alt="Producto reciente" />
							<span className="badge bg-success badge-tag">NUEVO</span>
							<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
						</div>
						<div className="product-body">
							<div className="product-title">Mochila para notebook</div>
							<div className="product-price">Gs. 195.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=53" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Iván B.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>

				<div className="col-6 col-md-4 col-lg-3">
					<div className="product-card">
						<div className="product-img-wrap">
							<img src="https://picsum.photos/300/200?random=27" alt="Producto reciente" />
							<span className="badge bg-success badge-tag">NUEVO</span>
							<button className="btn-fav" aria-label="Agregar a favoritos"><i className="fa-regular fa-heart"></i></button>
						</div>
						<div className="product-body">
							<div className="product-title">Mesa de luz vintage</div>
							<div className="product-price">Gs. 310.000</div>
							<div className="product-footer">
								<div className="seller-info">
									<img src="https://i.pravatar.cc/60?img=60" className="seller-avatar" alt="Vendedor" />
									<span className="seller-name">Noelia C.</span>
								</div>
								<button className="btn-comprar">Comprar</button>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>
	)
}

export default Index;