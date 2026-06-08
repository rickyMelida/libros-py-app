'use client';

import Card from "@/components/Common/Card";
import { BookSection } from "@/models/enums/BookSection";
import { IBookDTOResponse } from "@/models/interfaces/IBookResponse";
import { getBooksServiceBySection } from "@/services/bookService";
import { useEffect, useState } from "react";
import Loading from "../Common/Loading/Index";

const Index = ({ title, section }: { title: string, section: BookSection }) => {
	const [books, setBooks] = useState<Array<IBookDTOResponse>>();
	const [loading, setLoading] = useState(true);

	const getBookBySection = async () => {
		try {
			setLoading(true);
			const books = await getBooksServiceBySection(section);
			setBooks(books.data);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching books by section:", error);
			setLoading(false);
		}
	}

	useEffect(() => {
		if (section && !books)
			getBookBySection();
	}, [section]);

	return (

		<div className="container px-3 px-md-4">
			<div className="books-section row page-animate" id={section}>
				<div className="col-12 d-flex justify-content-between align-items-center mb-3">
					<h5 className="section-title mb-0" id={section}>{title}</h5>
					<a href="./views/unauthorized.html" className="view-all-link">Ver todos →</a>
				</div>
				<hr className="col-12 line-horizontal mb-3" />
				{
					loading ? (<Loading />) :
						(
							books?.map((book) => (
								<div className="col-12 col-md-4 col-xl-3 py-3" key={book.id}>
									<Card bookData={book} />
								</div>
							))
						)
				}
			</div>
		</div>

	);
};

export default Index;
