import type React from "react"
import type { Metadata } from "next"
import { Inter, Oswald } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
})

export const metadata: Metadata = {
  title: "PUMA - Forever Faster | Athletic Wear & Sportswear",
  description:
    "Discover PUMA's latest collection of athletic wear, sneakers, and sportswear. Shop performance gear designed for athletes and lifestyle enthusiasts.",
  keywords: "PUMA, athletic wear, sneakers, sportswear, running shoes, football boots, lifestyle",
  openGraph: {
    title: "PUMA - Forever Faster",
    description: "Discover PUMA's latest collection of athletic wear and sportswear",
    images: ["/placeholder-tpo4x.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-inter antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
