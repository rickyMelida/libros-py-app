import Carousel from "@/components/Common/Carousel";
import Main from "@/components/Main";
import BookCategory from "@/components/Main/BookCategory";
import { BookSection } from "@/models/enums/BookSection";

export default function HomePage() {

	return (
		<>
			<Carousel />
			<div className="container">
				<BookCategory />
				<Main section={BookSection.Featured} />
				<Main section={BookSection.Recent} />
			</div>
		</>
	);
}
