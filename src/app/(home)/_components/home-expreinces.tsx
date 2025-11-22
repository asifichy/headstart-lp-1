"use client";
import SectionHeader from "@/components/section/section-heder";
import dynamic from "next/dynamic";

const HomeExperienceImages = dynamic(() => import("./home-experience-images"), {
	ssr: false,
});
const HomeExpereinces = () => {
	return (
		<section className="z-10 relative">
			<SectionHeader
				title="Create beautiful AI UI like this in minutes."
				description="Built from pre-made AI UI cards."
			/>
			<HomeExperienceImages />
		</section>
	);
};

export default HomeExpereinces;
