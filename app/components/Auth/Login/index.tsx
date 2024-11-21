/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Title } from "./Title";
import { IFormElement } from "@/models/interfaces/IFormElement";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { LastSection } from "./LastSection";
import { useState } from "react";
import { ICredential } from "@/models/interfaces/ICredential";
import Alert from "@/components/common/Alert";
import { validateLogin } from "@/utils/handler/authHandler";

const index = () => {
  const [credentials, setCredentials] = useState<ICredential>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
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

  const handleInputs = (key: string, value: string) => {
    setCredentials((prevData) => ({ ...prevData, [key]: value }));
  };

  const startSession = () => {
    const { email, password } = credentials;
    const validateError = validateLogin(email, password);

    if (validateError != ""){
        setError(validateError);
        return;
    }

    setLoading(true);
    setError("");
  };
  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <Title />

            <form className="border border-dark p-4">
              <InputField
                inputProperty={inputs[0]}
                handleValue={handleInputs}
                loadingCredentials={loading}
              />
              <InputField
                inputProperty={inputs[1]}
                handleValue={handleInputs}
                loadingCredentials={loading}
              />
              <Button onclick={startSession} loadingCredentials={loading} />
              <hr className="line-horizontal my-5" />
              <LastSection />
            </form>

            {error != "" ? <Alert message={error} /> : ""}
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
