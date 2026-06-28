import { BookSection } from "@/models/enums/BookSection";
import { ChevronRight, Clock, Star } from "lucide-react";
import Link from "next/link";

const Index = ({ section }: { section: BookSection }) => {
	const iconSection = section == BookSection.Featured
		? <Star fill="gold" color="gold" width={30} height={30} />
		: <Clock />;
	const title = section == BookSection.Featured
		? "Libros Destacados"
		: "Libros Recientes";

	return (
		<div className="section-title">
			<h4> {iconSection} {title}</h4>
			<Link
              href={`/books/${section}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
				Ver todo
				<ChevronRight />

			</Link>
		</div>
	)
}

export default Index;