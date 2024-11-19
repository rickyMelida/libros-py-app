import Card from "@/components/common/Card";

const favoritePage = () => {
    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4 py-3">
                        <h2>Mis Libros Favoritos</h2>
                    </div>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3">
                        <div>
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default favoritePage;
