import { HandCoins, Heart, RefreshCcwDot, Tag } from "lucide-react"

const Index = () => {
	return (
		<div className="row g-2 g-md-3 mt-1">
			<div className="col-4 col-md-4"><a href="#" className="category-pill">
				<HandCoins />
				<span>Venta</span></a></div>
			<div className="col-4 col-md-4"><a href="#" className="category-pill">
				<RefreshCcwDot /><span>Cambios</span></a></div>
			<div className="col-4 col-md-4"><a href="#" className="category-pill">
				<Tag /><span>Donación</span></a></div>
		</div>
	)
}

export default Index;