"use client";
import SectionHeader from "@/components/section/section-heder";
import { SLIDE_ITEMS } from "@/contants/slides";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useRef, useState } from "react";

const HomeServices = () => {
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
				title="120 AI UI Cards. Infinite Possibilities."
				description="All components are labeled, auto-layout ready, and fully Figma-native for mobile."
			/>
			<div
				ref={scrollRef}
				onMouseDown={onMouseDown}
				onMouseLeave={onMouseLeave}
				onMouseUp={onMouseUp}
				onMouseMove={onMouseMove}
				className=" w-full xl:mt-[120px] md:mt-[90px] mt-20 mx-auto overflow-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none flex xl:gap-5 gap-[15px]">
				{SLIDE_ITEMS.map((item, index) => (
					<Image
						src={item}
						key={item + "le"}
						width={537}
						height={682}
						className={cn(
							"xl:w-[537px] md:w-[402px] w-[321px] h-auto bg-gray-5 xl:rounded-4xl md:rounded-3xl rounded-[20px]",
							"xl:first:ml-[100px] md:first:ml-[75px] first:ml-7",
							"xl:last:mr-[100px] md:last:mr-[75px] last:mr-7"
						)}
						{...(index < 3
							? { priority: true, fetchPriority: "high" }
							: { loading: "lazy" })}
						alt=""
					/>
				))}
			</div>
		</section>
	);
};

export default HomeServices;
