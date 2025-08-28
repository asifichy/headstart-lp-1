import SectionHeader from "@/components/section/section-heder";
import Button from "@/components/ui/button";

const HomeAd = () => {
	return (
		<section>
			<SectionHeader
				title="Fastest way to ship world-class AI UI."
				description="Drop in our AI UI cards. Customize. Ship. That’s it."
			/>
			<div className="grid grid-cols-2 xs:flex xl:mt-[60px] md:mt-[45px] mt-12 gap-4 w-full justify-center px-7">
				<Button variant="primary">Buy the Kit - $49</Button>
				<Button variant="secondary">See the Kit</Button>
			</div>
		</section>
	);
};

export default HomeAd;
