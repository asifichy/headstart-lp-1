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
		href: "https://headstart.lemonsqueezy.com/buy/31e66ad0-9c4e-4541-b553-d8781482affc",
		label: "Buy Kit",
		external: true,
	},
	{
		href: "https://headstart.lemonsqueezy.com/buy/26a00f6b-e3ca-418d-b1ee-e93f6e21c234",
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
