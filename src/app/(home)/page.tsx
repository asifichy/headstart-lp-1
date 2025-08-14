import TopText from "@/components/layout/top-text";
import React from "react";
import HomeHero from "./_components/home-hero";

const HomePage = () => {
	return (
		<>
			<TopText />
			<main className="w-full flex flex-col gap-[160px]">
				<HomeHero />
				<section></section>
			</main>
		</>
	);
};

export default HomePage;
