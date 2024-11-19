import Image from "next/image";
import book from "~/public/img/books/libro1.jpg";
import avatar from "~/public/img/avatar.svg";
import bookmark from "~/public/img/bookmark.svg";
import { v4 as uuidv4 } from "uuid";

const index = () => {
    return (
        <>
            <div>
                <div className="card" style={{ width: "18rem" }} id="book-8">
                    <div className={`id-${uuidv4()}`}>
                        <Image
                            src={book}
                            className="card-img-top"
                            height="350"
                            loading="lazy"
                            alt=""
                        />
                    </div>

                    <div
                        className="card-body"
                        style={{ paddingBottom: "-15px" }}
                    >
                        <div className={`id-${uuidv4()}`}>
                            <h5
                                className="card-title mb-3"
                                style={{ maxHeight: "24px" }}
                            >
                                Corazon de fuego III

                            </h5>
                            <hr className="mx-2" />

                            <div className="card-text">
                                <div className="pb-1">
                                    <strong>Para: </strong>
                                    Comprar
                                </div>
                                <div className="py-2">
                                    <strong>Precio: </strong>
                                    10.000 Gs.
                                </div>
                                <strong className="text-success d-block"></strong>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="btn btn-primary btn-lg btn-block w-100 btn-contact"
                        >
                            Obtener Libro
                        </button>

                        <section className="mt-3">
                            <span>
                                <Image
                                    src={avatar}
                                    alt="Avatar"
                                    title="Rick"
                                    className="avatar"
                                    width="10"
                                    loading="lazy"
                                />
                            </span>

                            <span className="text-dark float-end pt-2 pr-3">
                                <Image
                                    src={bookmark}
                                    title="Agregar como favorito"
                                    className="favourite"
                                    width="35"
                                    loading="lazy"
                                    alt=""
                                />
                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;