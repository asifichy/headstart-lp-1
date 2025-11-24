"use client";

import Button from "@/components/ui/button";
import { KIT_PRICE } from "@/lib/data/data";
import { EntryPoint, EntryPointSize, EntryPointType } from "@thinkflagship/horizon-web-shorts";
import Image from "next/image";
import Link from "next/link";
import HSLogo from "./HS";

const HomeHero = () => {
	return (
		<section className="max-w-[1920px] w-full mx-auto xl:px-[100px] md:px-[75px] px-7 xl:mt-[60px] md:mt-[45px] mt-[60px]">
			<div className="text-center">
				<Link
					href="/"
					aria-label="Headstar"
					className="w-max inline-block mb-[80px] md:mb-0">
					<HSLogo />
				</Link>

				<div className="xl:mt-20 md:mt-[60px] mt-0">
					<div className="flex flex-col justify-center items-center">
						<Image
							src="/images/moon-short.svg"
							className="h-4 md:h-5 xl:h-7 w-auto "
							height={28}
							width={178}
							alt="Headstar"
						/>
						<h1 className="font-medium xl:text-[110px] xl:leading-[110px] md:text-[82px] md:leading-[82px] text-[64px] leading-[64px] xl:max-w-[1064px] md:max-w-[798px] max-w-[470px] tracking-[-0.02em] max-auto pt-4 md:pt-8 xl:pt-10">
							Design AI like the best in the world
						</h1>
					</div>

					<div className="md:flex md:justify-center md:items-center py-12 md:py-[33px] xl:py-11 xl-min:max-w-[888px] lg-min:max-w-[678px] md:max-w-[666px] w-full mx-auto">
						<EntryPoint
							id="#606159"
							skeletonType={EntryPointType.CIRCLE}
							skeletonSize={EntryPointSize.BOLD}
						/>
					</div>

					<p className="xl:max-w-[955px] md:max-w-[716px] xs:max-w-full max-w-[372px] xl:text-[28px] xl:leading-[1.4] text-xl tracking-[-0.4px] font-medium mx-auto">
						Moonshot is a mobile-first AI UI kit with 120 Figma-ready cards inspired by apps like ChatGPT, Copilot, Gemini, Grok, Anthropic, and more.
					</p>
				</div>
				<div className="grid grid-cols-2 xs:flex items-center justify-center xl:mt-[60px] md:mt-[45px] mt-12 xl:gap-5 sm:gap-4 xs:gap-[18px] gap-3 w-full">
					<Button variant="primary">Buy the Kit - {KIT_PRICE}</Button>
					<Button variant="secondary">Get free kit</Button>
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
