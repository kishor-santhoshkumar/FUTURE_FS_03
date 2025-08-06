import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nike - Just Do It | Official Nike Store",
  description:
    "Find the latest Nike shoes, clothing and accessories. Shop the official Nike store for the best selection of athletic gear and sportswear.",
  keywords: "Nike, shoes, sneakers, athletic wear, sportswear, running, basketball, Air Jordan, Air Max",
  openGraph: {
    title: "Nike - Just Do It",
    description: "Find the latest Nike shoes, clothing and accessories",
    images: ["/nike/hero-1.jpg"],
  },
}

export default function NikeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
