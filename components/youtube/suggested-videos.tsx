"use client"

import { useYouTubeStore } from "@/lib/youtube-store"
import VideoCard from "./video-card"

export default function SuggestedVideos() {
  const { videos, currentVideo } = useYouTubeStore()

  // Filter out current video and get suggested videos
  const suggestedVideos = videos.filter((video) => video.id !== currentVideo?.id).slice(0, 20)

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Up next</h3>

      {suggestedVideos.map((video) => (
        <VideoCard key={video.id} video={video} layout="list" />
      ))}

      {suggestedVideos.length === 0 && (
        <div className="text-center py-8">
          <div className="text-gray-500 dark:text-gray-400">No suggested videos</div>
        </div>
      )}
    </div>
  )
}
