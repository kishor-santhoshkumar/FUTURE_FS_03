"use client"

import { useState } from "react"
import Image from "next/image"
import { MoreVertical, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type Video, formatViews, getTimeAgo } from "@/lib/youtube-data"
import { useYouTubeStore } from "@/lib/youtube-store"
import { cn } from "@/lib/utils"

interface VideoCardProps {
  video: Video
  layout?: "grid" | "list"
}

export default function VideoCard({ video, layout = "grid" }: VideoCardProps) {
  const { setCurrentVideo, addToWatchHistory } = useYouTubeStore()
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleVideoClick = () => {
    setCurrentVideo(video)
    addToWatchHistory(video.id)
  }

  if (layout === "list") {
    return (
      <div
        className="flex space-x-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
        onClick={handleVideoClick}
      >
        <div className="relative flex-shrink-0">
          <div className="w-40 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
            <Image
              src={video.thumbnail || "/placeholder.svg"}
              alt={video.title}
              width={160}
              height={90}
              className={cn(
                "w-full h-full object-cover transition-opacity duration-300",
                imageLoaded ? "opacity-100" : "opacity-0",
              )}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />}
          </div>
          <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
            {video.duration}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1">{video.title}</h3>
          <div className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400 mb-1">
            <span>{video.channel.name}</span>
            {video.channel.verified && <CheckCircle className="h-3 w-3" />}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            {formatViews(video.views)} views • {getTimeAgo(video.uploadDate)}
          </div>
        </div>

        <Button variant="ghost" size="icon" className="flex-shrink-0">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className="group cursor-pointer" onClick={handleVideoClick}>
      <div className="relative mb-3">
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
          <Image
            src={video.thumbnail || "/placeholder.svg"}
            alt={video.title}
            width={400}
            height={225}
            className={cn(
              "w-full h-full object-cover transition-all duration-300 group-hover:scale-105",
              imageLoaded ? "opacity-100" : "opacity-0",
            )}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />}
        </div>

        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl" />
      </div>

      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <Image
              src={video.channel.avatar || "/placeholder.svg"}
              alt={video.channel.name}
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {video.title}
          </h3>

          <div className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400 mb-1">
            <span className="hover:text-gray-900 dark:hover:text-white transition-colors">{video.channel.name}</span>
            {video.channel.verified && <CheckCircle className="h-3 w-3 text-gray-600 dark:text-gray-400" />}
          </div>

          <div className="text-xs text-gray-600 dark:text-gray-400">
            {formatViews(video.views)} views • {getTimeAgo(video.uploadDate)}
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
