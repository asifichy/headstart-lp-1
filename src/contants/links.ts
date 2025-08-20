export type FooterLink = {
	href: string;
	label: string;
	external?: boolean;
};

export const MAIN_FOOTER_LINKS: FooterLink[] = [
	{
		href: "/",
		label: "Home",
		external: false,
	},
	{
		href: "/buy-kit",
		label: "Buy Kit",
		external: false,
	},
	{
		href: "https://www.figma.com/design/UqJoZJUp7FZH6BcAPvMyoA/Headstart-AI-Master-Kit--Preview-?node-id=0-1&p=f&t=fM5FFgW6HjpUmfEf-0",
		label: "Preview Kit",
		external: true,
	},
];

export const FOOTER_SECODARY_LINKS = [
	{
		href: "/privacy-policy",
		label: "Privacy Policy",
	},
	{
		href: "/terms",
		label: "Terms of Service",
	},
];

export const SOCIAL_LINKS = [
	{
		label: "Instagram",
		icon: "/images/socials/instagram.svg",
		href: " https://www.instagram.com/use_headstart",
	},
	{
		label: "Behance",
		icon: "/images/socials/behance.svg",
		href: "https://www.behance.net/headstartux",
	},
	{
		label: "Pinterest",
		icon: "/images/socials/pinterest.svg",
		href: "https://in.pinterest.com/headstartux/",
	},
	{
		label: "Dribbble",
		icon: "/images/socials/dribbble.svg",
		href: "https://dribbble.com/headstart",
	},
];
