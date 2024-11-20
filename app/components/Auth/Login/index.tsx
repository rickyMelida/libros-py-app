import Image from 'next/image';
import Link from 'next/link';
import book from '~/public/img/book.png'

const index = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="row m-3">
                            <div className="col-md-12">
                                <div className="mx-auto text-center">
                                    <a
                                        className="navbar-brand"
                                        href="#"
                                        title="Inicio"
                                    >
                                        <Image
                                            src={book}
                                            alt=""
                                            width="50"
                                        />
                                    </a>
                                    <h3 className="text-test">Change Books</h3>
                                </div>
                            </div>
                        </div>

                        <form className="border border-dark p-4">
                            <div className="form-group py-2">
                                <label
                                    htmlFor="email"
                                    className="font-weight-bold"
                                >
                                    Correo
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="form-group py-2">
                                <label
                                    htmlFor="password"
                                    className="font-weight-bold"
                                >
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-dark text-ligth btn-lg btn-block "
                                id="btn-submit"
                            >
                                Iniciar Sesión
                            </button>

                            <hr className="line-horizontal my-5" />
                            <div className="mt-4">
                                <small
                                    id="emailHelp"
                                    className="form-text text-muted d-flex justify-content-center"
                                >
                                    ¿Eres nuevo por aqui? &nbsp; <br />
                                    <Link href="/create-session">
                                        Cree su cuenta en Change Books
                                    </Link>
                                </small>
                            </div>
                        </form>
                        <div
                            className="alert alert-danger my-3 text-center d-none"
                            id="error"
                            role="alert"
                        ></div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    );
};

export default index;
