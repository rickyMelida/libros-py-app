import { IFormElement } from "@/models/interfaces/IFormElement";
import { ChangeEvent, useEffect, useState } from "react";

export const InputField = ({
    inputProperty,
    handleValue,
    loadingCredentials
}: {
    inputProperty: IFormElement;
    handleValue: (key: string, value: string) => void;
    loadingCredentials: boolean
}) => {
    const { id, type, name } = inputProperty;
    const [loading, setLoading] = useState<boolean>(loadingCredentials);

    const handleValues = (event: ChangeEvent<HTMLInputElement>) => {
        const {key, value} = {key: event.target.id, value: event.target.value};
        handleValue(key, value);
    }

    useEffect(() => {
        setLoading(loadingCredentials);
    }, [loadingCredentials]);

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
                onBlur={handleValues}
                disabled={loading}
            />
        </div>
    );
};
