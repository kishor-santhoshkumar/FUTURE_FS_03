import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "YouTube Clone - Watch Videos Online",
  description: "A modern YouTube clone built with Next.js and Tailwind CSS",
  keywords: ["youtube", "videos", "streaming", "entertainment"],
  openGraph: {
    title: "YouTube Clone",
    description: "Watch and share videos online",
    type: "website",
  },
}

export default function YouTubeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="youtube-app">{children}</div>
}
