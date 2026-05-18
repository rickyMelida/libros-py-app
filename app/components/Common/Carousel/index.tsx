'use client';

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Index = ({ images }: { images: StaticImageData[] }) => {
	return (
		<Swiper
			spaceBetween={20}
			slidesPerView={2}
		>
			{images.map((img, index) => (
				<SwiperSlide key={index}>
					<Image
						src={img}
						height={300}
						alt=""
						style={{ width: "100%" }}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Index;
