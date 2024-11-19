const index = () => {
    return (
        <>
            <div className="row mt-5 mb-3">
                <div className="col-md-6 offset-3">
                    <h2 className="text-center">Agregar Libro</h2>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-6 offset-md-3">
                    <form>
                        <div className="form-group my-4">
                            <label htmlFor="book-title">Titulo del Libro</label>
                            <input
                                type="text"
                                className="form-control"
                                id="book-title"
                                aria-describedby="emailHelp"
                                placeholder="Ej. Romeo y Julieta"
                            />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="book-author">
                                Titulo del Libro
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="book-author"
                                aria-describedby="emailHelp"
                                placeholder="Ej. William Shakespeare"
                            />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="book-pages-number">
                                Numero de Páginas
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="book-pages-number"
                                aria-describedby="emailHelp"
                                placeholder="Ej. 162"
                            />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="book-price">Precio</label>
                            <input
                                type="number"
                                className="form-control"
                                id="book-price"
                                aria-describedby="emailHelp"
                                placeholder="Sin punto. Ej.65000"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="state-bok" className="text-muted">
                                Estado del Libro:{" "}
                            </label>
                            <select className="form-control" id="state-bok">
                                <option>Nuevo</option>
                                <option>Usado</option>
                                <option>Semi Nuevo</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="state-bok" className="text-muted">
                                Lo quiero..
                            </label>
                            <select className="form-control" id="state-bok">
                                <option>Vender</option>
                                <option>Permutar</option>
                                <option>Cambiar</option>
                            </select>
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="book-price">Descripción</label>
                            <textarea
                                className="form-control"
                                id="mensaje"
                                rows={3}
                                placeholder="Ej. El libro tiene pequeños rasguños en la parte de atrás."
                                style={{ resize: "none" }}
                            ></textarea>
                        </div>
                        <div className="form-group mb-4">
                            <div className="custom-file">
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    id="customFile"
                                />
                                <label
                                    className="custom-file-label"
                                    htmlFor="customFile"
                                >
                                    Imagen del Libro
                                </label>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary btn-lg btn-block"
                        >
                            Subir Libro
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default index;
