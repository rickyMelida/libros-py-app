import { Plus } from "lucide-react";

const Index = () => {
	return (
		<div className="col-6 col-md-4 col-lg-3">
			<div className="add-product-card" data-bs-toggle="modal" data-bs-target="#modalProducto">
				<Plus />
				<span className="fw-semibold">Agregar producto</span>
			</div>
		</div>
	)
}

export default Index;