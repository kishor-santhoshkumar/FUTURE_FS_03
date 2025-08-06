"use client"

import { useYouTubeStore } from "@/lib/youtube-store"
import VideoCard from "./video-card"
import { cn } from "@/lib/utils"

export default function VideoGrid() {
  const { filteredVideos, sidebarOpen } = useYouTubeStore()

  return (
    <div className={cn("pt-32 pb-8 px-6", sidebarOpen ? "ml-60" : "ml-16")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 dark:text-gray-400 text-lg mb-2">No videos found</div>
          <div className="text-gray-400 dark:text-gray-500 text-sm">Try adjusting your search or filters</div>
        </div>
      )}
    </div>
  )
}
