import Image from 'next/image';

const TopText = () => {

	return (
		<div className="w-full text-center overflow-hidden xl:text-lg font-bold md:text-sm text-xs xl:py-3 py-2 bg-main">
			{/* Desktop and tablet - normal text */}
			<div className="hidden sm:block text-nowrap">
				<Text />
			</div>

			{/* Mobile - marquee */}
			<div className="sm:hidden relative w-full">
				<div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite]">
					{
						Array.from({ length: 2 }).map((_, index) => (
							<span
								key={index}
								className="px-7 inline-block"
								style={{ letterSpacing: "-0.24px" }}>
								<Text />
							</span>
						))
					}
				</div>
			</div>
		</div>
	);
};


const Text = () => {
	const text = "Launch Promo: Get Headstart UI Kit for just $29 (use code: START20)";

	return (
		<>
			{/* Preload image with Next.js Image for optimization */}
			<div className="hidden">
				<Image
					src="/images/mesh-gradient.webp"
					alt=""
					width={1}
					height={1}
					priority
				/>
			</div>
			{/* Text with background image - server-side rendered */}
			<span
				className="px-7 text-transparent bg-clip-text bg-cover bg-right bg-no-repeat tracking-[-0.24px]"
				style={{
					backgroundImage: "url('/images/mesh-gradient.webp')"
				}}>
				{text}
			</span>
		</>
	)
}
export default TopText;
