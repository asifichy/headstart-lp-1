import React from "react";

interface SectionHeaderProps {
	title: string;
	description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
	return (
		<div className="xl:px-[100px] md:px-[75px] px-7 text-center">
			<h2 className="xl:text-[80px] xl:tracking-[-1.6px] text-[60px] leading-[1.2] font-medium">
				{title}
			</h2>
			<p className="xl:mt-5 md:mt-4 mt-12 xl:text-[21px] xl:text-[1.2] text-xl leading-[1.4] xl:truncate-[-0.42px] truncate-[-0.4px] font-medium">
				{description}
			</p>
		</div>
	);
};

export default SectionHeader;
