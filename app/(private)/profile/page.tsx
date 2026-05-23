import Card from "@/components/Common/Card";
import Image from "next/image";
import avatar from "~/public/img/avatar.svg";
import addBook from "~/public/img/bookPlus.svg";


const ProfilePage = () => {
	return (
		<div className="container">


			<div className="row">
				<div className="row mt-5 mb-3">
					<div className="col-md-6 offset-3">
						<div className="avatar">
							<Image
								src={avatar}
								width="80"
								loading="lazy"
								alt="Avatar"
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 offset-md-3 text-center">
						<h3>Ricardo Mélida</h3>
						<h6>Asunción - Paraguay</h6>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<hr />
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6 offset-md-3">
					<nav className="navbar navbar-expand-lg navbar-light">
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav mx-auto">
								<li className="nav-item active mx-4">
									<strong className="text-center d-block">20</strong>
									<a className="nav-link active-select-profile" href="#"> Mis Libros</a>
								</li>
								<li className="nav-item mx-4">
									<strong className="text-center d-block">10</strong>
									<a className="nav-link" href="#">Cambios</a>
								</li>
								<li className="nav-item mx-4">
									<strong className="text-center d-block">5</strong>
									<a className="nav-link" href="#">Compras</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div className="col-md-12">
					<hr className="mx-auto" style={{ width: "50%" }} />
				</div>
			</div>


			<div className="row my-5 bg-light p-5" id="my-books">
				<div className="m-2">
					<div className="row">
						<div className="col-md-4 pb-3">
							<h2 id="destacados" className="section-title">Mis Libros</h2>
						</div>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-6 col-md-4 col-xl-3 py-3">
						<Card />
					</div>
					<div className="col-6 col-md-4 col-xl-3 py-3">
						<div className="card card-add-book border-0 bg-light" title="Agregar nuevo libro" >
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

				</div>
			</div>
		</div>
	);
};


export default ProfilePage;
