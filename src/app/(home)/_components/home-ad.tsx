import SectionHeader from "@/components/section/section-heder";
import Button from "@/components/ui/button";
import { KIT_PRICE } from "@/lib/data/data";

const HomeAd = () => {
	return (
		<section>
			<SectionHeader
				title="Get Moonshot for $29."
				description="Fastest way to ship world-class AI UI."
			/>
			<div className="grid grid-cols-2 xs:flex xl:mt-[60px] md:mt-[45px] mt-12 gap-4 w-full justify-center px-7">
				<Button variant="primary">Buy the Kit - {KIT_PRICE}</Button>
				<Button variant="secondary">Get free kit</Button>
			</div>
		</section>
	);
};

export default HomeAd;
