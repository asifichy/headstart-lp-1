
const TopText = () => {

	return (
		<div className="w-full text-center overflow-hidden xl:text-lg font-bold md:text-sm text-xs xl:py-3 py-2 bg-main">
			{/* Desktop and tablet - normal text */}
			<div className="hidden sm:block text-nowrap">
				<span
					className="px-7 text-transparent bg-clip-text bg-cover bg-center tracking-[-0.24px]"
					style={{
						backgroundImage: "url('/images/gg.jpg')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat"
					}}>
					<Text />
				</span>
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

	const text = "Launch Promo: Get Headstart UI Kit for just $29 (use code: START20)";

	return (
		<span
			className="px-7 text-transparent bg-clip-text bg-cover bg-center tracking-[-0.24px]"
			style={{
				backgroundImage: "url('/images/mesh-gradient.webp')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat"
			}}>
			{text}
		</span>
	)
}
export default TopText;
