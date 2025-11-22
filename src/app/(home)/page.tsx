import AiBrands from "./_components/ai-brands";
import AiUi from "./_components/ai-ui";
import Contact from "./_components/Contact";
import HomeAd from "./_components/home-ad";
import HomeExpereinces from "./_components/home-expreinces";
import HomeHero from "./_components/home-hero";
import HomeServices from "./_components/home-services";

const HomePage = () => {
	return (
		<>
			{/* <TopText /> */}
			<main className="w-full flex flex-col xl:gap-[200px] md:gap-[150px] sm:gap-[140px] gap-[160px]">
				<HomeHero />
				<HomeExpereinces />
				<AiBrands />
				<HomeServices />
				<AiUi />
				<HomeAd />
				<Contact />
			</main>
		</>
	);
};

export default HomePage;
