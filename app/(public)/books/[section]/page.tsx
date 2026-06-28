'use client';

import ViewAll from "@/components/ViewAll";
import { use } from "react";

const BooksPage = ({ params }: { params: Promise<{ section: string }> }) => {
	const { section } = use(params);

	return <ViewAll section={section}/>
}

export default BooksPage;