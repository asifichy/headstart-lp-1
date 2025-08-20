"use client";

import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HomeHeroSlider from "./home-hero-slider";

const HomeHero = () => {
	return (
		<section className="max-w-[1920px] w-full mx-auto xl:px-[100px] md:px-[75px] px-7 xl:mt-[140px] md:mt-[105px] mt-7">
			<div className="flex justify-between max-lg:flex-col xl:gap-[230px] lg:gap-[150px] gap-[48px]">
				<div className="flex-1">
					<Link
						href="/"
						aria-label="Headstar"
						className="w-max inline-block mb-[80px] md:mb-0">
						<Image
							src="/images/logo-with-name.svg"
							className="h-[32px] xl:h-[42px] w-[138px] xl:w-[184px] "
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

					<div className="hidden lg:block">
						<ActionButton />
					</div>
				</div>

				<div className="max-lg:w-full flex flex-col items-center sm:items-start lg:items-center">
					<HomeHeroSlider />
					<div className="lg:hidden flex justify-center w-full xs:w-auto">
						<ActionButton />
					</div>
				</div>

			</div>
		</section>
	);
};

export default HomeHero;


const ActionButton = () => {
	return (
		<div className="grid grid-cols-2 xs:flex xl:mt-[60px] md:mt-[45px] mt-12 xl:gap-5 sm:gap-4 xs:gap-[18px] gap-3 w-full">
			<Button variant="primary">Buy the Kit - $29</Button>
			<Button variant="secondary">See the Kit</Button>
		</div>
	);
};