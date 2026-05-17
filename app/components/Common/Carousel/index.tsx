import Image, { StaticImageData } from "next/image";
import { v4 as uuidv4 } from "uuid";

const Index = ({ images }: { images: StaticImageData[] }) => {
	return (
		<div className="row mb-4">
			<div className="col-12">
				<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-inner" id="carousel-container">
						{images.map((image, index) => (
							<div className={`carousel-item ${index == 0 ? "active" : "" }`} key={uuidv4()} >
								<Image
									src={image}
									height={800}
									alt=""
									style={{ width: "100%" }}
								/>
							</div>
						))}



						{/*
							<div className="carousel-item">
								<img src="http://127.0.0.1:5500/img/books/libro1.jpg" className="d-block w-100" />
							</div>
							<div className="carousel-item active">
								<img src="http://127.0.0.1:5500/img/books/libro2.jpg" className="d-block w-100" />
							</div>
							<div className="carousel-item">
								<img src="http://127.0.0.1:5500/img/books/libro3.jpg" className="d-block w-100" />
							</div>
							<div className="carousel-item">
								<img src="http://127.0.0.1:5500/img/books/libro4.jpg" className="d-block w-100" />
							</div>
						*/
						}


					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Anterior</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Siguiente</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Index;
