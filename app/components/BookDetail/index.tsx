import { IBookDTOResponse } from "@/models/interfaces/IBookResponse";
import { getBookDetailService } from "@/services/bookService";
import { useEffect, useState } from "react";
import BookImages from './Images';
import TransactionDetail from "./TransactionDetail";
import SellerInfo from "./SellerInfo";
import InfoDescription from "./InfoDescription";
import OtherBooksOfInterest from "./OtherBooksOfInterest";
import OtherBooksTitle from "./OtherBooksOfInterest/Title";
import TransactionBar from "./TransactionBar";

const Index = ({ bookId }: { bookId: number }) => {
	const [bookDetail, setBookDetail] = useState<IBookDTOResponse | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

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


	return (
		<>
			<div className="container">
				<div className="row g-4 mt-2">
					<div className="col-12 col-lg-7">
						<BookImages loading={loading} bookDetail={bookDetail} />
						<InfoDescription loading={loading} bookDetail={bookDetail} />
					</div>

					<div className="col-12 col-lg-5">
						<TransactionDetail loading={loading} bookDetail={bookDetail} />
						<SellerInfo loading={loading} bookDetail={bookDetail} />
					</div>
				</div>
				<OtherBooksTitle />
				<OtherBooksOfInterest />
			</div>
			<TransactionBar />
		</>
	);
};

export default Index;
