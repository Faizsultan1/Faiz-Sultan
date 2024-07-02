import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Faiz Sultan",
	description: "Faiz Sutlan a full stack web developer and Enthusiast Software Engineer",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="dark">
			<body className={inter.className}>
        <Navbar/>
        {children}
        </body>
		</html>
	)
}
