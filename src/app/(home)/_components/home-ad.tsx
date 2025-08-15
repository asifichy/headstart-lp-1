import SectionHeader from "@/components/section/section-heder";
import React from "react";

const HomeAd = () => {
	return (
		<section>
			<SectionHeader
				title="Fastest way to ship world-class AI UI."
				description="Drop in our AI UI cards. Customize. Ship. That’s it."
			/>
			<div className="flex flex-wrap xl:mt-[60px] mt-12 gap-4 w-full justify-center px-7">
				<button className="p-[18px] group bg-blue-40 cursor-pointer xl:w-[193.5px] w-[180px] flex items-center justify-center text-white rounded-full font-bold xl:text-xl text-base leading-[1.25] relative overflow-hidden">
					<div className="h-[120px] top-1/2 -translate-y-1/2 w-14 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute blur-sm -rotate-45 -left-16 group-hover:left-[150%] duration-500 delay-200" />
					<span>Buy the Kit - $29</span>
				</button>
				<button className="p-[18px] group bg-footer-bg cursor-pointer xl:w-[193.5px] w-[176px] flex items-center justify-center  rounded-full font-bold xl:text-xl text-base leading-[1.25] relative overflow-hidden">
					<div className="h-[120px] top-1/2 -translate-y-1/2 w-14 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute blur-sm -rotate-45 -left-16 group-hover:left-[150%] duration-500 delay-200" />
					<span>See the Kit</span>
				</button>
			</div>
		</section>
	);
};

export default HomeAd;
