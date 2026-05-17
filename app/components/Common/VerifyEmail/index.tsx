const index = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-2">
                        <div className="border border-dark p-4 my-5">
                            <div className="alert alert-light" role="alert">
                                <div className="row pb-4">
                                    <div className="col-md-7 offset-md-5">
                                        <img
                                            src="../img/email-verification.svg"
                                            width="100"
                                            className="img-email-verification"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <h4 className="alert-heading text-center">
                                    Verifique su Correo Electrónico
                                </h4>
                                <hr />

                                <p className="text-center">
                                    Para comenzar a utilizar la cuenta de Change
                                    Book, debe de confirmar su dirección de
                                    correo electrónico.
                                </p>
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary btn-lg btn-block"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
