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
import { useRouter } from "next/navigation";

const index = () => {
	const router = useRouter();
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

		if (password !== confirmPassword)
			return [false, "Las contraseñas no coinciden!"];

		return [true, ""];
	};

	return (
		<div className="auth-page">
			<div className="auth-card">

				<div className="auth-logo">
					<img src="./img/book.png" alt="Libros Libres PY" />
					<h3>Libros Libres PY</h3>
				</div>

				<form>
					<div className="form-group py-1">
						<label htmlFor="name">Nombre completo</label>
						<input type="text" className="form-control" id="name" name="name" autoComplete="off" placeholder="Tu nombre" value={userData.name} onChange={getDataFromForm} />
					</div>
					<div className="form-group py-1">
						<label htmlFor="email">Correo electrónico</label>
						<input type="email" className="form-control" id="email" name="email" autoComplete="off" placeholder="tu@correo.com" value={userData.email} onChange={getDataFromForm} />
					</div>
					<div className="form-group py-1">
						<label htmlFor="phone">Teléfono</label>
						<input type="tel" className="form-control" id="phone" name="phone" autoComplete="off" placeholder="Tu teléfono" value={userData.phone} onChange={getDataFromForm} />
					</div>
					<div className="form-group py-1">
						<label htmlFor="password">Contraseña</label>
						<input type="password" className="form-control" id="password" name="password" placeholder="Al menos 8 caracteres" value={userData.password} onChange={getDataFromForm} />
					</div>
					<div className="form-group py-1">
						<label htmlFor="password-confirm">Confirmar contraseña</label>
						<input type="password" className="form-control" id="password-confirm" name="confirmPassword" placeholder="Repetir contraseña" value={userData.confirmPassword} onChange={getDataFromForm} />
					</div>

					<button type="button" id="btn-create-account" className="btn btn-dark btn-lg btn-block mt-3" onClick={sendData}>
						Crear cuenta
					</button>

					<p className="auth-terms mt-3">
						Al crear una cuenta, aceptas las
						<a href="#">Condiciones de uso</a> y el
						<a href="#">Aviso de privacidad</a> de Change Books.
					</p>

					<div className="auth-divider mt-3">
						<span>¿Ya tenés cuenta?</span>
					</div>
					<div className="auth-footer-text">
						<a style={{cursor: "pointer"}} className="link-opacity-100-hover" onClick={() => router.push("/login")}>Iniciá sesión</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default index;
