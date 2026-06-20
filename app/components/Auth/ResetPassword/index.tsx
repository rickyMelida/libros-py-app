"use client";

import { useEffect, useState } from "react";
import { AuthService } from "@/services/authService";
import { IUserCredential } from "@/models/interfaces/IUserCredential";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Swal from "sweetalert2";
import { SweetAlertModel } from "@/models/interfaces/SweetAlertModel";

const FORM_INITIAL_STATE: IUserCredential = {
	email: "",
	password: "",
	confirmPassword: "",
}

const Index = () => {
	const [userData, setUserData] = useState<IUserCredential>(FORM_INITIAL_STATE);
	const authService = new AuthService();
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [ready, setReady] = useState(false);
	const [error, setError] = useState('');
	const [alertMessage, setAlertMessage] = useState<SweetAlertModel | null>(null);
	const supabase = createClient();


	const getDataFromForm = (event: React.ChangeEvent<HTMLInputElement>) => {
		const result = { [event.target.name]: event.target.value };
		setUserData((prevData: any) => ({ ...prevData, ...result }));
	};

	useEffect(() => {
		const { data: listener } = supabase.auth.onAuthStateChange((event) => {
			if (event === 'PASSWORD_RECOVERY')
				setReady(true) // El token es válido, mostrar el formulario
		})

		return () => listener.subscription.unsubscribe()
	}, []);

	const isValidateData = (formData: any): boolean => {
		const { password, confirmPassword } = formData;

		return password.trim() === confirmPassword.trim();
	};

	useEffect(() => {
		if(alertMessage?.message)
			Swal.fire({
				title: alertMessage.title,
				text: alertMessage.message,
				icon: alertMessage.type,
				confirmButtonText: 'Aceptar'
			}).then(() => {
				setLoading(false);
				setAlertMessage(null);
				alertMessage.event
			})
	}, [alertMessage])

	const handleUpdatePassword = async () => {
		setLoading(true)
		setError('')

		if (!isValidateData(userData)) {
			setAlertMessage({
				title: '¡Advertencia!',
				message: 'Las contraseñas no coinciden',
				type: 'warning'
			});

			return;
		}

		const { error, message } = await authService.updatePassword(userData.password)
		if (error) {
			setError(message)
			setLoading(false)
			return;
		}

		setAlertMessage({
				title: '¡Contraseña Cambiada!',
				message: message,
				type: 'success',
				event: router.push("/login")
			});

		setLoading(false)
	}
	if (!ready)
		return <p className="text-center mt-5">Verificando enlace...</p>
	
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
