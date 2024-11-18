import book1 from "~/public/img/books/libro1.jpg";
import book2 from "~/public/img/books/libro2.jpg";
import book3 from "~/public/img/books/libro3.jpg";
import Header from "@/components/common/header";
import Carousel from "@/components/common/carousel";

export default function Home() {
  const images = [book1, book2, book3];
    return (
        <>
            <Header />
            <Carousel images={images}/>
        </>
    );
}
