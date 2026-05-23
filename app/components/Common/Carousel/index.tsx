'use client';

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./index.module.css";

const Index = ({ images }: { images: StaticImageData[] }) => {
       return (
	       <div className={styles["carousel-responsive-container"]}>
			   <Swiper
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
			       {images.map((img, index) => (
				       <SwiperSlide key={index}>
					       <Image
						       src={img}
						       height={300}
						       alt=""
						       className={styles["swiper-image"]}
					       />
				       </SwiperSlide>
			       ))}
		       </Swiper>
	       </div>
       );
};

export default Index;
