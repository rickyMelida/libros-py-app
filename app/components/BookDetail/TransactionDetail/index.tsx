import Loading from "@/components/Common/Loading/Index";
import { BookDetailsProp } from "@/models/propsInterfaces/BookDetailsProp";
import { formatToGuarani } from "@/utils/util";
import {
	Check,
	Clock,
	Eye,
	Handbag,
	Heart,
	MapPin,
	MessageCircleMore,
	RotateCw,
	ShieldAlert,
	Truck
} from "lucide-react";

const Index = ({ loading, bookDetail }: BookDetailsProp) => {

	if (loading && bookDetail == null)
		return <Loading />

	
	return (
		<div className="info-panel">
			<h1 className="product-title-detail">{bookDetail?.title}</h1>

			<div className="meta-row">
				<span><Eye /> 214 vistas</span>
				<span><Clock /> Publicado hace 3 días</span>
				<span><MapPin /> Asunción</span>
			</div>

			<div className="price-tag">{formatToGuarani(bookDetail?.price || 0)}</div>
			<div className="price-sub">
				<span className="badge bg-success-subtle text-success stock-badge">
					<Check color="green" />Disponible</span>
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
				<li><ShieldAlert color="#2f6f4f" /> Compra protegida: si el producto no llega, te devolvemos tu dinero</li>
				<li><Truck color="#2f6f4f" /> Coordiná el envío o retiro directo con el vendedor</li>
				<li><RotateCw color="#2f6f4f" /> Podés reportar el producto si algo no coincide con la descripción</li>
			</ul>
		</div>
	)
}

export default Index;