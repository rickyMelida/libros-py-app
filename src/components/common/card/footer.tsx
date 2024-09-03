const Footer = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div className="col-md-4 d-flex align-items-center">
                <a
                  href="/"
                  className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                >
                  {/*<svg className="bi" width="30" height="24">
                    <use xlink:href="#bootstrap"></use>
                  </svg>*/}
                </a>
                <span className="text-muted">© 2021 Company, Inc</span>
              </div>

              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                  <a className="text-muted" href="#">
                    <img src="./img/facebook.svg" alt="" width="24" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="text-muted" href="#">
                    <img src="./img/instagram.svg" alt="" width="24" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="text-muted" href="#">
                    <img src="./img/twitter.svg" alt="" width="24" />
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

export default Footer;