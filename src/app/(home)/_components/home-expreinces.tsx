"use client";
import SectionHeader from "@/components/section/section-heder";
import dynamic from "next/dynamic";
import React from "react";

const HomeExperienceImages = dynamic(() => import("./home-experience-images"), {
	ssr: false,
});
const HomeExpereinces = () => {
	return (
		<section className="z-10 relative">
			<SectionHeader
				title="Design Pro AI Experiences Instantly"
				description="See how designers craft stunning AI experiences with our kit."
			/>
			<HomeExperienceImages />
		</section>
	);
};

export default HomeExpereinces;
