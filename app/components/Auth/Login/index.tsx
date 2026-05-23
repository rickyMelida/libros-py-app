"use client";

import { useState } from "react";
import { ICredential } from "@/models/interfaces/ICredential";
import { useRouter } from "next/navigation";
import { loginByEmail } from "@/services/authService";

const Index = () => {
	const router = useRouter();
	const [error, setError] = useState<string>("");
	const [credentials, setCredentials] = useState<ICredential>({
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState<boolean>(false);

	const handleInputs = (key: string, value: string) => {
		setError("");
		setCredentials((prevData) => ({ ...prevData, [key]: value }));
	};

	const submitLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setLoading(true);
		const siginResponse = await loginByEmail(credentials);

		if (!siginResponse) {
			setLoading(false);
			setError("Error al iniciar sesión. Verifica tus credenciales e intenta nuevamente.");
			return;
		}

		setLoading(false);
		router.push("/home");
	}


	return (
		<div className="auth-page">
			<div className="auth-card">

				<div className="auth-logo">
					<img src="./img/book.png" alt="Libros Libres PY" />
					<h3>Libros Libres PY</h3>
				</div>

				<form>
					<div className="form-group py-1">
						<label htmlFor="email">Correo electrónico</label>
						<input type="email"
							className="form-control"
							id="email"
							autoComplete="off"
							placeholder="tu@correo.com"
							onChange={(e) => handleInputs("email", e.target.value)}
						/>
					</div>
					<div className="form-group py-1">
						<label htmlFor="password">Contraseña</label>
						<input type="password"
							className="form-control"
							id="password"
							placeholder="••••••••"
							onChange={(e) => handleInputs("password", e.target.value)}
						/>
					</div>

					<button className="btn btn-dark btn-lg btn-block mt-3"
						disabled={loading || !credentials.email || !credentials.password}
						onClick={(e) => submitLogin(e)}

					>
						{ loading ? "Iniciando sesión..." : "Iniciar Sesión" }
					</button>
					{
						error && <div className="alert alert-danger mt-3 text-center" role="alert">{error}</div>
					}

					<div className="auth-divider mt-4">
						<span>¿Eres nuevo por aquí?</span>
					</div>
					<div className="auth-footer-text">
						<a style={{ cursor: "pointer" }}
							className="link-opacity-100-hover"
							onClick={() => router.push("/create-session")}
						>
							Crea tu cuenta en Change Books
						</a>
					</div>
				</form>

			</div>
		</div>
	);
};

export default Index;
