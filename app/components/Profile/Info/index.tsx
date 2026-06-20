import { IProfileInfoProps } from "@/models/propsInterfaces/IProfileInfoProps";

const Index = ({ name, location }: IProfileInfoProps) => {
	return (
		<div className="row">
			<div className="col-md-6 offset-md-3 text-center">
				<h3>{name}</h3>
				<h6>{location}</h6>
			</div>
		</div>
	)
}

export default Index;