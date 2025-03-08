import logout from "~/public/img/logout-svgrepo-com.svg";
import IHandle from "@/models/propsInterfaces/IHandle";
import Image from "next/image";
import React from "react";

const UnAuthenticatedIconSection: React.FC<IHandle> = ({ handleValue }) => {
  const handle = () => handleValue(true);

  return (
    <div>
      <span
        className="mx-3 icon"
        style={{ cursor: "pointer" }}
        onClick={handle}
      >
        <Image
          id="messages-item"
          title="Iniciar Sesión"
          src={logout}
          width="30"
          alt="Iniciar Sesión"
          loading="lazy"
        />
      </span>
    </div>
  );
};

export default UnAuthenticatedIconSection;
