'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./index.module.css";
import { getMainBooksService } from "@/services/bookService";
import { useEffect, useState } from "react";
import Base64Image from "../ImageBase64/Index";
import { ApiResponse } from "@/models/response/ApiResponse";
import { IImage } from "@/models/interfaces/IImage";
import Loading from "../Loading/Index";

const Index = () => {
	const [loading, setLoading] = useState(true);
	const [mainBooks, setMainBooks] = useState<ApiResponse<IImage[]>>();

	const getMainImage = async () => {
		try {
			setLoading(true);
			const response = await getMainBooksService()
			setMainBooks(response);
		} catch (error) {
			setLoading(false);
			console.log("Error fetching main books:", error);
		}
	};

	useEffect(() => {
		getMainImage();
	}, []);

	useEffect(() => {
		if (mainBooks && mainBooks.data.length > 0)
			setLoading(false);

	}, [mainBooks]);

	return (
		<div className={styles["carousel-responsive-container"]}>
			{
				loading ? (
					<Loading size="md" /> 
				) :
					(<Swiper
						spaceBetween={20}
						slidesPerView={3}
						breakpoints={{
							0: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 3,
							},
						}}
					>
						{mainBooks?.data.map((img, index) => (
							<SwiperSlide key={index}>
								<Base64Image 
									base64Data={img.picture}
									height={400}
									alt={`Book ${index + 1}`}
								/>
							</SwiperSlide>
						))}
					</Swiper>)
			}
		</div>
	);
};

export default Index;
