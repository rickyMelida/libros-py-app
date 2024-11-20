import { IFormElement } from "@/models/interfaces/IFormElement";

export const FormFields = ({
  inputProperty,
}: {
  inputProperty: IFormElement;
}) => {
  const { type } = inputProperty;

  return (
    <>
      {type == "text" || type == "email"
        ? textOrEmailInput(inputProperty)
        : passwordInput(inputProperty)}
    </>
  );
};

const passwordInput = (inputProperty: IFormElement) => {
  const { name, id, type } = inputProperty;
  return (
    <div className="form-group py-2">
      <label htmlFor={id} className="font-weight-bold">
        {name}
      </label>
      <input type={type} className="form-control" id={id} />
    </div>
  );
};

const textOrEmailInput = (inputProperty: IFormElement) => {
  const { name, type, id } = inputProperty;
  return (
    <div className="form-group py-2">
      <label htmlFor={id} className="font-weight-bold">
        {name}
      </label>
      <input type={type} className="form-control" id={id} autoComplete="off" />
    </div>
  );
};
