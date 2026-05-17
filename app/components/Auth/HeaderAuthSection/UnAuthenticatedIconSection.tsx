import logout from "~/public/img/logout-svgrepo-com.svg";
import IHandle from "@/models/propsInterfaces/IHandle";
import Image from "next/image";
import React from "react";
import { redirect } from "next/navigation";

const UnAuthenticatedIconSection = () => {
	const handle = () => {
		redirect("/login");
	}

	return (
		<div className="icon-users">
			<span
				className="mx-3 icon"
				style={{ cursor: "pointer" }}
				onClick={handle}
			>
				<Image
					id="messages-item"
					title="Iniciar Sesión"
					src={logout}
					width="30"
					alt="Iniciar Sesión"
					loading="lazy"
				/>
			</span>
		</div>
	);
};

export default UnAuthenticatedIconSection;
