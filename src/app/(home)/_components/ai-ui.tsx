"use client";

import SectionHeader from "@/components/section/section-heder";
import Image from "next/image";
import React, { useRef, useState } from "react";

const AiUi = () => {
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
		<section className="w-full">
			<SectionHeader
				title="AI UI, Done Right"
				description="Everything you need for a world-class AI-native experience."
			/>
			<div
				ref={scrollRef}
				onMouseDown={onMouseDown}
				onMouseLeave={onMouseLeave}
				onMouseUp={onMouseUp}
				onMouseMove={onMouseMove}
				className="flex sm:items-stretch max-sm:flex-col max-sm:px-7 xl:gap-[45px] md:gap-8 sm:gap-4 gap-[63px] w-full max-w-[1920px] mx-auto xl:mt-[120px] md:mt-[90px] mt-20 overflow-x-auto scrollbar-hide">
				<div className="xl:p-9 xl:pb-0 md:p-7 md:pb-0 px-4 pt-7 bg-gray-5 rounded-4xl pb-0 flex-1 sm:min-w-[374px] flex flex-col justify-between items-center xl:ml-[120px] md:ml-[90px] sm:ml-7">
					<p className="text-main/50 xl:text-[28px] text-[21px] font-medium leading-[1.2]">
						<span className="text-main ">Production-Grade:</span> Every pixel is
						aligned, polished, and ready to drop straight into production.
					</p>
					<Image
						src={"/images/features/1.png"}
						className="w-[75%] h-auto xl:mt-[100px] md:mt-[74px] sm:mt-[64px] mt-[72px]"
						width={1000}
						height={1000}
						alt=""
					/>
				</div>
				<div className="xl:p-9 xl:pb-0 md:p-7 md:pb-0 px-4 py-7 bg-gray-5 rounded-4xl flex-1 sm:min-w-[374px] flex flex-col justify-between items-center">
					<p className="text-main/50 xl:text-[28px] text-[21px] font-medium leading-[1.2]">
						<span className="text-main ">Versatile:</span> From chat to voice to
						widgets, every major AI experience in one kit
					</p>
					<Image
						src={"/images/features/2.png"}
						className="w-[52%] h-auto xl:mt-[63px] xl:mb-4 md:mt-[54px] mt-12 md:mb-2 mb-1"
						width={1000}
						height={1000}
						alt=""
					/>
				</div>
				<div className="xl:p-9 xl:pt-0  md:p-7 md:pt-0 px-4 pb-7 bg-gray-5 rounded-4xl flex-1 sm:min-w-[374px] flex flex-col justify-between items-center xl:mr-[120px] md:mr-[90px] sm:mr-7">
					<Image
						src={"/images/features/3.png"}
						className="w-[72%] h-auto xl:mb-[100px] md:mb-20 sm:mb-14 mb-[84px]"
						width={1000}
						height={1000}
						alt=""
					/>
					<p className="text-main/50 xl:text-[28px] text-[21px] font-medium leading-[1.2]">
						<span className="text-main ">Made by AI Product Designers:</span> We
						design AI products for a living. This is the kit we wish existed.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AiUi;
