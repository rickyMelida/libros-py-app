const Card = () => {
  return (
    <>
      <div className="card" id="5" style={{ width: "18rem" }}>
        <img
          src="http://127.0.0.1:5500/img/books/libro5.jpg"
          height="350"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title mb-5" style={{ maxHeight: "24px" }}>
            DESTROZA ESTE ALBUM
          </h5>
          <hr className="mx-2" />
          <p className="card-text">
            <div className="pb-2">
              <strong>Estado: </strong>Nuevo
            </div>
            <div className="py-2">
              <strong>Para: </strong>Vender
            </div>
            <strong className="text-success d-block"></strong>
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block w-100"
          >
            Contactar
          </button>
          <section className="mt-4">
            <img
              src="../img/avatar.svg"
              width="10"
              alt="Avatar"
              className="avatar"
            />
            <cite className="text-primary pt-2 d-block w-50 users" id="user-0">
              Johan Doe
            </cite>
            <span className="text-dark float-end pt-2" id="bookmarkContainer">
              <img
                src="../img/bookmark.png"
                width="35"
                title="Agregar como favorito"
              />
            </span>
          </section>
        </div>
      </div>
    </>
  );
};
