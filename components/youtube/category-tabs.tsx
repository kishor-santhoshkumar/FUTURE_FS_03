"use client"

import { Button } from "@/components/ui/button"
import { useYouTubeStore } from "@/lib/youtube-store"
import { categories } from "@/lib/youtube-data"
import { cn } from "@/lib/utils"

export default function CategoryTabs() {
  const { selectedCategory, setSelectedCategory, sidebarOpen } = useYouTubeStore()

  return (
    <div
      className={cn(
        "fixed top-14 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-30",
        sidebarOpen ? "left-60" : "left-16",
        "right-0",
      )}
    >
      <div className="flex items-center space-x-3 px-6 py-3 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors",
              selectedCategory === category
                ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700",
            )}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
