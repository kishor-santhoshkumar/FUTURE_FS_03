"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function NikeNavigation() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href="/nike">
        <Button
          size="lg"
          className="bg-black hover:bg-gray-800 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-full px-6 py-3"
        >
          <Sparkles className="h-5 w-5 mr-2" />
          View Nike Redesign
          <ArrowRight className="h-5 w-5 ml-2" />
        </Button>
      </Link>
    </div>
  )
}
