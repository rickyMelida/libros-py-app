'use client';

import { useEffect, useState } from "react";
import Card from "../Common/Card";
import SectionTitle from "./SectionTitle";
import { BookSection } from "@/models/enums/BookSection";
import { IBookDTOResponse } from "@/models/interfaces/IBookResponse";
import { getBooksServiceBySection } from "@/services/bookService";

const Index = ({ section }: { section: BookSection }) => {
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
		<>
			<SectionTitle section={section} />

			{/*<!-- En mobile: scroll horizontal. En desktop: grilla normal (ver d-none/d-md-flex abajo) --> */}
			<div className="scroll-row d-flex d-md-none">
				<div className="scroll-item">
					<Card />
				</div>
				<div className="scroll-item">
					<Card />
				</div>
				<div className="scroll-item">
					<Card />
				</div>
				<div className="scroll-item">
					<Card />
				</div>
			</div>

			{/*<!-- Versión desktop en grilla --> */}
			<div className="row g-4 d-none d-md-flex">
				<div className="col-6 col-md-4 col-lg-3">
					<Card />
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<Card />
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<Card />
				</div>
				<div className="col-6 col-md-4 col-lg-3">
					<Card />
				</div>
			</div>
		</>
	)
}

export default Index;