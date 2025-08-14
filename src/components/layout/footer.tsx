import {
	FOOTER_SECODARY_LINKS,
	MAIN_FOOTER_LINKS,
	SOCIAL_LINKS,
} from "@/contants/links";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="xl:pt-[106px] pt-20 xl:pb-20 pb-[60px] bg-footer-bg xl:px-[84px] md:px-[63px] px-7">
			<div className="flex md:items-center items-start justify-between flex-col sm:flex-row gap-x-4 gap-y-8">
				<Link href={"/"}>
					<Image
						src="/images/logo-with-name.svg"
						alt="Headstart"
						height={50}
						width={219}
						className="xl:h-[50px] h-[37px] w-auto"
					/>
				</Link>
				<ul className="flex items-center lg:gap-[71px] gap-12">
					{MAIN_FOOTER_LINKS.map((footerLink) => (
						<li key={footerLink.href}>
							<Link
								className={cn(
									"xl:text-lg text-sm text-main",
									"transition-colors duration-300 ease-in-out",
									"hover:text-blue-40"
								)}
								href={footerLink.href}>
								{footerLink.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="flex items-center justify-between xl:mt-[72px]  mt-14">
				<div className="flex flex-col gap-[19px]">
					<span className="text-sm">
						© {new Date().getFullYear()} Headstart.
					</span>
					<ul className="flex sm:hidden items-center flex-wrap gap-4 xl:gap-6">
						{SOCIAL_LINKS.map((footerLink) => (
							<li
								key={footerLink.href}
								className="transition-transform duration-300 ease-in-out hover:-translate-y-1">
								<Link
									target="_blank"
									href={footerLink.href}
									aria-label={footerLink.label + "left"}>
									<Image
										src={footerLink.icon}
										alt={footerLink.label}
										className="xl:size-6 md:size-[18px] size-8"
										height={32}
										width={32}
									/>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="flex items-center xl:gap-8 gap-6 h-max">
					<ul className="flex max-sm:flex-col items-center xl:gap-8 sm:gap-6 gap-[30px]">
						{FOOTER_SECODARY_LINKS.map((footerLink) => (
							<li key={footerLink.href}>
								<Link
									href={footerLink.href}
									className={cn(
										"xl:text-lg text-sm underline",
										"transition-colors duration-300 ease-in-out",
										"hover:text-blue-40"
									)}>
									{footerLink.label}
								</Link>
							</li>
						))}
					</ul>
					<ul className="sm:flex hidden items-center flex-wrap gap-4 xl:gap-6">
						{SOCIAL_LINKS.map((footerLink) => (
							<li
								key={footerLink.href}
								className="transition-transform duration-300 ease-in-out hover:-translate-y-1">
								<Link
									target="_blank"
									href={footerLink.href}
									aria-label={footerLink.label + "right"}>
									<Image
										src={footerLink.icon}
										alt={footerLink.label}
										className="xl:size-6 md:size-[18px] size-8"
										height={32}
										width={32}
									/>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
