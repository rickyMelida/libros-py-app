import Image from "next/image";
import logoLL from "~/public/img/webpeditor_libros-libres-logo.png";

export const Title = () => {
  return (
    <div className="row m-3">
      <div className="col-md-12">
        <div className="mx-auto text-center">
          <Image src={logoLL} alt="" width="150" />
        </div>
      </div>
    </div>
  );
};
