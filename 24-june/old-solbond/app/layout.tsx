/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Nav from "@/components/Nav"
import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Solbond",
	description: "Buy/sell things",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&display=swap"
						rel="stylesheet"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=Orbitron:wght@400..900&display=swap"
						rel="stylesheet"
					/>
					<Nav />
					{children}
					<div className="backgroundPattern fixed top-0 left-0 w-screen h-screen -z-10"></div>
				</body>
			</html>
		</ClerkProvider>
	)
}
