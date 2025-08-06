"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function YouTubeNavigation() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-red-600 text-white p-4 rounded-lg shadow-lg max-w-sm">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <Play className="h-4 w-4 text-red-600" />
            </div>
            <span className="font-bold">YouTube Clone</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-white hover:bg-red-700 h-6 w-6"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-sm mb-4 text-red-100">
          Experience our complete YouTube clone with video streaming, comments, and more!
        </p>

        <Link href="/youtube">
          <Button className="w-full bg-white text-red-600 hover:bg-red-50">Launch YouTube Clone</Button>
        </Link>
      </div>
    </div>
  )
}
