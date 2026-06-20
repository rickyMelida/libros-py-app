import Image from "next/image";
import addBook from "~/public/img/bookPlus.svg";

const Index = () => {
	
	const handleAddBook = () => {
		// Aquí puedes agregar la lógica para redirigir a la página de agregar libro
		window.location.href = "/profile/add-book";
	}

	return (
		<div className="col-6 col-md-4 col-xl-3 py-3">
			<div className="card card-add-book border-0 bg-light"
				title="Agregar nuevo libro" onClick={handleAddBook}>
				<Image
					src={addBook}
					className="card-img-top image-add-book text-center"
					height="300"
					loading="lazy"
					alt=""
				/>

				<div className="card-body">
					<h5 className="card-title text-center text-dark">Agregar Libro</h5>
				</div>
			</div>
		</div>
	)
}

export default Index;