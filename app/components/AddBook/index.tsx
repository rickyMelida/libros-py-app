import { IFormElement } from "@/models/interfaces/IFormElement";
import { Title } from "./Title";
import { Button } from "./Button";
import { v4 as uuid } from "uuid";
import { FormElement } from "./FormElement";

const Index = () => {
  const formDataElements: IFormElement[] = [
    {
      id: "book-title",
      name: "Titulo del Libro",
      placeholder: "Ej. Romeo y Julieta",
      type: "text",
    },
    {
      id: "book-author",
      name: "Autor del Libro",
      placeholder: "Ej. William Shakespeare",
      type: "text",
    },
    {
      id: "book-pages-number",
      name: "Numero de Páginas",
      placeholder: "Ej. 162",
      type: "number",
    },
    {
      id: "book-price",
      name: "Precio",
      placeholder: "Sin punto. Ej.65000",
      type: "number",
    },
    {
      id: "state-bok",
      name: "Estado del Libro:",
      type: "select",
      data: ["Nuevo", "Usado", "Semi Nuevo"],
    },
    {
      id: "state-bok",
      name: "Lo quiero..",
      type: "select",
      data: ["Vender", "Permutar", "Cambiar"],
    },
    {
      id: "mensaje",
      name: "Descripción",
      type: "textarea",
      placeholder: "Ej. El libro tiene pequeños rasguños en la parte de atrás.",
    },
    {
      id: "customFile",
      type: "file",
    },
  ];
  return (
    <>
      <Title />

      <div className="row mb-5">
        <div className="col-md-6 offset-md-3">
          <form>
            {formDataElements.map((element) => (
              <FormElement formElement={element} key={uuid()} />
            ))}
            <Button />
          </form>
        </div>
      </div>
    </>
  );
};

export default Index;
