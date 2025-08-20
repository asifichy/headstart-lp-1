import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HomeExperienceImages = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const caseRef1 = useRef<HTMLImageElement>(null);
	const caseRef2 = useRef<HTMLImageElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollableRef = useRef<HTMLDivElement>(null);
	const [isOverflowing, setIsOverflowing] = useState(false);
	const [imagesLoaded, setImagesLoaded] = useState(0);
	const totalImages = 5;

	// Function to check if content is overflowing
	const checkOverflow = () => {
		if (scrollableRef.current) {
			const scrollable = scrollableRef.current;
			const isOverflow = scrollable.scrollWidth > scrollable.clientWidth;
			console.log('Overflow check:', {
				scrollWidth: scrollable.scrollWidth,
				clientWidth: scrollable.clientWidth,
				isOverflow
			});
			setIsOverflowing(isOverflow);
		}
	};

	// Handle image load
	const handleImageLoad = () => {
		setImagesLoaded(prev => {
			const newCount = prev + 1;
			if (newCount === totalImages) {
				// All images loaded, check overflow after a small delay
				setTimeout(checkOverflow, 100);
			}
			return newCount;
		});
	};

	// Check overflow on mount and resize
	useEffect(() => {
		// Initial check after a delay to ensure DOM is ready
		const initialCheck = setTimeout(checkOverflow, 500);

		const handleResize = () => {
			checkOverflow();
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
			clearTimeout(initialCheck);
		};
	}, []);

	// Check overflow when images are loaded
	useEffect(() => {
		if (imagesLoaded === totalImages) {
			checkOverflow();
		}
	}, [imagesLoaded]);

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
			className="relative w-full xl:mt-[120px] md:mt-[90px] mt-20 z-10">
			<Image
				src={"/images/design-pro/bg.png"}
				priority
				width={1540}
				height={587}
				className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-auto xl:h-[1080px] md:h-[1069px] sm:h-[1003px] h-[809px]"
				alt="bg"
			/>
			<div className="xl:h-[797px] md:h-[598px] sm:h-[467px] h-[281px] block relative w-full">
				<div
					ref={containerRef}
					className={`absolute top-0 h-full bottom-0 left-1/2 -translate-x-1/2 w-full`}
				>
					<div
						ref={scrollableRef}
						className={cn("flex items-start h-auto xl:gap-[26px] md:gap-6 sm:gap-4 gap-2.5 px-7 overflow-x-auto scrollbar-hide", isOverflowing ? 'justify-start' : 'justify-center')}>
						<Image
							src="/images/design-pro/1.png"
							width={301}
							height={652}
							priority
							onLoad={handleImageLoad}
							className="xl:min-w-[301px] xl:w-[301px] md:w-[225px] md:min-w-[225px] sm:w-[176px] sm:min-w-[176px] w-[150px] min-w-[150px] h-auto image-shadow"
							alt=""
						/>
						<Image
							src="/images/design-pro/2.png"
							ref={caseRef1}
							width={301}
							height={652}
							priority
							onLoad={handleImageLoad}
							className="xl:min-w-[301px] xl:w-[301px] md:w-[225px] md:min-w-[225px] sm:w-[176px] sm:min-w-[176px] w-[150px] min-w-[150px]  xl:mt-[120px] md:mt-[108px] sm:mt-[84px] mt-[51px] h-auto image-shadow"
							alt=""
						/>
						<Image
							src="/images/design-pro/3.png"
							width={301}
							height={652}
							priority
							onLoad={handleImageLoad}
							className="xl:min-w-[301px] xl:w-[301px] md:w-[225px] md:min-w-[225px] sm:w-[176px] sm:min-w-[176px] w-[150px] min-w-[150px]  h-auto image-shadow"
							alt=""
						/>
						<Image
							src="/images/design-pro/4.png"
							width={301}
							height={652}
							priority
							ref={caseRef2}
							onLoad={handleImageLoad}
							className="xl:min-w-[301px] xl:w-[301px] md:w-[225px] md:min-w-[225px] sm:w-[176px] sm:min-w-[176px] w-[150px] min-w-[150px]  xl:mt-[120px] md:mt-[108px] sm:mt-[84px] mt-[51px] h-auto image-shadow"
							alt=""
						/>
						<Image
							src="/images/design-pro/5.png"
							width={301}
							height={652}
							priority
							onLoad={handleImageLoad}
							className="xl:min-w-[301px] xl:w-[301px] md:w-[225px] md:min-w-[225px] sm:w-[176px] sm:min-w-[176px] w-[150px] min-w-[150px]  h-auto image-shadow"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeExperienceImages;
