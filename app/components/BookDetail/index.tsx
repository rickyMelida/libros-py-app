import { IBookDTOResponse } from "@/models/interfaces/IBookResponse";
import { getBookDetailService } from "@/services/bookService";
import Image from "next/image";
import { useEffect, useState } from "react";
import book from "~/public/img/books/libro6.jpg";
import yellowStar from "~/public/img/estrella_amarilla.png";
import grayStar from "~/public/img/estrella_gris.png";
import facebookIcon from "~/public/img/facebook.svg";
import instagramIcon from "~/public/img/instagram.svg";
import twitterIcon from "~/public/img/twitter.svg";
import Loading from "../Common/Loading/Index";
import Base64Image, { detectMimeType } from "../Common/ImageBase64/Index";

const Index = ({ bookId }: { bookId: number }) => {
	const [bookDetail, setBookDetail] = useState<IBookDTOResponse | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const convertBase64 = (base64Data: string | any) => {
		const mimeType = detectMimeType(base64Data);
		const src = `data:${mimeType};base64,${base64Data}`;

		return src;
	}

	useEffect(() => {
		const getBookDetail = async () => {
			try {
				const bookDetail = await getBookDetailService(bookId);
				setBookDetail(bookDetail.data);
			} catch (error) {
				console.error("Error obteniendo detalle del libro:", error);
			} finally {
				setLoading(false);
			}
		};

		getBookDetail();
	}, [bookId]);


	useEffect(() => {
		if (bookDetail) {
			console.log("Book Detail:", bookDetail);
		}
	}, [bookDetail]);
	return (
		<div className="container">

			{loading ? (<Loading />) : (<div className="row">
				<div className="col-12 col-sm-10 offset-sm-2 col-md-9 offset-md-3 col-xl-10 offset-xl-2">

					<Image
						src={convertBase64(bookDetail?.images.find(img => img.isPrincipal)?.picture || "")}
						className="book-image"
						alt=""
						height="500"
						width="350"
					/>
				</div>
				<div className="col-offset-xl-8"></div>
			</div>)}


			{loading ? (<Loading />) : (<div className="row my-3">
				<div className="col-11 offset-1 col-md-10 offset-md-2">
					{
						bookDetail?.images.map((img, index) => (
							<Image
								src={convertBase64(img.picture)}
								key={index}
								alt=""
								className="book-image"
								width="90"
								height="130"
							/>
						))
					}
				</div>
			</div>)}

			{loading ? (<Loading />) : (<div className="row my-5">
				<div className="col-12 col-md-11 offset-md-1 col-xl-12 offset-xl-0 mb-3">
					<h2 className="book-title">{bookDetail?.title}</h2>
					<h4 className="text-primary book-author">{bookDetail?.author}</h4>
				</div>
				<hr />


				<div className="row">
					<div className="col-12 col-md-4">
						<h3 className="book-price">₲ {bookDetail?.price}</h3>
					</div>

					<div className="col-12 col-md-4">
						<span className="text-success">Disponible</span>
					</div>

					<div className="col-12 col-md-4">
						<form>
							<div className="form-group">
								<select className="form-control" id="exampleFormControlSelect1" disabled>
									<option>{bookDetail?.transactionType}</option>
								</select>
							</div>
						</form>
					</div>
				</div>

				<div className="row my-5">
					<div className="col-md-12">
						<h5>Detalles del Libro</h5>
						<hr />
					</div>
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-12">
								<div className="mb-2">
									<strong className="m-2 ">Año: </strong>
									<span className="text-primary py-1 book-author">{bookDetail?.year}</span>
								</div>

								<div className="mb-2">
									<strong className="m-2">Estado del libro: </strong>
									<span className="text-primary py-1">{bookDetail?.state}</span>
								</div>
								<div className="mb-2">
									<strong className="m-2">Descripción: </strong>
									<span className="py-1 book-pages ">{bookDetail?.description}</span> <br />
								</div>

								<div className="mb-2">
									<strong className="m-2">Otros Detalles: </strong>
									<span className="py-1 book-pages ">
										{
											bookDetail?.otherDetail == null
												? "No hay otros detalles disponibles"
												: bookDetail?.otherDetail
										}
									</span>
								</div>
							</div>
						</div>

					</div>


					<hr />
					{/*<div className="row">
						<div className="col-md-6">
							<span className="pt-3">Calificaciones: </span>
							<span>
								<Image src={yellowStar} alt="" width="30" />
							</span>
							<span>
								<Image src={yellowStar} alt="" width="30" />
							</span>
							<span>
								<Image src={yellowStar} alt="" width="30" />
							</span>
							<span>
								<Image src={grayStar} alt="" width="25" />
							</span>
							<span>
								<Image src={grayStar} alt="" width="25" />
							</span>
						</div>
						<div className="col-md-6 mt-1">
							<span>Comparti con:</span>
							<a className="text-muted px-2" href="#">
								<Image src={facebookIcon} alt="" width="14" />
							</a>
							<a className="text-muted px-2" href="#">
								<Image src={instagramIcon} alt="" width="14" />
							</a>
							<a className="text-muted px-2" href="#">
								<Image src={twitterIcon} alt="" width="14" />
							</a>
						</div>
					</div>*/}
				</div>


				<div className="row mb-5">
					<div className="col-12 col-md-6 mb-3">
						<button type="button" className="btn btn-primary btn-lg btn-block">
							Confirmar Transaccion
						</button>
					</div>
					<div className="col-12 col-md-6">
						<button type="button" className="btn btn-danger btn-lg btn-block">
							Cancelar Transaccion
						</button>
					</div>
				</div>
			</div>)}
		</div>
	);
};

export default Index;
