import Link from "next/link";
import Image from "next/image";
import bookIcon from "~/public/img/book.png";
import favorite from "~/public/img/wish_list.svg";
import message from "~/public/img/message.svg";
import user from "~/public/img/user.svg";
import logout from "~/public/img/logout-svgrepo-com.svg";

const index = () => {
    const authenticated = true;
    return (
        <>
            <header id="home">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/" title="Inicio">
                            <Image
                                src={bookIcon}
                                width={50}
                                height={50}
                                alt=""
                            />
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
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        href="/"
                                        className="nav-link active"
                                        aria-current="page"
                                        id="home-item"
                                    >
                                        Home
                                    </Link>
                                </li>
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
                                    <Link
                                        href="/contact"
                                        className="nav-link"
                                        id="contacts-item"
                                    >
                                        Contactos
                                    </Link>
                                </li>
                                {authenticated ? unAuthenticatedSection() : ""}
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
                            {authenticated ? unAuthenticatedIconSection() : ""}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

const unAuthenticatedSection = () => {
    return (
        <>
            <li className="nav-item dropdown users-details" id="users-details">
                <span
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Perfil
                </span>
                <ul
                    className="dropdown-menu bg-light"
                    aria-labelledby="navbarDropdown"
                >
                    <li>
                        <Link
                            className="dropdown-item"
                            id="my-profile-item"
                            href="/profile"
                            style={{
                                color: "black",
                                textDecoration: "none",
                            }}
                        >
                            Mi Perfil
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/favorite"
                            className="dropdown-item"
                            id="favourite-item"
                            style={{
                                color: "black",
                                textDecoration: "none",
                            }}
                        >
                            Favoritos
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="dropdown-item"
                            id="messages-item"
                            href="/messages"
                            style={{
                                color: "black",
                                textDecoration: "none",
                            }}
                        >
                            Mensajes
                        </Link>
                    </li>
                </ul>
            </li>
        </>
    );
};

const unAuthenticatedIconSection = () => {
    return (
        <>
            <div className="icon-users">
                <span className="mx-3 icon">
                    <Link
                        id="favorites-item"
                        title="Favoritos"
                        href="/favorite"
                        style={{ color: "gray", textDecoration: "none" }}
                    >
                        <Image
                            src={favorite}
                            width="30"
                            alt=""
                            loading="lazy"
                        />
                    </Link>
                </span>
                <span className="mx-3 icon">
                    <Link
                        href="/messages"
                        style={{ color: "gray", textDecoration: "none" }}
                        title="Mensajes"
                        id="messages-item"
                    >
                        <Image
                            src={message}
                            width="30"
                            alt="message"
                            loading="lazy"
                        />
                    </Link>
                </span>
                <span className="mx-3 icon" style={{ cursor: "pointer" }}>
                    <Image
                        id="messages-item"
                        title="Cerrar Sesion"
                        src={logout}
                        width="30"
                        alt="Cerrar Sesion"
                        loading="lazy"
                    />
                </span>
            </div>
        </>
    );
};

export default index;
