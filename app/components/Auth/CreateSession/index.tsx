"use client";

import { v4 as uuid } from "uuid";
import Link from "next/link";
import { Title } from "./Title";
import { FormFields } from "./FormFields";
import { IFormElement } from "@/models/interfaces/IFormElement";
import { useState } from "react";
import Swal from "sweetalert2";
import { register } from "@/services/authService";
import { IUserCredential } from "@/models/interfaces/IUserCredential";

const index = () => {
  const [userData, setUserData] = useState<IUserCredential>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [alertMessage, setAlertMessage] = useState("");

  const getDataFromForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = { [event.target.name]: event.target.value };
    setUserData((prevData: any) => ({ ...prevData, ...result }));
  };

  const sendData = () => {
    const [isFormDataValid, message] = isValidateData(userData);

    if (!isFormDataValid) {
      setAlertMessage(message);
      return;
    }

    register(userData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error al registrar usuario");
      });
  };

  const isValidateData = (formData: any): [boolean, string] => {
    const { name, email, phone, password, confirmPassword } = formData;

    if (name.trim() === "") return [false, "El campo Nombre es requerido"];

    if (email.trim() === "") return [false, "El campo email es requerido"];

    if (phone.trim() === "") return [false, "El campo Telefono es requerido"];

    if (password.trim() === "")
      return [false, "El campo contraseña es requerido"];

    if (confirmPassword.trim() === "")
      return [false, "El campo confirmar contraseña campo es requerdio"];

    if (password === confirmPassword)
      return [false, "Las contraseñas no coinciden!"];

    return [true, ""];
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <Title />

          <form className="border border-dark p-4">
            <div className="form-group py-2">
              <label htmlFor="name" className="font-weight-bold">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                onChange={getDataFromForm}
                autoComplete="off"
                value={userData.name}
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="email" className="font-weight-bold">
                Correo
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                onChange={getDataFromForm}
                autoComplete="off"
                value={userData.email}
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="phone" className="font-weight-bold">
                Teléfono
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                onChange={getDataFromForm}
                autoComplete="off"
                value={userData.phone}
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="password" className="font-weight-bold">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={getDataFromForm}
                value={userData.password}
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="confirm-password" className="font-weight-bold">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                name="confirmPassword"
                onChange={getDataFromForm}
                value={userData.confirmPassword}
              />
            </div>
            <div className="d-grid gap-2">
              <button
                type="button"
                className="btn btn-dark text-ligth"
                style={{ background: "#E65C35", border: "1px solid #00C4CB" }}
                onClick={sendData}
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
          {alertMessage ? (
            <div className="alert alert-danger my-3 text-center" role="alert">
              {alertMessage}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default index;
