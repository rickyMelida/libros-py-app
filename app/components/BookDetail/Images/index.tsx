import Loading from "@/components/Common/Loading/Index";
import { BookDetailsProp } from "@/models/propsInterfaces/BookDetailsProp";
import { BookImageDetailProp } from "@/models/propsInterfaces/BookImageDetailProp";
import { convertBase64 } from "@/utils/util";
import { useEffect, useState } from "react";
import Image from "next/image";

const Index = ({ loading, bookDetail }: BookDetailsProp) => {
	const [bookToShow, setBookToShow] = useState<BookImageDetailProp>({ id: null, picture: null });

	useEffect(() => {
		if (bookDetail != null) {
			setBookToShow({
				id: null,
				picture: convertBase64(bookDetail.images.find(img => img.isPrincipal)?.picture || "")
			});
		}
	}, [loading]);
	
	const changeImageToShow = (id: number, image: string) => {
		setBookToShow((prev: any) => ({
			...prev,
			id,
			picture: convertBase64(image),
		}));
	}

	if (loading && bookDetail == null)
		return <Loading />

	return (
		<>
			<div className="gallery-main">
				<span className="badge badge-tag" style={{ background: "#f5a623" }}>DESTACADO</span>
				<Image
					src={bookToShow.picture || "/placeholder.png"}
					id="mainImage"
					alt=""
					height="500"
					width="350"
				/>

			</div>
			<div className="gallery-thumbs">
				{
					bookDetail?.images.map((img, index) => (
						<Image
							src={convertBase64(img.picture)}
							key={index}
							alt=""
							className={
								(bookToShow.id == null && img.isPrincipal == true) || bookToShow.id == index
									? "active"
									: ""}
							width="90"
							height="130"
							onClick={() => changeImageToShow(index, img.picture)}
						/>
					))
				}
			</div>
		</>
	)
}

export default Index;