import Image from "next/image";
import Link from 'next/link';
import book from "~/public/img/book.png";

const index = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="row m-3">
            <div className="col-md-12">
              <div className="mx-auto text-center">
                <a className="navbar-brand" href="#" title="Inicio">
                  <Image src={book} alt="" width="50" />
                </a>
                <h3>Change Books</h3>
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
            <button
              type="button"
              className="btn btn-dark text-ligth btn-lg btn-block "
            >
              Continuar
            </button>

            <div className="mt-4">
              <small id="emailHelp" className="form-text text-muted">
                Al crear una cuenta, acepta las
                <a href=""> Condiciones de uso y el Aviso de privacidad </a> de
                Book Changes.
              </small>
            </div>

            <hr className="line-horizontal my-5" />
            <div className="mt-4">
              <small
                id="emailHelp"
                className="form-text text-muted d-flex justify-content-center"
              >
                Ya tienes una cuenta &nbsp;
                <Link href="/login">Inicia Sesión</Link>
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
