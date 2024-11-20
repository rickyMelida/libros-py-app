import Image from "next/image";
import Link from "next/link";
import logoLL from "~/public/img/webpeditor_libros-libres-logo.png";

const index = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="row m-3">
            <div className="col-md-12">
              <div className="mx-auto text-center">
                <Image src={logoLL} alt="" width="150" />
              </div>
            </div>
          </div>

          <form className="border border-dark p-4">
            <div className="form-group py-2">
              <label htmlFor="name" className="font-weight-bold">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                autoComplete="off"
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="email" className="font-weight-bold">
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
              <label htmlFor="password" className="font-weight-bold">
                Contraseña
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="form-group py-2 pb-3">
              <label htmlFor="password" className="font-weight-bold">
                Confirmar Contraseña
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-dark text-ligth"
                style={{ background: "#03A964", border: "1px solid #00C4CB" }}
              >
                Continuar
              </button>
            </div>

            <div className="mt-4">
              <small id="emailHelp" className="form-text text-muted">
                Al crear una cuenta, acepta las
                <a href="" style={{ fontWeight: "bold", color: "#03A964" }}>
                  {" "}
                  Condiciones de uso y el Aviso de privacidad{" "}
                </a>{" "}
                de Book Changes.
              </small>
            </div>

            <hr className="line-horizontal my-5" />
            <div className="mt-4">
              <small
                id="emailHelp"
                className="form-text text-muted d-flex justify-content-center"
              >
                Ya tienes una cuenta &nbsp;
                <Link
                  href="/login"
                  style={{ fontWeight: "bold", color: "#03A964" }}
                >
                  Inicia Sesión
                </Link>
              </small>
            </div>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default index;
