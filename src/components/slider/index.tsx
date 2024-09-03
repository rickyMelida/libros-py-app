const Slider = () => {
  return (
    <>
      <div className="row mb-5">
        <div className="col-md-12">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner" id="carousel-container">
              <div className="carousel-item">
                <img
                  src="http://127.0.0.1:5500/img/books/libro1.jpg"
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item active">
                <img
                  src="http://127.0.0.1:5500/img/books/libro2.jpg"
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="http://127.0.0.1:5500/img/books/libro3.jpg"
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="http://127.0.0.1:5500/img/books/libro4.jpg"
                  className="d-block w-100"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
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
    </>
  );
};

export default Slider;