"use client";
import SectionHeader from "@/components/section/section-heder";
import { Marquee } from "@/components/ui/marquee";
import { SLIDE_ITEMS } from "@/contants/slides";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HomeServices = () => {
	return (
		<section>
			<SectionHeader
				title={
					<>
						120 AI <br className="sm:hidden" /> UI cards.
						<br className="sm:hidden" /> Fully production ready.
					</>
				}
				description="Labeled, auto-layout, Figma components."
			/>

			<div className="pt-header">
				<Marquee className="[--duration:30s] [--gap:12px] xl:[--gap:1rem]">
					{SLIDE_ITEMS.map((item, index) => (
						<Image
							src={item}
							key={item + "le"}
							width={430}
							height={546}
							className={cn(
								"xl:w-[430px] md:w-[322px] w-[322px] h-auto bg-gray-5/10 xl:rounded-4xl md:rounded-3xl rounded-[20px] py-[77px] xl:py-[104px] px-[60px] xl:px-[80px]",
							)}
							{...(index < 3
								? { priority: true, fetchPriority: "high" }
								: { loading: "lazy" })}
							alt=""
						/>
					))}
				</Marquee>
			</div>

		</section>
	);
};

export default HomeServices;
