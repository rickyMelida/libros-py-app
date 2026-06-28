import Loading from "@/components/Common/Loading/Index";
import { BookDetailsProp } from "@/models/propsInterfaces/BookDetailsProp";
import { Star } from "lucide-react";
import Image from "next/image";
import avatar from "~/public/img/avatar.svg";

const Index = ({ loading, bookDetail }: BookDetailsProp) => {

	if (loading && bookDetail == null)
		return <Loading />

	return (
		<div className="seller-card">
			<div className="d-flex align-items-center gap-3">
				<Image
					src={avatar}
					alt="Avatar"
					title={`Publicado por ${bookDetail?.userName}`}
					className="seller-avatar-lg"
					width="25"
					loading="lazy"
					style={{ marginLeft: 0 }}
				/>
				<div className="flex-grow-1">
					<h6 className="mb-0">{bookDetail?.userName}</h6>
					<div className="seller-stat"><Star fill="gold" color="gold" />4.9 · 58 ventas</div>
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
	)
}

export default Index;