"use client";
import SectionHeader from "@/components/section/section-heder";
import { SLIDE_ITEMS } from "@/contants/slides";
import { useDraggableSlider } from "@/hooks/use-draggable-slider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const HomeServices = () => {
	const {
		scrollContainerRef,
		isDragging,
		handleClick,
		handleMouseDown,
		handleMouseLeave,
		handleMouseMove,
		handleMouseUp,
		handleTouchEnd,
		handleTouchMove,
		handleTouchStart,
	} = useDraggableSlider();
	return (
		<section>
			<SectionHeader
				title="120 AI UI Cards. Infinite Possibilities."
				description="All components are labeled, auto-layout ready, and fully Figma-native for mobile."
			/>
			<div
				ref={scrollContainerRef}
				onMouseDown={handleMouseDown}
				onMouseLeave={handleMouseLeave}
				onMouseUp={handleMouseUp}
				onMouseMove={handleMouseMove}
				onClick={handleClick}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				style={{
					scrollSnapType: isDragging ? "none" : "x proximity",
				}}
				className={cn(
					" w-full xl:mt-[120px] md:mt-[90px] mt-20 mx-auto overflow-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none flex xl:gap-5 gap-[15px]",
					isDragging ? "cursor-grabbing" : "cursor-grab"
				)}>
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
