import Avatar from "./Avatar";
import Info from "./Info";
import DivisionLine from "../Common/DivisionLine";
import Section from "./Section";
import Title from "./Title";
import AddBookCard from "./AddBookCard";

const Index = () => {
	return (
		<div className="container">
			<div className="row">
				<Avatar />
				<Info name="Ricardo Mélida" location="Asunción - Paraguay" />

				<DivisionLine />
			</div>

			<div className="row">
				<Section />

				<div className="col-md-12">
					<hr className="mx-auto" style={{ width: "50%" }} />
				</div>
			</div>


			<div className="row my-5 bg-light p-5" id="my-books">
				<Title name="Mis Libros" />
				<DivisionLine />

				<div className="row">
					<div className="col-6 col-md-4 col-xl-3 py-3">
						{/*
						TODO - Agregar lógica para mostrar los libros del usuario
						<Card />
						*/}
					</div>
					<AddBookCard />

				</div>
			</div>
		</div>
	)
}

export default Index;