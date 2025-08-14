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
				className="flex items-stretch xl:gap-[45px] md:gap-8 gap-10 w-full max-w-[1920px] mx-auto">
				<div className="bg-gray-5 xl:rounded-4xl rounded-3xl overflow-hidden flex flex-col min-h-[100px] flex-1"></div>
				<div className="bg-gray-5 xl:rounded-4xl rounded-3xl overflow-hidden flex flex-col min-h-[100px]"></div>
				<div className="bg-gray-5 xl:rounded-4xl rounded-3xl overflow-hidden flex flex-col min-h-[100px]"></div>
			</div>
		</section>
	);
};

export default AiUi;
