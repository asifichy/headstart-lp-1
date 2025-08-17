import React from "react";

const TopText = () => {
	return (
		<div className="w-full text-center overflow-hidden xl:text-lg font-bold md:text-sm text-xs xl:py-3 py-2 bg-gray-5">
			{/* Desktop and tablet - normal text */}
			<div className="hidden sm:block text-nowrap">
				<span
					className="px-7"
					style={{ letterSpacing: "-0.24px" }}>
					Headstart Premium AI UI Kit — 120 production-ready mobile AI UI cards,
					yours for just $29. Get it now.
				</span>
			</div>

			{/* Mobile - marquee */}
			<div className="sm:hidden relative w-full">
				<div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite]">
					<span
						className="px-7 inline-block"
						style={{ letterSpacing: "-0.24px" }}>
						Headstart Premium AI UI Kit — 120 production-ready mobile AI UI
						cards, yours for just $29. Get it now.
					</span>
					<span
						className="px-7 inline-block"
						style={{ letterSpacing: "-0.24px" }}>
						Headstart Premium AI UI Kit — 120 production-ready mobile AI UI
						cards, yours for just $29. Get it now.
					</span>
				</div>
			</div>
		</div>
	);
};
export default TopText;
