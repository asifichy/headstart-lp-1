"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { SLIDE_ITEMS } from "@/contants/slides";
import Link from "next/link";

const HomeHeroSlider = () => {
	return (
		<div className="max-lg:order-1 max-lg:w-full">
			<Link
				href="/"
				className="mb-[60px] inline-block lg:hidden w-max"
				aria-label="Headstar">
				<Image
					src="/images/logo-with-name.svg"
					className="h-[42px] w-auto"
					height={42}
					width={184}
					alt="Headstar"
				/>
			</Link>
			<Swiper
				modules={[Autoplay]}
				autoplay={{ delay: 3000 }}
				loop={true}
				className="xl:max-w-[537px] md:max-w-[402px] max-w-[374px] rounded-[40px]"
				style={{ boxShadow: "0 4px 20px 12px rgba(52, 138, 225, 0.05)" }}>
				{SLIDE_ITEMS.map((item, index) => (
					<SwiperSlide key={item}>
						<div className="bg-white w-full h-auto">
							<Image
								src={item}
								alt="Headstar"
								width={537}
								height={682}
								className="h-full w-auto"
								{
									...(index === 0
										? { priority: true, fetchPriority: "high" } // ✅ For LCP image
										: { loading: "lazy" }) // ✅ For all other images
								}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HomeHeroSlider;
