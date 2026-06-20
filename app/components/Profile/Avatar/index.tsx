import Image from "next/image";
import avatar from "~/public/img/avatar.svg";

const Index = () => {
	return (
		<div className="row mt-5 mb-3">
			<div className="col-md-6 offset-3">
				<div className="avatar">
					<Image
						src={avatar}
						width="80"
						loading="lazy"
						alt="Avatar"
					/>
				</div>
			</div>
		</div>
	)
}

export default Index;