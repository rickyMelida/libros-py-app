const Index = ({ name }: { name: string }) => {
	return (
		<div className="m-2">
			<div className="row">
				<div className="col-md-4 pb-3">
					<h2 id="destacados" className="section-title">{name}</h2>
				</div>
			</div>
		</div>
	)
}

export default Index;