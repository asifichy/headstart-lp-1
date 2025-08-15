import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/footer";

const helveticaNeu = localFont({
	src: [
		{
			path: "./fonts/HelveticaNeueLight.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/HelveticaNeueMedium.woff2",
			weight: "500",
			style: "normal",
		},

		{
			path: "./fonts/HelveticaNeueBold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	preload: true,
});

export const metadata: Metadata = {
	title: "Headstart",
	description: "Design AI Like the Best in the World",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${helveticaNeu.className} antialiased`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
