import Image from "next/image";
import avatar from "~/public/img/avatar.svg";
import addBook from "~/public/img/bookPlus.svg";

const profilePage = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="row my-5">
                        <div className="col-md-6 offset-3">
                            <div className="avatar">
                                <Image
                                    src={avatar}
                                    alt="Avatar"
                                    width="80"
                                    loading="lazy"
                                    style={{ borderRadius: "50%" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center">
                            <h3></h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="row my-5 bg-light p-5" id="my-books">
                    <div className="m-2">
                        <div className="row justify-content-md-center">
                            <div className="col-3 offset-4 pb-3 mx-auto">
                                <h2>
                                    <span>
                                        Libros del <strong>Usuario</strong>
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>

            <div className="container">
                <div className="row"></div>
            </div>

            <div className="container">
                <div className="row">
                    <a href="/add-new-book">
                        <div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3">
                            <div
                                className="card card-add-book border-0 bg-light"
                                title="Agregar nuevo libro"
                                style={{ width: "18rem" }}
                            >
                                <img
                                    src={addBook}
                                    width="100"
                                    height="350"
                                    className="card-img-top image-add-book text-center"
                                    id="add-new-book"
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center text-dark">
                                        Agregar Libro
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default profilePage;
