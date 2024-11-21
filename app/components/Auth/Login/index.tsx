import Link from "next/link";
import { Title } from "./Title";
import { IFormElement } from "@/models/interfaces/IFormElement";
import { InputField } from "./InputField";
import { v4 as uuid } from "uuid";
import { Button } from "./Button";
import { LastSection } from "./LastSection";

const index = () => {
    const inputs: IFormElement[] = [
        {
            id: "email",
            type: "email",
            name: "Correo",
        },
        {
            id: "password",
            type: "password",
            name: "Contraseña",
        },
    ];
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <Title />

                        <form className="border border-dark p-4">
                            {inputs.map((element) => (
                                <InputField
                                    inputProperty={element}
                                    key={uuid()}
                                />
                            ))}
                            <Button />
                            <hr className="line-horizontal my-5" />
                            <LastSection />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
