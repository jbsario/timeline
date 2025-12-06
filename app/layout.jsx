import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "KenDev | Timeline",

    description:
		"KenDev Timeline Page ",

    author: "KenDev",
    siteUrl: "",
    applicationName: "",

    keywords: [
		"KenDev",
	],

    openGraph: {
		type: "website",
		url: "",
		title: "Kendev | Timeline",
		site_name: "Kendev | Timeline",
		description: "KenDev Timeline Page",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "KenDev Timeline",
			},
		],
		site_name: "KenDev | Timeline",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				{/* <Chat /> */}
				<Analytics />
			</body>
		</html>
	);
}
