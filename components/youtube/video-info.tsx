"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal, Bell, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useYouTubeStore } from "@/lib/youtube-store"
import { formatViews, getTimeAgo } from "@/lib/youtube-data"
import Image from "next/image"

export default function VideoInfo() {
  const { currentVideo, user, likeVideo, subscribeToChannel } = useYouTubeStore()
  const [showFullDescription, setShowFullDescription] = useState(false)

  if (!currentVideo) return null

  const isLiked = user?.likedVideos.includes(currentVideo.id) || false
  const isSubscribed = user?.subscriptions.includes(currentVideo.channel.id) || false

  return (
    <div className="space-y-4">
      {/* Video title */}
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">{currentVideo.title}</h1>

      {/* Video stats and actions */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {formatViews(currentVideo.views)} views • {getTimeAgo(currentVideo.uploadDate)}
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => likeVideo(currentVideo.id)}
              className={`rounded-l-full px-4 ${isLiked ? "text-blue-600" : ""}`}
            >
              <ThumbsUp className="h-4 w-4 mr-2" />
              {formatViews(currentVideo.likes)}
            </Button>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
            <Button variant="ghost" size="sm" className="rounded-r-full px-4">
              <ThumbsDown className="h-4 w-4 mr-2" />
              {formatViews(currentVideo.dislikes)}
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="bg-gray-100 dark:bg-gray-800 rounded-full px-4">
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>

          <Button variant="ghost" size="sm" className="bg-gray-100 dark:bg-gray-800 rounded-full px-4">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>

          <Button variant="ghost" size="icon" className="bg-gray-100 dark:bg-gray-800 rounded-full">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Channel info */}
      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={currentVideo.channel.avatar || "/placeholder.svg"}
              alt={currentVideo.channel.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="flex items-center space-x-1">
              <h3 className="font-medium text-gray-900 dark:text-white">{currentVideo.channel.name}</h3>
              {currentVideo.channel.verified && <CheckCircle className="h-4 w-4 text-gray-600 dark:text-gray-400" />}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {formatViews(currentVideo.channel.subscribers)} subscribers
            </div>
          </div>
        </div>

        <Button
          onClick={() => subscribeToChannel(currentVideo.channel.id)}
          className={`px-6 rounded-full ${
            isSubscribed
              ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
              : "bg-red-600 text-white hover:bg-red-700"
          }`}
        >
          {isSubscribed ? (
            <>
              <Bell className="h-4 w-4 mr-2" />
              Subscribed
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </div>

      {/* Description */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
        <div className="text-sm text-gray-900 dark:text-white">
          <div className={showFullDescription ? "" : "line-clamp-3"}>{currentVideo.description}</div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="mt-2 p-0 h-auto text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            {showFullDescription ? "Show less" : "Show more"}
          </Button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {currentVideo.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
