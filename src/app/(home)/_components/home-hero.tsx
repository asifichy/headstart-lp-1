"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";

const HomeHeroSlider = dynamic(() => import("./home-hero-slider"), {
	ssr: false,
});

const HomeHero = () => {
	return (
		<section className="max-w-[1920px] w-full mx-auto xl:px-[100px] md:px-[75px] px-7 xl:mt-[140px] md:mt-[115px] mt-7">
			<div className="flex justify-between items-center max-lg:flex-col xl:gap-20 md:gap-14 gap-20">
				<div className="flex-1 max-lg:order-2">
					<Link
						href="/"
						aria-label="Headstar">
						<Image
							src="/images/logo-with-name.svg"
							className="h-[42px] w-auto max-lg:hidden"
							height={42}
							width={184}
							alt="Headstar"
						/>
					</Link>
					<h1 className="font-medium xl:text-[100px] md:leading-[normal] md:text-[75px] text-[64px] leading-[68px] xl:max-w-[844px] md:max-w-[603px] xl:mt-20 md:mt-[60px] mt-0 xl:tracking-[-2px] md:tracking-[-1.5px] tracking-[-1.28px]">
						Design AI Like the Best in the World
					</h1>
					<p className="xl:max-w-[844px] md:max-w-[603px] xl:mt-[60px] mt-12 xl:text-[28px] xl:leading-[1.4] text-xl tracking-[-0.4px] font-medium">
						120 premium AI UI cards inspired by ChatGPT, Copilot, Gemini & Grok
						- production-ready, mobile-first, and Figma-native.
					</p>
					<div className="flex flex-wrap xl:mt-[60px] mt-12 gap-4">
						<button className="p-[18px] group bg-blue-40 cursor-pointer xl:w-[193.5px] w-[180px] flex items-center justify-center text-white rounded-full font-bold xl:text-xl text-base leading-[1.25] relative overflow-hidden">
							<div className="h-[120px] top-1/2 -translate-y-1/2 w-14 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute blur-sm -rotate-45 -left-16 group-hover:left-[150%] duration-500 delay-200" />
							<span>Buy the Kit - $29</span>
						</button>
						<button className="p-[18px] group bg-footer-bg cursor-pointer xl:w-[193.5px] w-[176px] flex items-center justify-center  rounded-full font-bold xl:text-xl text-base leading-[1.25] relative overflow-hidden">
							<div className="h-[120px] top-1/2 -translate-y-1/2 w-14 bg-gradient-to-r from-white/10 via-white/50 to-white/10 absolute blur-sm -rotate-45 -left-16 group-hover:left-[150%] duration-500 delay-200" />
							<span>See the Kit</span>
						</button>
					</div>
				</div>
				<HomeHeroSlider />
			</div>
		</section>
	);
};

export default HomeHero;
