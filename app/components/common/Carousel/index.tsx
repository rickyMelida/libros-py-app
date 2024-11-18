import Image, { StaticImageData } from "next/image";
import { v4 as uuidv4 } from "uuid";

const index = ({ images }: { images: StaticImageData[] }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-7">
                        <div
                            id="carouselExampleAutoplaying"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                {images.map((image, index) => (
                                    <div
                                        className={`carousel-item ${
                                            index == 0 ? "active" : ""
                                        }`}
                                        key={uuidv4()}
                                    >
                                        <Image
                                            src={image}
                                            height={800}
                                            alt=""
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                ))}
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                    Previous
                                </span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
