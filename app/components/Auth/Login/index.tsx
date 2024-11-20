import Image from "next/image";
import Link from "next/link";
import book from "~/public/img/book.png";
import logoLL from "~/public/img/webpeditor_libros-libres-logo.png";

const index = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="row m-2">
              <div className="col-md-12">
                <div className="mx-auto text-center">
                    <Image src={logoLL} alt="" width="150" />
                </div>
              </div>
            </div>

            <form className="border border-dark p-4">
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
              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-dark text-ligth"
                  style={{ background: "#03A964", border: "1px solid #00C4CB" }}
                >
                  Iniciar Sesión
                </button>
              </div>
              <hr className="line-horizontal my-5" />
              <div className="mt-4">
                <small
                  id="emailHelp"
                  className="form-text text-muted d-flex justify-content-center"
                >
                  ¿Eres nuevo por aqui? &nbsp; <br />
                  <Link
                    href="/create-session"
                    style={{ fontWeight: "bold", color: "#03A964" }}
                  >
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
