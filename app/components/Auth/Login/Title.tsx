import Image from "next/image";
import logoLL from "~/public/img/Gemini_logo.jpeg";

export const Title = () => {
    return (
        <div className="row mx-2">
              <div className="col-md-12">
                <div className="mx-auto text-center">
                    <Image src={logoLL} alt="" width="150" />
                </div>
              </div>
            </div>
    )
}
