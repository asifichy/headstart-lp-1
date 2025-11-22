import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeaderProps {
	title: React.ReactNode;
	description: React.ReactNode;
	classNames?: string;
}

const SectionHeader = ({ title, description, classNames }: SectionHeaderProps) => {
	return (
		<div className={cn("xl:px-[100px] md:px-[75px] px-7 text-center", classNames)}>
			<h2 className="xl:text-[72px] xl:tracking-[-1.6px] md:text-[54px] md:leading-[1.2] text-[48px] leading-[1.1] font-normal">
				{title}
			</h2>
			<p className="xl:text-[72px] xl:tracking-[-1.6px] md:text-[54px] md:leading-[1.2] text-[48px] leading-[1.1] text-gray-5 font-normal">
				{description}
			</p>
		</div>
	);
};

export default SectionHeader;
