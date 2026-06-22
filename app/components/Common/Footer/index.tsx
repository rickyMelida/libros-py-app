import Image from "next/image";
import facebookIcon from "~/public/img/facebook.svg";
import instagramIcon from "~/public/img/instagram.svg";
import twitterIcon from "~/public/img/twitter.png";

const Index = () => {
	return (
		<div className="container">
			<div className="col-12">
				<div className="row mt-4">
					<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
						<div className="col-md-4 d-flex align-items-center">
							<span className="text-muted">© {new Date().getFullYear()} Libros Libres PY</span>
						</div>
						<ul className="nav col-md-4 justify-content-end list-unstyled d-flex gap-3">
							<li>
								<a className="text-muted" href="#" title="Facebook">
									<Image src={facebookIcon} alt="" width="24" />
								</a>
							</li>
							<li>
								<a className="text-muted" href="#" title="Instagram">
									<Image src={instagramIcon} alt="" width="24" />
								</a>
							</li>
							<li>
								<a className="text-muted" href="#" title="Twitter">
									<Image src={twitterIcon} alt="" width="24" />
								</a>
							</li>
						</ul>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default Index;
