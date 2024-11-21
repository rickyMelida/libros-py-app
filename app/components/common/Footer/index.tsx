import Image from "next/image";
import facebookIcon from "~/public/img/facebook.svg";
import instagramIcon from "~/public/img/instagram.svg";
import twitterIcon from "~/public/img/twitter.svg";

const index = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div className="col-md-4 d-flex align-items-center">
                <span className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                  <svg className="bi" width="30" height="24">
                    <use xlinkHref="#bootstrap" />
                  </svg>
                </span>
                <span className="text-muted">&copy; 2024 Company, Inc</span>
              </div>

              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                  <a className="text-muted" href="#">
                    <Image src={facebookIcon} alt="" width="24" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="text-muted" href="#">
                    <Image src={instagramIcon} alt="" width="24" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="text-muted" href="#">
                    <Image src={twitterIcon} alt="" width="24" />
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
