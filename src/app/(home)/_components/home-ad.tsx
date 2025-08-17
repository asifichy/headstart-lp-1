import SectionHeader from "@/components/section/section-heder";
import React from "react";

const HomeAd = () => {
	return (
		<section>
			<SectionHeader
				title="Fastest way to ship world-class AI UI."
				description="Drop in our AI UI cards. Customize. Ship. That’s it."
			/>
			<div className="flex flex-wrap xl:mt-[60px] md:mt-[45px] mt-12 gap-4 w-full justify-center px-7">
				<button className="xl:p-6 p-[18px] group bg-blue-40 cursor-pointer text-nowrap flex items-center justify-center text-white rounded-full font-bold xl:text-2xl md:text-lg text-base leading-[1.25] relative overflow-hidden">
					<div className="h-[160px] top-1/2 -translate-y-1/2 w-10 bg-[#ffffff48] blur-[10px] from-white/10 via-white/50 to-white/10 absolute -rotate-45 -left-[70px] group-hover:left-[150%] duration-1200  delay-50" />
					<span>Buy the Kit - $29</span>
				</button>
				<button className="xl:p-6 p-[18px] group bg-footer-bg cursor-pointer xl:w-[236.5px] md:w-[177.38px] w-[161.67px] flex items-center justify-center  rounded-full font-bold xl:text-2xl md:text-lg text-base leading-[1.25] relative overflow-hidden">
					<div className="h-[160px] top-1/2 -translate-y-1/2 w-10 bg-[#ffffff48] blur-[10px] from-white/10 via-white/50 to-white/10 absolute -rotate-45 -left-[70px] group-hover:left-[150%] duration-1200  delay-50" />

					<span>See the Kit</span>
				</button>
			</div>
		</section>
	);
};

export default HomeAd;
