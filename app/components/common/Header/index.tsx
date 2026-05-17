"use client";

import Link from "next/link";
import Image from "next/image";
import bookIcon from "~/public/img/libros-libres-logo.png";
import { useEffect, useState } from "react";
import AuthenticatedSection from "@/components/Auth/HeaderAuthSection/AuthenticatedSection";
import AuthenticatedIconSection from "@/components/Auth/HeaderAuthSection/AuthenticatedIconSection";
import UnAuthenticatedIconSection from "@/components/Auth/HeaderAuthSection/UnAuthenticatedIconSection";
import ModalLogin from "@/components/Auth/HeaderAuthSection/ModalLogin";

const index = () => {
	const { isAuthenticated, data } = {
		isAuthenticated: true,
		data: {
			name: "John Doe",
			email: "john.doe@example.com",
			"phone_number": "+1234567890",
			picture: "https://example.com/profile.jpg",
			uid: "1234567890",
		}
	};
	const [showModal, setShowModal] = useState<boolean>(false);

	const handleModalAuth = (value: boolean) => setShowModal(value);

	/*useEffect(() => {
		if (isAuthenticated && data) {
			dispatch(
				setUser({
					name: 'data.name',
					email: 'data.email',
					phoneNumber: 'data["phone_number"]',
					picture: 'data.picture',
					userId: 'data.uid',
				})
			);
		}
	}, [isAuthenticated]);*/

	return (
		<>
			<header id="home">
				<nav className="navbar navbar-expand-lg">
					<div className="container-fluid">
						<Link className="navbar-brand" href="/" title="Inicio">
							<Image src={bookIcon} width={100} height={100} alt="" />
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" id="home-item" href="">Inicio</a>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="navbarDropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>Libros</a>
									<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
										<li><a className="dropdown-item" id="highlighted-item" href="#destacados">Destacados</a></li>
										<li><a className="dropdown-item" id="recent-item" href="#recientes">Recientes</a></li>
										<li><hr className="dropdown-divider" /></li>
										<li><a className="dropdown-item" id="others-item" href="#otros">Otros</a></li>
									</ul>
								</li>
								<li className="nav-item">
									<a className="nav-link" id="contacts-item" href="./views/contacts.html">Contactos</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" id="my-book-item" href="./views/myBooks.html">Mis Libros</a>
								</li>
							</ul>
							<form className="d-flex">
								<input
									className="form-control me-2"
									type="search"
									id="search"
									placeholder="Buscar libros..."
									aria-label="Buscar"
								/>
								<button className="btn btn-outline-success" type="button" id="btn-search">Buscar</button>
							</form>
							<span className="mx-3">
								<a href="./views/favorites.html" id="favorites-item" title="Favoritos">
									<img src="./img/wish_list.svg" width="26" alt="Favoritos" />
								</a>
							</span>
							<span className="mx-3">
								<a href="./views/messages.html" id="messages-item" title="Mensajes">
									<img src="./img/message.svg" width="26" alt="Mensajes" />
								</a>
							</span>
							<span className="mx-1">
								<div className="dropdown">
									<a href="" className="dropbtn" id="my-profile-item" title="Mi Perfil">
										<img src="./img/user.svg" width="26" alt="Perfil" />
									</a>
									<div className="dropdown-content" id="profile-option">
										<a href="#">Mi Perfil</a>
										<a href="#">Cerrar Sesión</a>
									</div>
								</div>
							</span>
						</div>
					</div>
				</nav>
			</header>
			<ModalLogin value={showModal} handleValue={handleModalAuth} />
		</>
	);
};

export default index;
