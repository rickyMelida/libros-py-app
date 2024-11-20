const index = () => {
  return (
    <>
      <div className="row mt-5 mb-3">
        <div className="col-6 offset-3 col-md-6 ">
          <h2 className="text-center">Contáctenos</h2>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
          <form>
            <div className="form-group my-4">
              <input
                type="text"
                className="form-control"
                id="nombre-apellido"
                aria-describedby="emailHelp"
                placeholder="Nombre y Apellido *"
              />
            </div>
            <div className="form-group my-4">
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email *"
              />
            </div>
            <div className="form-group my-4">
              <input
                type="text"
                className="form-control"
                id="asunto"
                aria-describedby="emailHelp"
                placeholder="Asunto"
              />
            </div>
            <div className="form-group my-4">
              <textarea
                className="form-control"
                id="mensaje"
                rows={7}
                placeholder="Mensaje *"
              ></textarea>
            </div>
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary"
                type="submit"
                style={{ background: "#03A964", border: "1px solid #00C4CB" }}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default index;
