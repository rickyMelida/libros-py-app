import Image from "next/image";
import book from "~/public/img/books/libro1.jpg";
import avatar from "~/public/img/avatar.svg";
import bookmark from "~/public/img/bookmark.svg";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const Index = () => {
	return (
		<div className="card" id="6">
			<div className={`id-${uuidv4()}`}>
				<Link href="/book-detail/3">
					<Image
						src={book}
						className="card-img-top"
						height="350"
						loading="lazy"
						alt=""
					/>
				</Link>
			</div>
			<div className="card-body">
				<h5 className="card-title mb-5" style={{ maxHeight: "24px" }}>ESCUELA DE TRADING</h5>
				<hr className="mx-2" />
				<div className="card-text">
					<div className="pb-2"><strong>Estado: </strong>Usado</div>
					<div className="py-2"><strong>Para: </strong>Vender</div>
					<strong className="text-success d-block"></strong>
				</div>
				<button type="button" className="btn btn-primary btn-lg btn-block w-100">Contactar</button>
				<section className="mt-4">
					<Image
						src={avatar}
						alt="Avatar"
						title="Rick"
						className="avatar"
						width="25"
						loading="lazy"
					/>
					<cite className="text-primary pt-2 d-block w-50 users" id="user-1">Johan Doe</cite>
					<span className="text-dark float-end pt-2" id="bookmarkContainer">
						<Image
							src={bookmark}
							title="Agregar como favorito"
							className="favourite"
							width="25"
							loading="lazy"
							alt=""
						/>
					</span>
				</section>
			</div>
		</div>
	);
};

export default Index;
