import Image from "next/image";
import avatar from "~/public/img/avatar.svg";
import bookmark from "~/public/img/bookmark.svg";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { IBookDTOResponse } from "@/models/interfaces/IBookResponse";
import Base64Image from "../ImageBase64/Index";
import { TransactionType } from "@/models/enums/TransactionType";

type CardProps = {
	bookData: IBookDTOResponse
};

const Index = ({ bookData }: CardProps) => {
	return (
		<div className="card" id="6">
			<div className={`id-${uuidv4()}`}>
				<Link href={`/book-detail/${bookData.id}`}>
					<Base64Image
						base64Data={bookData.images[0]}
						height={400}
						alt={`Book ${bookData.id}`}
					/>
				</Link>
			</div>
			<div className="card-body">
				<h5 className="card-title mb-2">{bookData.title}</h5>
				<hr className="mx-2" />
				<div className="card-text">
					<div><strong>Estado: </strong>{bookData.description}</div>
					<div><strong>Para: </strong>{TransactionType[bookData.transactionType]}</div>
					<strong className="text-success d-block"></strong>
				</div>
				<button type="button" className="btn btn-primary btn-lg btn-block w-100">Contactar</button>
				<section className="mt-4">
					<Image
						src={avatar}
						alt="Avatar"
						title={`Publicado por ${bookData.userName}`}
						className="avatar"
						width="25"
						loading="lazy"
						style={{ marginLeft: 0 }}
					/>
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
