"use client";

import HSWhite from "@/app/(home)/_components/HS-white";
import {
	FOOTER_SECODARY_LINKS,
	MAIN_FOOTER_LINKS,
	SOCIAL_LINKS
} from "@/contants/links";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

	return (
		<footer className="xl:px-[100px] md:px-[75px] px-7 pb-[60px] md:pb-[45px] xl:pb-[60px]">
			<div className="xl:px-[100px] md:px-[75px] px-7 xl:pt-[106px] xl:pb-[80px] md:pt-[80px] md:pb-[60px] pt-[60] pb-[60] rounded-[24px] md:rounded-[30px] xl:rounded-[40px] bg-main ">
				<div className="flex md:items-center items-start justify-between flex-col sm:flex-row gap-x-4 gap-y-8">
					<Link href={"/"} className="-ml-2">
						<HSWhite />
					</Link>
					<ul className="flex items-center lg:gap-[71px] gap-12">
						{MAIN_FOOTER_LINKS.map((footerLink) => {
							return (
								<li key={footerLink.label}>
									<Link
										target={footerLink.external ? "_blank" : "_self"}
										className={cn(
											"xl:text-lg text-sm text-gray-5",
											"transition-colors duration-300 ease-in-out",
											"hover:text-white"
										)}
										href={footerLink.href}>
										{footerLink.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="flex items-center justify-between xl:mt-[72px] mt-14">
					<div className="flex flex-col gap-[19px]">
						<span className="text-sm xl:text-lg text-gray-5">
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
											"text-gray-5 xl:text-lg text-sm underline hover:text-white",
											"transition-colors duration-300 ease-in-out",
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
										aria-label={footerLink.label + "right"}
									>
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
			</div>
		</footer>
	);
};

export default Footer;
