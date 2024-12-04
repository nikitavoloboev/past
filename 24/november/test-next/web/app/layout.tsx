import { languageTag } from "@/paraglide/runtime"
import { ClerkProvider } from "@clerk/nextjs"
import { TonConnectUIProvider } from "@tonconnect/ui-react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {}

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider
			appearance={{
				variables: {
					colorPrimary: "rgb(200, 47, 30)",
					colorBackground: "#101010",
					colorText: "white"
				}
			}}
		>
			<TonConnectUIProvider>
				<html lang={languageTag()}>
					<head>
						<link rel="icon" href="/favicon.png" sizes="any" />
					</head>

					<body className={inter.className}>
						{children}
						<Toaster />
					</body>
				</html>
			</TonConnectUIProvider>
		</ClerkProvider>
	)
}
