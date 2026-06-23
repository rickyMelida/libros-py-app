import { IBookDTOResponse } from "@/models/interfaces/IBookResponse";
import { getBookDetailService } from "@/services/bookService";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "../Common/Loading/Index";
import { detectMimeType } from "../Common/ImageBase64/Index";
import { TransactionType } from "@/models/enums/TransactionType";
import { BookState } from "@/models/enums/BookState";
import { Check, Clock, Eye, Handbag, Heart, MapPin, MessageCircleMore, RotateCw, ShieldAlert, Star, Truck } from "lucide-react";

const Index = ({ bookId }: { bookId: number }) => {
	const [bookDetail, setBookDetail] = useState<IBookDTOResponse | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [bookToShow, setBookToShow] = useState<any>({ id: null, picture: null });

	const borderImages = {
		"none": "book-image m-2 ",
		"bordered": "book-image m-2 border border-success border-4",

	};

	const convertBase64 = (base64Data: string | any) => {
		const mimeType = detectMimeType(base64Data);
		const src = `data:${mimeType};base64,${base64Data}`;

		return src;
	}

	useEffect(() => {
		const getBookDetail = async () => {
			try {
				const bookDetail = await getBookDetailService(bookId);
				setBookDetail(bookDetail.data);
				setBookToShow({
					id: null,
					picture: convertBase64(bookDetail.data.images.find(img => img.isPrincipal)?.picture || "")
				});
			} catch (error) {
				console.error("Error obteniendo detalle del libro:", error);
			} finally {
				setLoading(false);
			}
		};

		getBookDetail();
	}, [bookId]);


	const formatearGuarani = (valor: number | undefined): string => {
		if (valor === undefined) return "₲ 0";

		return new Intl.NumberFormat('es-PY', {
			style: 'currency',
			currency: 'PYG',
			minimumFractionDigits: 0, // Guaraní has no decimal places
			maximumFractionDigits: 0,
		}).format(valor);
	};

	const handleBookToShow = (id: number, img: any) => {
		setBookToShow((prev: any) => ({
			...prev,
			id,
			picture: convertBase64(img.picture),
		}));
	}

	const cambiarImagen = (e: any) => {

	}

	const cambiarCantidad = (e: any) => {

	}

	return (
		<>
			<div className="container">

				<div className="row g-4 mt-2">

					{/*<!-- COLUMNA IZQUIERDA: GALERÍA -->*/}
					<div className="col-12 col-lg-7">
						<div className="gallery-main">
							<span className="badge badge-tag" style={{ background: "#f5a623" }}>DESTACADO</span>
							<img id="mainImage" src="https://picsum.photos/700/500?random=10" alt="Cámara mirrorless Sony A6400" />
						</div>
						<div className="gallery-thumbs">
							<img src="https://picsum.photos/700/500?random=10" className="active" onClick={(e) => cambiarImagen(e)} alt="Vista 1" />
							<img src="https://picsum.photos/700/500?random=14" onClick={(e) => cambiarImagen(e)} alt="Vista 2" />
							<img src="https://picsum.photos/700/500?random=15" onClick={(e) => cambiarImagen(e)} alt="Vista 3" />
							<img src="https://picsum.photos/700/500?random=16" onClick={(e) => cambiarImagen(e)} alt="Vista 4" />
						</div>

						{/*<!-- TABS DE DESCRIPCIÓN / ESPECIFICACIONES (desktop friendly, también ok en mobile) -->*/}
						<div className="mt-4">
							<ul className="nav detail-tabs" id="tabDetalle">
								<li className="nav-item">
									<button className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabDescripcion" type="button">Descripción</button>
								</li>
								<li className="nav-item">
									<button className="nav-link" data-bs-toggle="tab" data-bs-target="#tabEspecificaciones" type="button">Especificaciones</button>
								</li>
							</ul>
							<div className="tab-content pt-3">
								<div className="tab-pane fade show active" id="tabDescripcion">
									<p className="mb-2">Cámara mirrorless Sony A6400 en excelente estado, prácticamente sin uso. Incluye lente 16-50mm, cargador original, correa y bolso de transporte.</p>
									<p className="mb-0">Ideal para quienes están iniciando en fotografía o video, gracias a su enfoque automático rápido y su capacidad de grabar en 4K. Se vende por cambio de equipo.</p>
								</div>
								<div className="tab-pane fade" id="tabEspecificaciones">
									<table className="specs-table w-100">
										<tr><td>Marca</td><td>Sony</td></tr>
										<tr><td>Modelo</td><td>A6400</td></tr>
										<tr><td>Estado</td><td>Usado - Como nuevo</td></tr>
										<tr><td>Incluye</td><td>Lente 16-50mm, cargador, bolso</td></tr>
										<tr><td>Resolución de video</td><td>4K a 30fps</td></tr>
										<tr><td>Garantía del vendedor</td><td>7 días por defectos de fábrica</td></tr>
									</table>
								</div>
							</div>
						</div>
					</div>

					{/*<!-- COLUMNA DERECHA: INFO Y COMPRA -->*/}
					<div className="col-12 col-lg-5">
						<div className="info-panel">
							<h1 className="product-title-detail">Cámara mirrorless Sony A6400</h1>

							<div className="meta-row">
								<span><Eye /> 214 vistas</span>
								<span><Clock /> Publicado hace 3 días</span>
								<span><MapPin /> Asunción</span>
							</div>

							<div className="price-tag">Gs. 4.500.000</div>
							<div className="price-sub">
								<span className="badge bg-success-subtle text-success stock-badge">
									<Check color="green" />En stock</span>
								<span className="ms-2">Acepta transferencia y efectivo</span>
							</div>

							<div className="d-flex gap-2 action-buttons">
								<button className="btn btn-comprar-grande flex-grow-1">
									<Handbag /> Comprar ahora
								</button>
								<button
									className="btn-fav-detail"
									aria-label="Agregar a favoritos"
								>
									<Heart />
								</button>
							</div>
							<button className="btn btn-contactar w-100 mt-2 action-buttons">
								<MessageCircleMore /> Contactar al vendedor
							</button>

							<ul className="trust-list">
								<li><ShieldAlert color="#2f6f4f"/> Compra protegida: si el producto no llega, te devolvemos tu dinero</li>
								<li><Truck color="#2f6f4f"/> Coordiná el envío o retiro directo con el vendedor</li>
								<li><RotateCw color="#2f6f4f"/> Podés reportar el producto si algo no coincide con la descripción</li>
							</ul>
						</div>

						{/*<!-- CARD DEL VENDEDOR -->*/}
						<div className="seller-card">
							<div className="d-flex align-items-center gap-3">
								<img src="https://i.pravatar.cc/100?img=22" className="seller-avatar-lg" alt="Avatar del vendedor" />
								<div className="flex-grow-1">
									<h6 className="mb-0">Lucas Gómez</h6>
									<div className="seller-stat"><Star fill="gold" color="gold"/>4.9 · 58 ventas</div>
								</div>
								<a href="#" className="btn btn-outline-secondary btn-sm rounded-pill">Ver perfil</a>
							</div>
							<hr />
							<div className="d-flex justify-content-between text-center">
								<div>
									<div className="fw-bold">98%</div>
									<div className="seller-stat">Respuesta</div>
								</div>
								<div>
									<div className="fw-bold">&lt; 1h</div>
									<div className="seller-stat">Tiempo resp.</div>
								</div>
								<div>
									<div className="fw-bold">2 años</div>
									<div className="seller-stat">En MarketApp</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*<!-- PRODUCTOS RELACIONADOS -->*/}
				<div className="section-title">
					<h4><i className="fa-solid fa-layer-group me-2 text-success"></i>Te puede interesar</h4>
				</div>

				<div className="row g-3 g-md-4 pb-5">
					<div className="col-6 col-md-4 col-lg-3">
						<a href="#" className="product-card">
							<div className="product-img-wrap"><img src="https://picsum.photos/300/200?random=30" alt="Lente 50mm" /></div>
							<div className="product-body">
								<div className="product-title-mini">Lente 50mm f/1.8 para Sony</div>
								<div className="product-price-mini">Gs. 980.000</div>
							</div>
						</a>
					</div>
					<div className="col-6 col-md-4 col-lg-3">
						<a href="#" className="product-card">
							<div className="product-img-wrap"><img src="https://picsum.photos/300/200?random=31" alt="Trípode" /></div>
							<div className="product-body">
								<div className="product-title-mini">Trípode profesional de aluminio</div>
								<div className="product-price-mini">Gs. 320.000</div>
							</div>
						</a>
					</div>
					<div className="col-6 col-md-4 col-lg-3">
						<a href="#" className="product-card">
							<div className="product-img-wrap"><img src="https://picsum.photos/300/200?random=32" alt="Mochila para cámara" /></div>
							<div className="product-body">
								<div className="product-title-mini">Mochila porta cámara y accesorios</div>
								<div className="product-price-mini">Gs. 410.000</div>
							</div>
						</a>
					</div>
					<div className="col-6 col-md-4 col-lg-3">
						<a href="#" className="product-card">
							<div className="product-img-wrap"><img src="https://picsum.photos/300/200?random=33" alt="Tarjeta de memoria" /></div>
							<div className="product-body">
								<div className="product-title-mini">Tarjeta SD 128GB clase 10</div>
								<div className="product-price-mini">Gs. 145.000</div>
							</div>
						</a>
					</div>
				</div>
			</div>

			{/*<!-- BARRA FIJA DE COMPRA (solo mobile) -->*/}
			<div className="mobile-buy-bar">
				<div className="flex-grow-1">
					<div className="price-tag-mini">Gs. 4.500.000</div>
					<div className="seller-stat" style={{ fontSize: ".7rem" }}>Stock disponible</div>
				</div>
				<button className="btn-fav-detail"
					aria-label="Agregar a favoritos"

				>
					<i className="fa-regular fa-heart"></i>
				</button>
				<button className="btn btn-comprar-grande px-4">Comprar</button>
			</div>
		</>
	);
};

export default Index;
