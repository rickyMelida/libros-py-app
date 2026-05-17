import Card from "@/components/Common/Card";

const Index = ({ title, section }: { title: string, section: string }) => {
	return (
		<>
			<div className="container-fluid px-3 px-md-4">
				<div className="books-section row page-animate" id={section}>
					<div className="col-12 d-flex justify-content-between align-items-center mb-3">
						<h5 className="section-title mb-0" id={section}>{title}</h5>
						<a href="./views/unauthorized.html" className="view-all-link">Ver todos →</a>
					</div>
					<hr className="col-12 line-horizontal mb-3" />
					<div className="col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3">
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

export default Index;
