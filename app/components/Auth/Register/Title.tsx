import Image from "next/image";
import logoLL from "~/public/img/libros-libres-logo.png";

export const Title = () => {
  return (
    <div className="row mx-3">
      <div className="col-md-12">
        <div className="mx-auto text-center">
          <Image src={logoLL} alt="" width="150" />
        </div>
      </div>
    </div>
  );
};
