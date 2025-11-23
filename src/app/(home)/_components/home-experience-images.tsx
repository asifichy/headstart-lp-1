import { useEffect, useRef, useState } from "react";

import useWindowSize from "@/hooks/useWindowSize";
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
	const scrollableRef = useRef<HTMLDivElement>(null); // this will be the OVERFLOW element
	const { width } = useWindowSize();

	const [isOverflowing, setIsOverflowing] = useState(false);
	const [imagesLoaded, setImagesLoaded] = useState(0);
	const totalImages = 5;

	// Function to check if content is overflowing
	const checkOverflow = () => {
		if (scrollableRef.current) {
			const scrollable = scrollableRef.current;
			const isOverflow = scrollable.scrollWidth > scrollable.clientWidth;
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



	// Lenis initialization (unchanged)
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => 1 - Math.pow(1 - t, 3),
			smoothWheel: true,
		});

		lenis.on("scroll", ScrollTrigger.update);

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, [width]);

	// Center the horizontal scroll on mount
	useEffect(() => {
		const el = scrollableRef.current;
		if (!el) return;

		// scrollWidth = total content width
		// clientWidth = visible width
		const center = (el.scrollWidth - el.clientWidth) / 2;
		el.scrollLeft = center;
	}, [width]);

	// GSAP animations (unchanged)
	useGSAP(
		() => {
			gsap.to(caseRef1.current, {
				marginTop: 0,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					end: "top 10%",
					scrub: 1,
					scroller: document.body,
				},
			});

			gsap.to(caseRef2.current, {
				marginTop: 0,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					end: "top 10%",
					scrub: 1,
					scroller: document.body,
				},
			});
		},
		{ scope: sectionRef }
	);

	return (
		<div
			ref={sectionRef}
			className="relative w-full xl:mt-[120px] md:mt-[90px] mt-20 z-10"
		>
			<Image
				src={"/images/design-pro/bg.webp"}
				priority
				width={1540}
				height={464}
				className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-auto xl:h-[1480px] md:h-[1069px] sm:h-[1003px] h-[809px]"
				alt="bg"
			/>

			<div className="block relative w-full">
				<div ref={containerRef} className="w-full">
					{/* scrollable div NOW has the ref */}
					<div
						ref={scrollableRef}
						className={cn("overflow-x-auto scrollbar-hide", !isOverflowing && 'flex justify-center')}
					>
						{/* no justify-center here – let content be its own width */}
						<div className="inline-flex items-start h-auto xl:gap-[26px] md:gap-6 sm:gap-4 gap-2.5 px-7">
							<Image
								src="/images/design-pro/1.webp"
								width={301}
								height={652}
								onLoad={handleImageLoad}
								priority
								className="xl:min-w-[301px] xl:w-[301px] md:w-[225px] md:min-w-[225px] sm:w-[176px] sm:min-w-[176px] w-[106px] min-w-[106px] h-auto image-shadow"
								alt=""
							/>
							<Image
								src="/images/design-pro/2.webp"
								ref={caseRef1}
								width={301}
								height={652}
								onLoad={handleImageLoad}
								priority
								className="xl:min-w-[301px] xl:w-[301px] md:w-[225px] md:min-w-[225px] sm:w-[176px] sm:min-w-[176px] w-[106px] min-w-[106px] xl:mt-[120px] md:mt-[108px] sm:mt-[84px] mt-[51px] h-auto image-shadow"
								alt=""
							/>
							<Image
								src="/images/design-pro/3.webp"
								width={301}
								height={652}
								onLoad={handleImageLoad}
								priority
								className="xl:min-w-[301px] xl:w-[301px] md:w-[225px] md:min-w-[225px] sm:w-[176px] sm:min-w-[176px] w-[106px] min-w-[106px] h-auto image-shadow"
								alt=""
							/>
							<Image
								src="/images/design-pro/4.webp"
								width={301}
								height={652}
								onLoad={handleImageLoad}
								priority
								ref={caseRef2}
								className="xl:min-w-[301px] xl:w-[301px] md:w-[225px] md:min-w-[225px] sm:w-[176px] sm:min-w-[176px] w-[106px] min-w-[106px] xl:mt-[120px] md:mt-[108px] sm:mt-[84px] mt-[51px] h-auto image-shadow"
								alt=""
							/>
							<Image
								src="/images/design-pro/5.webp"
								width={301}
								height={652}
								onLoad={handleImageLoad}
								priority
								className="xl:min-w-[301px] xl:w-[301px] md:w-[225px] md:min-w-[225px] sm:w-[176px] sm:min-w-[176px] w-[106px] min-w-[106px] h-auto image-shadow"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeExperienceImages;
