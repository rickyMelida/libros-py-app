import Image from "next/image";
import book from "~/public/img/books/libro6.jpg";
import yellowStar from "~/public/img/estrella_amarilla.png";
import grayStar from "~/public/img/estrella_gris.png";
import facebookIcon from "~/public/img/facebook.svg";
import instagramIcon from "~/public/img/instagram.svg";
import twitterIcon from "~/public/img/twitter.svg";

const index = () => {
  return (
    <div className="container">
      {/* <!------------------------------------- Boton de ir a Inicio ---------------------------> */}
      <div className="row">
        <div
          className="position-fixed bottom-0 mb-5"
          id="button-up"
          style={{ display: "none" }}
        >
          <span> ^</span>
        </div>
      </div>

      {/* <!---------------------  Imagen Grande del Libro ---------------------> */}
      <div className="row">
        <div className="col-12 col-sm-10 offset-sm-2 col-md-9 offset-md-3 col-xl-10 offset-xl-2">
          <Image
            src={book}
            className="book-image"
            alt=""
            height="500"
            width="350"
          />
        </div>
        <div className="col-offset-xl-8"></div>
      </div>

      {/* <!---------------------  Otras Imagenes ---------------------> */}
      <div className="row my-3">
        <div className="col-11 offset-1 col-md-10 offset-md-2">
          <Image
            src={book}
            alt=""
            className="book-image"
            width="90"
            height="130"
          />
        </div>
      </div>

      <div className="row my-5">
        {/* <!---------------------  Titulo del Libro --------------------->   */}
        <div className="col-12 col-md-11 offset-md-1 col-xl-12 offset-xl-0 mb-3">
          <h2 className="book-title">DE ANIMALES A DIOSES</h2>
          <h4 className="text-primary book-author">YUVAL NOAH HARARI</h4>
        </div>
        <hr />

        {/* <!---------------------  Detalles del Libro ---------------------> */}
        <div className="row">
          <div className="col-12 col-md-4">
            <h3 className="book-price">₲ 190.000</h3>
          </div>

          <div className="col-12 col-md-4">
            <span className="text-success">Disponible</span>
          </div>

          <div className="col-12 col-md-4">
            <form>
              <div className="form-group">
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Comprar</option>
                  <option>Permutar</option>
                </select>
              </div>
            </form>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-md-12">
            <h5>Detalles del Libro</h5>
            <hr />
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <strong className="m-2">Autor: </strong>
                <span className="text-primary py-1 book-author">
                  YUVAL NOAH HARARI
                </span>
                <br />
                <br />

                <strong className="m-2">Editorial: </strong>
                <span className="py-1" style={{ color: "#03A964" }}>
                  SIN FRONTERAS
                </span>
                <br />
                <br />

                <strong className="m-2">Páginas: </strong>
                <span className="py-1 book-pages">496</span>
                <br />
              </div>
            </div>
          </div>
        </div>

        {/* <!---------------------  Calificaciones ---------------------> */}
        <hr />
        <div className="row">
          <div className="col-md-6">
            <span className="pt-3">Calificaciones: </span>
            <span>
              <Image src={yellowStar} alt="" width="30" />
            </span>
            <span>
              <Image src={yellowStar} alt="" width="30" />
            </span>
            <span>
              <Image src={yellowStar} alt="" width="30" />
            </span>
            <span>
              <Image src={grayStar} alt="" width="25" />
            </span>
            <span>
              <Image src={grayStar} alt="" width="25" />
            </span>
          </div>
          <div className="col-md-6 mt-1">
            <span>Comparti con:</span>
            <a className="text-muted px-2" href="#">
              <Image src={facebookIcon} alt="" width="14" />
            </a>
            <a className="text-muted px-2" href="#">
              <Image src={instagramIcon} alt="" width="14" />
            </a>
            <a className="text-muted px-2" href="#">
              <Image src={twitterIcon} alt="" width="14" />
            </a>
          </div>
        </div>
      </div>

      {/* <!---------------------  Botones ---------------------> */}
      <div className="row mb-5">
        <div className="col-12 col-md-6 mb-3">
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              type="button"
              style={{ background: "#03A964", border: "1px solid #00C4CB" }}
            >
              Confirmar Transaccion
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-grid gap-2">
            <button className="btn btn-danger" type="button">
              Cancelar Transaccion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
