import Image from "next/image";
import avatar from "~/public/img/avatar.svg";
import Link from "next/link";
import { IBookDTOResponse } from "@/models/interfaces/IBookResponse";
import Base64Image from "../ImageBase64/Index";
import { Heart } from "lucide-react";
import { abbreviateName, formatToGuarani, getBookState, getTransactionType } from "@/utils/util";

type CardProps = {
	bookData: IBookDTOResponse
};

const Index = ({ bookData }: CardProps) => {
	console.log({ bookData })
	return (
		<div className="product-card">
			<div className="product-img-wrap">
				<Link href={`/book-detail/${bookData.id}`}>
					<Base64Image
						base64Data={bookData.images.find((image) => image.isPrincipal)?.picture || ""}
						height={400}
						alt={`Book ${bookData.id}`}
					/>
				</Link>
				<span className="badge badge-destacado badge-tag">
					{getBookState(bookData.state).toUpperCase()}
				</span>
				<button className="btn-fav active" aria-label="Quitar de favoritos"><Heart color="red" /></button>
			</div>
			<div className="product-body">
				<div className="product-title">{bookData.title}</div>
				<div className="product-price">{formatToGuarani(bookData.price)}</div>
				<div className="product-footer">
					<div className="seller-info">
						<Image
							src={avatar}
							alt="Avatar"
							title={`Publicado por ${bookData.userName}`}
							className="seller-avatar"
							width="25"
							loading="lazy"
							style={{ marginLeft: 0 }}
						/>
						<span className="seller-name">{abbreviateName(bookData.userName)}</span>
					</div>
					<button className="btn-comprar">
						{getTransactionType(bookData.transactionType)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Index;
