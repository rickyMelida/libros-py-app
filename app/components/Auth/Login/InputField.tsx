import { IFormElement } from "@/models/interfaces/IFormElement";

export const InputField = ({
    inputProperty,
}: {
    inputProperty: IFormElement;
}) => {
    const { id, type, name } = inputProperty;
    return (
        <div className="form-group py-2">
            <label htmlFor={id} className="font-weight-bold">
                {name}
            </label>
            <input
                type={type}
                className="form-control"
                id={id}
                aria-describedby="emailHelp"
                autoComplete="off"
            />
        </div>
    );
};
