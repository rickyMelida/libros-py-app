import logoutIcon from "~/public/img/logout-svgrepo-com.svg";
import favorite from "~/public/img/wish_list.svg";
import message from "~/public/img/message.svg";
import Image from "next/image";
import Link from "next/link";
import { logout } from "@/services/authService";
import { redirect } from "next/navigation";

const AuthenticatedIconSection = () => {
	const handle = async () => {
		await logout();
		redirect("/login");
	}

	return (

		<div className="icon-users">
			<span className="mx-3 icon">
				<Link
					id="favorites-item"
					title="Favoritos"
					href="/favorite"
					style={{ color: "gray", textDecoration: "none" }}
				>
					<Image src={favorite} width="30" alt="" loading="lazy" />
				</Link>
			</span>
			<span className="mx-3 icon">
				<Link
					href="/messages"
					style={{ color: "gray", textDecoration: "none" }}
					title="Mensajes"
					id="messages-item"
				>
					<Image src={message} width="30" alt="message" loading="lazy" />
				</Link>
			</span>
			<span
				className="mx-3 icon"
				style={{ cursor: "pointer" }}
				onClick={handle}
			>
				<Image
					id="messages-item"
					title="Cerrar Sesion"
					src={logoutIcon}
					width="30"
					alt="Cerrar Sesion"
					loading="lazy"
				/>
			</span>
		</div>
	);
};

export default AuthenticatedIconSection;
