import TopText from "@/components/layout/top-text";
import React from "react";
import HomeHero from "./_components/home-hero";
import AiBrands from "./_components/ai-brands";
import AiUi from "./_components/ai-ui";
import HomeAd from "./_components/home-ad";
import HomeServices from "./_components/home-services";

const HomePage = () => {
	return (
		<>
			<TopText />
			<main className="w-full flex flex-col xl:gap-[200px] gap-[160px]">
				<HomeHero />
				<AiBrands />
				{/* <AiUi /> */}
				<HomeServices />
				<HomeAd />
				<section></section>
			</main>
		</>
	);
};

export default HomePage;
