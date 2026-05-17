import { IFormElement } from "@/models/interfaces/IFormElement";
import { ChangeEventHandler, useState } from "react";

export const FormFields = ({
  inputProperty,
  onChange,
}: {
  inputProperty: IFormElement;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  const { type } = inputProperty;
  return (
    <>
      {type == "text" || type == "email"
        ? textOrEmailInput(inputProperty, onChange)
        : passwordInput(inputProperty, onChange)}
    </>
  );
};

const passwordInput = (
  inputProperty: IFormElement,
  onHandleChange: ChangeEventHandler<HTMLInputElement>
) => {
  const { name, id, type, value } = inputProperty;
  return (
    <div className="form-group py-2">
      <label htmlFor={id} className="font-weight-bold">
        {name}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        onChange={onHandleChange}
        value={value}
      />
    </div>
  );
};

const textOrEmailInput = (
  inputProperty: IFormElement,
  onHandleChange: ChangeEventHandler<HTMLInputElement>
) => {
  const { name, type, id, value } = inputProperty;
  return (
    <div className="form-group py-2">
      <label htmlFor={id} className="font-weight-bold">
        {name}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        onChange={onHandleChange}
        autoComplete="off"
        value={value}
      />
    </div>
  );
};
