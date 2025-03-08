import { signInWithFacebook, signInWithGoogle } from "@/services/authService";
import IHandle from "@/models/propsInterfaces/IHandle";
import facebookIcon from "~/public/img/facebook.svg";
import messageIcon from "~/public/img/message.png";
import googleIcon from "~/public/img/google.png";
import { Modal } from "react-bootstrap";
import Image from "next/image";
import { AuthMethod } from "@/utils/constants/Generic";
import { useRouter } from "next/router";
import Link from "next/link";

const ModalLogin: React.FC<IHandle> = ({ handleValue, value }) => {
  const handleAuth = async (authMethod: string) => {
    let authResult;

    switch (authMethod) {
      case AuthMethod.GOOGLE:
        authResult = await signInWithGoogle();
        break;
      case AuthMethod.FACEBOOK:
        authResult = await signInWithFacebook();
        break;
      default:
        break;
    }

    localStorage.setItem("token", authResult);
    handleValue(false, authResult);

  };

  const onHide = () => {
    handleValue(false, null);
  }

  return (
    <Modal
      show={value}
      onHide = {onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="my-5">
        <div className="row text-center">
          <div
            className="col-8 offset-2 py-1 my-2 border border-dark rounded-3 btn btn-light"
            onClick={() => handleAuth(AuthMethod.GOOGLE)}
          >
            <Image src={googleIcon} alt="Google Icon" width={20} height={20} />
            <span className="mx-2">Inicia Sesion con Google</span>
          </div>
          <div
            className="col-8 offset-2 py-1 my-2 border border-dark rounded-3 btn btn-light"
            onClick={() => handleAuth(AuthMethod.FACEBOOK)}
          >
            <Image
              src={facebookIcon}
              alt="Google Icon"
              width={20}
              height={20}
            />
            <span className="mx-2">Inicia Sesion con Facebook</span>
          </div>
          <div className="col-8 offset-2 py-1 my-2 border border-dark rounded-3 btn btn-light">
            <Link
              href="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Image
                src={messageIcon}
                alt="Google Icon"
                width={20}
                height={20}
              />
              <span className="mx-2">Inicia Sesion con Email</span>
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalLogin;
