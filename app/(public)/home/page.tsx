import Carousel from "@/components/Common/Carousel";
import Main from "@/components/Main";
import { BookSection } from "@/models/enums/BookSection";

export default function HomePage() {
	
	return (
		<>
			<Carousel />
			<Main title="Lo mas destacado" section={BookSection.Featured} />
			<Main title="Lo mas reciente" section={BookSection.Recent} />
			<Main title="Otros libros" section={BookSection.Other} />
		</>
	);
}
