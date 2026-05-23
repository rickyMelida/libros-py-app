"use client";

import Link from "next/link";
import Image from "next/image";
import bookIcon from "~/public/img/libros-libres-logo.png";
import { useState, useEffect } from "react";
import AuthenticatedSection from "@/components/Auth/HeaderAuthSection/AuthenticatedSection";
import UnAuthenticatedIconSection from "@/components/Auth/HeaderAuthSection/UnAuthenticatedIconSection";
import ModalLogin from "@/components/Auth/HeaderAuthSection/ModalLogin";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const { isAuthenticated, data } = useAuth();

	const handleModalAuth = (value: boolean) => setShowModal(value);

	// Function to reset/close the navbar collapse (used on mobile link clicks)
	const resetNavbar = () => {
		const collapse = document.getElementById("navbarSupportedContent");
		if (!collapse) return;
		const el = collapse as HTMLElement;
		if (el.classList.contains("show")) {
			const toggler = document.querySelector(".navbar-toggler") as HTMLElement | null;
			toggler?.click();
		}
	};

	return (
		<>
			<header id="home">
				<nav className="navbar navbar-expand-lg">
					<div className="container-fluid">
						<Link className="navbar-brand" href="/home" title="Inicio" onClick={resetNavbar}>
							<Image src={bookIcon} width={100} height={100} alt="" />
							<h5 className="d-inline pt-3 d-lg-none">Libros Libres</h5>
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
									<Link className="navbar-brand nav-link" href="/home" title="Inicio" onClick={resetNavbar}>Inicio</Link>
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
										<li>
											<Link className="dropdown-item" id="highlighted-item" href="/home#destacados" onClick={resetNavbar}>Destacados</Link>
										</li>
										<li><hr className="dropdown-divider" /></li>
										<li><Link className="dropdown-item" id="recent-item" href="/home#recientes" onClick={resetNavbar}>Recientes</Link></li>
										<li><hr className="dropdown-divider" /></li>
										<li><Link className="dropdown-item" id="others-item" href="/home#otros" onClick={resetNavbar}>Otros</Link></li>
									</ul>
								</li>
								<li className="nav-item">
									<Link
										id="contact-item"
										title="Contacto"
										href="/contact"
										className="nav-link"
										onClick={resetNavbar}
									>
										Contacto
									</Link>
								</li>
								{isAuthenticated && (
									<li className="nav-item">
										<Link
											id="favorites-item"
											title="Favoritos"
											href="/favorite"
											className="nav-link"
											onClick={resetNavbar}
										>
											Mis Libros
										</Link>
					
									</li>
								)}
								{isAuthenticated ? (
									<AuthenticatedSection />
								) : (
									<UnAuthenticatedIconSection />
								)}
							</ul>
							<form className="d-flex m-2" role="search">
								<input
									className="form-control me-2"
									type="search"
									id="search"
									placeholder="Buscar libros..."
									aria-label="Buscar"
								/>
								<button className="btn btn-outline-success" type="button" id="btn-search">Buscar</button>
							</form>

						</div>
					</div>
				</nav>
			</header>
			<ModalLogin value={showModal} handleValue={handleModalAuth} />
		</>
	);
};

export default Index;
