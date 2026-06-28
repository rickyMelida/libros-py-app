import Loading from "@/components/Common/Loading/Index";
import { BookDetailsProp } from "@/models/propsInterfaces/BookDetailsProp";

const Index = ({ loading, bookDetail }: BookDetailsProp) => {

	if (loading && bookDetail == null)
		return <Loading />


	return (
		<div className="mt-4">
			<ul className="nav detail-tabs" id="tabDetalle">
				<li className="nav-item">
					<button className="nav-link active" data-bs-toggle="tab" data-bs-target="#tabDescripcion" type="button">Descripción</button>
				</li>
				<li className="nav-item">
					<button className="nav-link" data-bs-toggle="tab" data-bs-target="#tabEspecificaciones" type="button">Otros Detalles</button>
				</li>
			</ul>
			<div className="tab-content pt-3">
				<div className="tab-pane fade show active" id="tabDescripcion">
					<p className="mb-2">{bookDetail?.description}</p>
				</div>
				<div className="tab-pane fade" id="tabEspecificaciones">
					<p className="mb-2">{bookDetail?.otherDetail ?? "Ninguna."}</p>
				</div>
			</div>
		</div>
	)
}

export default Index;