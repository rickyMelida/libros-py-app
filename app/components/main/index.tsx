import Card from "@/components/common/Card";

const index = ({title, section}: {title: string, section: string}) => {
    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row bg-light p-3" id={section}>
                    <div>
                        <div className="row">
                            <div className="col-6 offset-0 col-md-3 offset-md-1 pt-2">
                                <h5 id="recientes">{title}</h5>
                            </div>
                            <div className="col-4 offset-2 col-md-2 offset-md-6">
                                <span className="text-right view-all">
                                    <a
                                        href="./views/unauthorized.html"
                                        className="text-dark h6"
                                    >
                                        ver todos &gt;
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3 ml-2">
                        <Card />
                    </div>
                    <div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3">
                        <Card />
                    </div>
                    <div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3">
                        <Card />
                    </div>
                    <div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3">
                        <Card />
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
