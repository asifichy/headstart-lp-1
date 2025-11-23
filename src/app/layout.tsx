import Footer from "@/components/layout/footer";
// import "@thinkflagship/horizon-web-shorts/styles.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const roobert = localFont({
	src: [
		{
			path: "../../public/font/roobert/RoobertLight.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/font/roobert/RoobertRegular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/font/roobert/RoobertMedium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/font/roobert/RoobertSemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/font/roobert/RoobertBold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/font/roobert/RoobertHeavy.ttf",
			weight: "800",
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
			<body className={`${roobert.className} antialiased`}>

				{/* <FlagshipProvider>{children}</FlagshipProvider> */}
				{children}

				<Footer />

				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-46QKB96LKK"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
            window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-46QKB96LKK');
          `}
				</Script>

			</body>
		</html>
	);
}
