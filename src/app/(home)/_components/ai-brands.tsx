"use client";
import SectionHeader from "@/components/section/section-heder";
import { AI_BRANDS } from "@/contants/slides";
import { useDraggableSlider } from "@/hooks/use-draggable-slider";
import { cn } from "@/lib/utils";
import Image from "next/image";

const AiBrands = () => {
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
				title="We studied the AI giants,"
				description="So you don’t have to."
			/>
			<div className="w-full overflow-x-auto overflow-y-visible xl:mt-[104px] md:mt-[74px] mt-16 -mb-4">
				<div
					ref={scrollContainerRef}
					className={cn(
						"w-full md:max-w-[1023] xl:max-w-[1364px] mx-auto overflow-x-auto overflow-y-visible py-4 scrollbar-hide select-none flex xl:gap-5 gap-[15px]",
						isDragging ? "cursor-grabbing" : "cursor-grab"
					)}
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
					}}>
					{AI_BRANDS.map((item) => (
						<div
							key={item.img}
							className={cn(
								"relative transition-transform duration-300 transform-origin-center xl:min-w-[260px] min-w-[195px] md:min-w-[180px] w-full flex-1 aspect-square bg-gray-5/10 xl:rounded-[40px] rounded-[30px]",
								// "xl:first:ml-[100px] md:first:ml-[75px] first:ml-7",
								// "xl:last:mr-[100px] md:last:mr-[75px] last:mr-7",
								// Only apply hover effects when not dragging
								!isDragging && "hover:scale-[1.02] hover:translate-y-1"
							)}
							style={{
								// Disable pointer events during drag to prevent interference
								pointerEvents: isDragging ? "none" : "auto",
							}}>
							<Image
								src={item.img}
								width={172}
								height={172}
								className={cn(
									"absolute left-1/2 !-translate-x-1/2 top-0 object-contain xl:h-[calc(100%-56px)] h-[calc(100%-48px)] xl:w-1/2 w-[45%] object-center select-none"
								)}
								alt={item.title}
								draggable={false} // Prevent image dragging
							/>
							<span className="font-medium xl:text-[22px] text-base absolute bottom-5 text-center left-1/2 !-translate-x-1/2 select-none">
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
