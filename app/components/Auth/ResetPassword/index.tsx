"use client";

import { useEffect, useState } from "react";
import { AuthService } from "@/services/authService";
import { IUserCredential } from "@/models/interfaces/IUserCredential";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Swal from "sweetalert2";

const Index = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [ready, setReady] = useState(false);
	const [error, setError] = useState('');
	const authService = new AuthService();
	const supabase = createClient();

	const [userData, setUserData] = useState<IUserCredential>({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const getDataFromForm = (event: React.ChangeEvent<HTMLInputElement>) => {
		const result = { [event.target.name]: event.target.value };
		setUserData((prevData: any) => ({ ...prevData, ...result }));
	};

	useEffect(() => {
		// Supabase detecta automáticamente el token en la URL
		// y establece la sesión. Solo hay que escuchar el evento.
		const { data: listener } = supabase.auth.onAuthStateChange((event) => {
			if (event === 'PASSWORD_RECOVERY') {
				setReady(true) // El token es válido, mostrar el formulario
			}
		})

		return () => listener.subscription.unsubscribe()
	}, []);

	const isValidateData = (formData: any): boolean => {
		const { password, confirmPassword } = formData;

		return password.trim() === confirmPassword.trim();
	};

	const handleUpdatePassword = async () => {
		setLoading(true)
		setError('')

		if (!isValidateData(userData)) {
			Swal.fire({
				title: '¡Advertencia!',
				text: 'Las contraseñas no coinciden',
				icon: 'warning',
				confirmButtonText: 'Aceptar'
			}).then(() => {
				router.push("/login");
			});
			return;
		}

		const { error, message } = await authService.updatePassword(userData.password)
		if (error) {
			setError(message)
			return;
		}

		Swal.fire({
			title: '¡Contraseña Cambiada!',
			text: message,
			icon: 'success',
			confirmButtonText: 'Aceptar'
		}).then(() => {
			router.push("/login");
		});


		setLoading(false)
	}
	if (!ready) {
		return <p>Verificando enlace...</p>
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
						<label htmlFor="password">Contraseña Nueva</label>
						<input type="password" className="form-control" id="password" name="password" placeholder="Al menos 8 caracteres" value={userData.password} onChange={getDataFromForm} />
					</div>
					<div className="form-group py-1">
						<label htmlFor="password-confirm">Confirmar contraseña</label>
						<input type="password" className="form-control" id="password-confirm" name="confirmPassword" placeholder="Repetir contraseña" value={userData.confirmPassword} onChange={getDataFromForm} />
					</div>

					<button type="button" id="btn-create-account" className="btn btn-dark btn-lg btn-block mt-3" onClick={handleUpdatePassword} disabled={loading}>
						{loading ? "Cambiando contraseña..." : "Cambiar Contraseña"}
					</button>

					<div className="auth-divider mt-3">
						<span>¿Ya tenés cuenta?</span>
					</div>
					<div className="auth-footer-text">
						<a
							style={{ cursor: "pointer" }}
							className="link-opacity-100-hover"
							onClick={() => router.push("/login")}
						>
							Iniciá sesión
						</a>
					</div>
					{error && <p style={{ color: 'red' }}>{error}</p>}
				</form>
			</div>
		</div>
	);
};

export default Index;
