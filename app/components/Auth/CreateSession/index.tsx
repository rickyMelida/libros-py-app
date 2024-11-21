import { v4 as uuid } from "uuid"
import Link from "next/link";
import { Title } from "./Title";
import { FormFields } from "./FormFields";
import { IFormElement } from "@/models/interfaces/IFormElement";

const index = () => {
  const inputProperties: IFormElement[] = [
    {
      id: "name",
      type: "type",
      name: "Nombre"
    },
    {
      id: "email",
      type: "email",
      name: "Correo"
    },
    {
     id: "password",
     type: "password",
     name: "Contraseña"
    },
    {
      id: "password-confirm",
      type: "password",
      name: "Confirmar Contraseña"
     }
  ]
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <Title/>

          <form className="border border-dark p-4">
            {
              inputProperties.map((element) => (
                <FormFields inputProperty={element} key={uuid()}/>
              ))
            }
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-dark text-ligth"
                style={{ background: "#E65C35", border: "1px solid #00C4CB" }}
              >
                Continuar
              </button>
            </div>

            <div className="mt-4">
              <small id="emailHelp" className="form-text text-muted">
                Al crear una cuenta, acepta las
                <a href="" style={{ fontWeight: "bold", color: "#E65C35" }}>
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
                  style={{ fontWeight: "bold", color: "#E65C35" }}
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
