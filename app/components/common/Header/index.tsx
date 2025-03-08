"use client";

import Link from "next/link";
import Image from "next/image";
import bookIcon from "~/public/img/Gemini_logo.jpeg";
import { useState } from "react";
import AuthenticatedSection from "@/components/Auth/HeaderAuthSection/AuthenticatedSection";
import AuthenticatedIconSection from "@/components/Auth/HeaderAuthSection/AuthenticatedIconSection";
import UnAuthenticatedIconSection from "@/components/Auth/HeaderAuthSection/UnAuthenticatedIconSection";
import ModalLogin from "@/components/Auth/HeaderAuthSection/ModalLogin";

const index = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalAuth = (value: boolean, token: any) => {
    console.log({value, token});
    
    setShowModal(value);
    setAuthenticated(token);
  }

  return (
    <>
      <header id="home">
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{
            background: "white",
            marginBottom: "-25px",
            marginTop: "-20px",
          }}
        >
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                style={{ marginLeft: "-30px" }}
              >
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Libros
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        id="highlighted-item"
                        href="/#destacados"
                      >
                        Destacados
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        id="recent-item"
                        href="/#recientes"
                      >
                        Recientes
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        id="others-item"
                        href="/#otros"
                      >
                        Otros
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link" id="contacts-item">
                    Contactos
                  </Link>
                </li>
                {authenticated ? <AuthenticatedSection /> : ""}
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  id="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success"
                  type="button"
                  id="btn-search"
                >
                  Buscar
                </button>
              </form>
              {authenticated ? (
                <AuthenticatedIconSection handleValue={handleModalAuth} />
              ) : (
                <UnAuthenticatedIconSection handleValue={handleModalAuth} />
              )}
            </div>
          </div>
        </nav>
      </header>
      <ModalLogin value={showModal} handleValue={handleModalAuth}/>
    </>
  );
};

export default index;
