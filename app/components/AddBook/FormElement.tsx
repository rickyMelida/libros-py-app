import { IFormElement } from "@/models/interfaces/IFormElement";
import { v4 as uuid } from "uuid";
export const FormElement = ({ formElement }: { formElement: IFormElement }) => {
  return ComponentToRender(formElement) || inputText(formElement);
};

const ComponentToRender = (formElement: IFormElement) => {
  switch (formElement.type) {
    case "select":
      return inputSelect(formElement);
    case "textarea":
      return inputTextarea(formElement);
    case "inputFile":
      return inputFile(formElement);
  }
};

const inputText = (formElement: IFormElement) => {
  const { id, name, placeholder, type } = formElement;

  return (
    <div className="form-group my-4">
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

const inputSelect = (formElement: IFormElement) => {
  const { id, name, data } = formElement;

  return (
    <div className="form-group mb-4">
      <label htmlFor={id} className="text-muted">
        {name}
      </label>
      <select className="form-control" id={id}>
        {data?.map((element) => (
          <option key={uuid()}>{element}</option>
        ))}
      </select>
    </div>
  );
};

const inputTextarea = (formElement: IFormElement) => {
  const { name, id, placeholder } = formElement;
  <div className="form-group my-4">
    <label htmlFor={id}>{name}</label>
    <textarea
      className="form-control"
      id={id}
      rows={3}
      placeholder={placeholder}
      style={{ resize: "none" }}
    ></textarea>
  </div>;
};

const inputFile = (formElement: IFormElement) => {
  const { type, id } = formElement;

  return (
    <div className="form-group mb-4">
      <div className="custom-file">
        <input type={type} className="custom-file-input" id={id} />
      </div>
    </div>
  );
};
