const index = () => {
    return (
        <>
            <header id="home">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" title="Inicio">
                            <img src="./img/book.png" alt="" width="50" />
                        </a>
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
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        id="home-item"
                                        href=""
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
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
                                            <a
                                                className="dropdown-item"
                                                id="highlighted-item"
                                                href="#destacados"
                                            >
                                                Destacados
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                id="recent-item"
                                                href="#recientes"
                                            >
                                                Recientes
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                id="others-item"
                                                href="#otros"
                                            >
                                                Otros
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="contacts-item"
                                        href="./views/contacts.html"
                                    >
                                        Contactos
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="my-book-item"
                                        href="./views/myBooks.html"
                                    >
                                        Mis Libros
                                    </a>
                                </li>
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
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default index;
