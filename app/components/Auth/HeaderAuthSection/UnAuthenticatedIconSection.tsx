import React from "react";
import Link from "next/link";

const UnAuthenticatedIconSection = () => {
	return (
		<li className="d-flex">
			<Link
				id="login-item"
				title="Login"
				href="/login"
				className="nav-link"
			>
				Iniciar Sesión
			</Link>
		</li>
	);
};

export default UnAuthenticatedIconSection;
