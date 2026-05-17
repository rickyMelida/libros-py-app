import book1 from "~/public/img/books/libro1.jpg";
import book2 from "~/public/img/books/libro2.jpg";
import book3 from "~/public/img/books/libro3.jpg";
import Carousel from "@/components/common/Carousel";
import Main from "@/components/Main";

export default function HomePage() {
  const images = [book1, book2, book3];
  return (
    <>
      <Carousel images={images} />
      <Main title="Lo mas destacado" section="destacados" />
      <Main title="Lo mas reciente" section="recientes" />
      <Main title="Otros libros" section="otros" />
    </>
  );
}
