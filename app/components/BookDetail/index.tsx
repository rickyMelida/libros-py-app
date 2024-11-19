const index = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div
                        className="position-fixed bottom-0 mb-5"
                        id="button-up"
                    >
                        <span> ^</span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-2 col-md-9 offset-md-3 col-xl-10 offset-xl-2">
                        <img
                            src="../img/libro1.jpg"
                            className="book-image"
                            alt=""
                            height="500"
                            width="350"
                        />
                    </div>
                    <div className="col-offset-xl-8"></div>
                </div>

                <div className="row my-3">
                    <div className="col-11 offset-1 col-md-10 offset-md-2">
                        <img
                            src="../img/libro1.jpg"
                            alt=""
                            className="book-image"
                            width="90"
                            height="130"
                        />
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-12 col-md-11 offset-md-1 col-xl-12 offset-xl-0 mb-3">
                        <h2 className="book-title"></h2>
                        <h4 className="text-primary book-author"></h4>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12 col-md-4">
                            <h3 className="book-price">₲ 190.000</h3>
                        </div>

                        <div className="col-12 col-md-4">
                            <span className="text-success">Disponible</span>
                        </div>

                        <div className="col-12 col-md-4">
                            <form>
                                <div className="form-group">
                                    <select
                                        className="form-control"
                                        id="exampleFormControlSelect1"
                                    >
                                        <option>Comprar</option>
                                        <option>Permutar</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-md-12">
                            <h5>Detalles del Libro</h5>
                            <hr />
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <strong className="m-2">Autor: </strong>
                                    <span className="text-primary py-1 book-author"></span>
                                    <br />
                                    <br />

                                    <strong className="m-2">Editorial: </strong>
                                    <span className="text-primary py-1">
                                        SIN FRONTERAS
                                    </span>
                                    <br />
                                    <br />

                                    <strong className="m-2">Páginas: </strong>
                                    <span className="py-1 book-pages"></span>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <span className="pt-3">Calificaciones: </span>
                            <span>
                                <img
                                    src="../img/estrella_amarilla.png"
                                    alt=""
                                    width="30"
                                />
                            </span>
                            <span>
                                <img
                                    src="../img/estrella_amarilla.png"
                                    alt=""
                                    width="30"
                                />
                            </span>
                            <span>
                                <img
                                    src="../img/estrella_amarilla.png"
                                    alt=""
                                    width="30"
                                />
                            </span>
                            <span>
                                <img
                                    src="../img/estrella_gris.png"
                                    alt=""
                                    width="25"
                                />
                            </span>
                            <span>
                                <img
                                    src="../img/estrella_gris.png"
                                    alt=""
                                    width="25"
                                />
                            </span>
                        </div>
                        <div className="col-md-6 mt-1">
                            <span>Comparti con:</span>
                            <a className="text-muted px-2" href="#">
                                <img
                                    src="../img/facebook.svg"
                                    alt=""
                                    width="14"
                                />
                            </a>
                            <a className="text-muted px-2" href="#">
                                <img
                                    src="../img/instagram.svg"
                                    alt=""
                                    width="14"
                                />
                            </a>
                            <a className="text-muted px-2" href="#">
                                <img
                                    src="../img/twitter.svg"
                                    alt=""
                                    width="14"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-12 col-md-6 mb-3">
                        <button
                            type="button"
                            className="btn btn-primary btn-lg btn-block"
                        >
                            Confirmar Transaccion
                        </button>
                    </div>
                    <div className="col-12 col-md-6">
                        <button
                            type="button"
                            className="btn btn-danger btn-lg btn-block"
                        >
                            Cancelar Transaccion
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
