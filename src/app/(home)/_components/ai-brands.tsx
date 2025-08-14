"use client";
import SectionHeader from "@/components/section/section-heder";
import { AI_BRANDS } from "@/contants/slides";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useRef, useState } from "react";

const AiBrands = () => {
	const scrollRef = useRef<HTMLDivElement | null>(null);
	const [isDown, setIsDown] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!scrollRef.current) return;
		setIsDown(true);
		setStartX(e.pageX - scrollRef.current.offsetLeft);
		setScrollLeft(scrollRef.current.scrollLeft);
	};

	const onMouseLeave = () => setIsDown(false);
	const onMouseUp = () => setIsDown(false);

	const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!isDown || !scrollRef.current) return;
		e.preventDefault();
		const x = e.pageX - scrollRef.current.offsetLeft;
		const walk = (x - startX) * 1; // scroll speed multiplier
		scrollRef.current.scrollLeft = scrollLeft - walk;
	};
	return (
		<section>
			<SectionHeader
				title="We Studied the Giants, So You Don’t Have To"
				description="Every card is modeled after real, shipped AI products - distilled into a ready-to-use, mobile-perfect Figma kit."
			/>
			<div className="w-full overflow-x-auto overflow-y-visible xl-mt-[104px] md:mt-[74px] mt-16">
				<div
					ref={scrollRef}
					onMouseDown={onMouseDown}
					onMouseLeave={onMouseLeave}
					onMouseUp={onMouseUp}
					onMouseMove={onMouseMove}
					className=" w-full max-w-[1920px] mx-auto overflow-x-auto overflow-y-visible py-4 scrollbar-hide cursor-grab active:cursor-grabbing select-none flex xl:gap-5 gap-[15px]">
					{AI_BRANDS.map((item) => (
						<div
							key={item.img}
							className={cn(
								"relative hover:scale-[1.02] transition-transform duration-300 transform-origin-center hover:translate-y-1 x:minw-w-[320px] min-w-[244px] w-full flex-1 aspect-square bg-gray-5 xl:rounded-[40px] rounded-[30px]",
								"xl:first:ml-[100px] md:first:ml-[75px] first:ml-7",
								"xl:last:mr-[100px] md:last:mr-[75px] last:mr-7"
							)}>
							<Image
								src={item.img}
								width={172}
								height={172}
								className={cn(
									"absolute left-1/2 -translate-x-1/2 xl:top-20 top-[60px]  xl:w-[130px] aspect-square w-[97px]"
								)}
								alt={item.title}
							/>
							<span className="xl:leading-[96px] leading-[72px] font-medium xl:text-[28px] text-[21px] absolute bottom-0 text-center left-1/2 -translate-x-1/2">
								{item.title}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AiBrands;
