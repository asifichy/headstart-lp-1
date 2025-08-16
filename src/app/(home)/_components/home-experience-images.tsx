import React, { useRef, useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HomeExperienceImages = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const caseRef1 = useRef<HTMLImageElement>(null);
	const caseRef2 = useRef<HTMLImageElement>(null);

	// Lenis initialization
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => 1 - Math.pow(1 - t, 3),
			smoothWheel: true,
		});

		lenis.on("scroll", ScrollTrigger.update);

		// Make ScrollTrigger use Lenis's scroll

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	// GSAP animations
	useGSAP(
		() => {
			gsap.to(caseRef1.current, {
				marginTop: 0,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					end: "top 10%",
					scrub: 1,
					scroller: document.body, // use Lenis scroller
				},
			});

			gsap.to(caseRef2.current, {
				marginTop: 0,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					end: "top 10%",
					scrub: 1,
					scroller: document.body, // use Lenis scroller
				},
			});
		},
		{ scope: sectionRef }
	);

	return (
		<div
			ref={sectionRef}
			className="relative w-full  xl:mt-[120px] md:mt-[90px] mt-20 overflow-hidden xl:mb-[-120px] md:mb-[-108px] sm:mb-[-84px] mb-[-51px]">
			<div className="xl:h-[797px] md:h-[598px] sm:h-[467px] h-[281px] block relative w-full"></div>
			<Image
				src={"/images/design-pro/bg.png"}
				priority
				width={1540}
				height={587}
				className="absolute left-1/2 -translate-x-1/2 xl:top-[93px] md:top-[67.5px] xl:w-[1540px] xl:h-[587px] md:w-[1155px] md:h-[440.25px]"
				alt="bg"
			/>
			<div className="flex bg-transparent items-start justify-center absolute top-0 h-full bottom-0 left-1/2 -translate-x-1/2 xl:gap-[26px] md:gap-6 sm:gap-4 gap-2.5 w-full px-7">
				<Image
					src="/images/design-pro/1.png"
					width={301}
					height={652}
					priority
					className="xl:min-w-[301px] xl:w-[301px] md:w-[225px] md:min-w-[225px] sm:w-[176px] sm:min-w-[176px] w-[106px] min-w-[106px] h-auto"
					alt=""
				/>
				<Image
					src="/images/design-pro/2.png"
					ref={caseRef1}
					width={301}
					height={652}
					priority
					className="xl:min-w-[301px] xl:w-[301px] md:w-[225px] md:min-w-[225px] sm:w-[176px] sm:min-w-[176px] w-[106px] min-w-[106px]  xl:mt-[120px] md:mt-[108px] sm:mt-[84px] mt-[51px] h-auto"
					alt=""
				/>
				<Image
					src="/images/design-pro/3.png"
					width={301}
					height={652}
					priority
					className="xl:min-w-[301px] xl:w-[301px] md:w-[225px] md:min-w-[225px] sm:w-[176px] sm:min-w-[176px] w-[106px] min-w-[106px]  h-auto"
					alt=""
				/>
				<Image
					src="/images/design-pro/4.png"
					width={301}
					height={652}
					priority
					ref={caseRef2}
					className="xl:min-w-[301px] xl:w-[301px] md:w-[225px] md:min-w-[225px] sm:w-[176px] sm:min-w-[176px] w-[106px] min-w-[106px]  xl:mt-[120px] md:mt-[108px] sm:mt-[84px] mt-[51px] h-auto"
					alt=""
				/>
				<Image
					src="/images/design-pro/5.png"
					width={301}
					height={652}
					priority
					className="xl:min-w-[301px] xl:w-[301px] md:w-[225px] md:min-w-[225px] sm:w-[176px] sm:min-w-[176px] w-[106px] min-w-[106px]  h-auto"
					alt=""
				/>
			</div>
		</div>
	);
};

export default HomeExperienceImages;
