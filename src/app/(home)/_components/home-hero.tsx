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
		<section className="max-w-[1920px] w-full mx-auto xl:px-[100px] md:px-[75px] px-7 xl:mt-[140px] md:mt-[105px] mt-7">
			<div className="flex justify-between max-lg:flex-col xl:gap-[120px] lg:gap-[100px] gap-20">
				<div className="flex-1 max-lg:order-2">
					<Link
						href="/"
						aria-label="Headstar"
						className="w-max inline-block">
						<Image
							src="/images/logo-with-name.svg"
							className="h-[42px] w-[184px] max-lg:hidden"
							height={42}
							width={184}
							alt="Headstar"
						/>
					</Link>
					<h1 className="font-medium xl:text-[100px] md:leading-[normal] md:text-[75px] text-[64px] leading-[68px] xl:max-w-[804px] md:max-w-[603px] max-w-[570px] xl:mt-20 md:mt-[60px] mt-0 xl:tracking-[-2px] md:tracking-[-1.5px] tracking-[-1.28px]">
						Design AI Like the Best in the World
					</h1>
					<p className="xl:max-w-[844px] md:max-w-[603px] xs:max-w-full max-w-[372px] xl:mt-[60px] md:mt-[45px] mt-12 xl:text-[28px] xl:leading-[1.4] text-xl tracking-[-0.4px] font-medium">
						120 premium AI UI cards inspired by ChatGPT, Copilot, Gemini & Grok
						- production-ready, mobile-first, and Figma-native.
					</p>
					<div className="flex flex-wrap xl:mt-[60px] md:mt-[45px] mt-12 xl:gap-5 sm:gap-4 gap-[18px]">
						<button className="xl:p-6 p-[18px] group bg-blue-40 cursor-pointer xl:w-[258px] md:w-[193.5px] flex items-center justify-center text-white rounded-full font-bold xl:text-2xl md:text-lg text-base leading-[1.25] relative overflow-hidden">
							<div className="h-[160px] top-1/2 -translate-y-1/2 w-10 bg-[#ffffff48] blur-[10px] from-white/10 via-white/50 to-white/10 absolute -rotate-45 -left-[70px] group-hover:left-[150%] duration-1200  delay-50" />
							<span>Buy the Kit - $29</span>
						</button>
						<button className="xl:p-6 p-[18px] group bg-footer-bg cursor-pointer xl:w-[258px] md:w-[193.5px] w-[161.67px] flex items-center justify-center  rounded-full font-bold xl:text-2xl md:text-lg text-base leading-[1.25] relative overflow-hidden">
							<div className="h-[160px] top-1/2 -translate-y-1/2 w-10 bg-[#ffffff48] blur-[10px] from-white/10 via-white/50 to-white/10 absolute -rotate-45 -left-[70px] group-hover:left-[150%] duration-1200  delay-50" />

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
