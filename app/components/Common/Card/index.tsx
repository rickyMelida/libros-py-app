import Image from "next/image";
import avatar from "~/public/img/avatar.svg";
import bookmark from "~/public/img/bookmark.svg";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { IBookDTOResponse } from "@/models/interfaces/IBookResponse";
import Base64Image from "../ImageBase64/Index";
import { TransactionType } from "@/models/enums/TransactionType";
import { BookState } from "@/models/enums/BookState";
import { Heart } from "lucide-react";

type CardProps = {
	bookData: IBookDTOResponse
};

//const Index = ({ bookData }: CardProps) => {
const Index = () => {
	return (
		<div className="product-card">
			<div className="product-img-wrap">
				<img src="https://placehold.co/300x200/orange/white" alt="Producto destacado" />
				<span className="badge badge-destacado badge-tag">DESTACADO</span>
				<button className="btn-fav active" aria-label="Quitar de favoritos"><Heart color="red"/></button>
			</div>
			<div className="product-body">
				<div className="product-title">Smart TV LED 55" 4K</div>
				<div className="product-price">Gs. 3.200.000</div>
				<div className="product-footer">
					<div className="seller-info">
						<img src="https://i.pravatar.cc/60?img=35" className="seller-avatar" alt="Vendedor" />
						<span className="seller-name">Marta F.</span>
					</div>
					<button className="btn-comprar">Comprar</button>
				</div>
			</div>
		</div>
	);
};

export default Index;
