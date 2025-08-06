"use client"

import { useEffect } from "react"
import YouTubeHeader from "@/components/youtube/youtube-header"
import YouTubeSidebar from "@/components/youtube/youtube-sidebar"
import CategoryTabs from "@/components/youtube/category-tabs"
import VideoGrid from "@/components/youtube/video-grid"
import VideoPlayer from "@/components/youtube/video-player"
import VideoInfo from "@/components/youtube/video-info"
import CommentsSection from "@/components/youtube/comments-section"
import SuggestedVideos from "@/components/youtube/suggested-videos"
import { useYouTubeStore } from "@/lib/youtube-store"
import { sampleVideos } from "@/lib/youtube-data"
import { cn } from "@/lib/utils"

export default function YouTubePage() {
  const { setVideos, currentVideo, sidebarOpen, setUser } = useYouTubeStore()

  useEffect(() => {
    // Initialize with sample data
    setVideos(sampleVideos)

    // Set sample user
    setUser({
      id: "user1",
      name: "John Doe",
      avatar: "/youtube/avatars/user1.jpg",
      subscriptions: ["tech-guru", "fitness-pro"],
      likedVideos: ["1", "3"],
      watchHistory: ["1", "2", "4"],
    })
  }, [setVideos, setUser])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <YouTubeHeader />
      <YouTubeSidebar />

      {!currentVideo ? (
        <>
          <CategoryTabs />
          <VideoGrid />
        </>
      ) : (
        <div className={cn("pt-14", sidebarOpen ? "ml-60" : "ml-16")}>
          <div className="flex flex-col lg:flex-row gap-6 p-6">
            {/* Main content */}
            <div className="flex-1 space-y-6">
              <VideoPlayer />
              <VideoInfo />
              <CommentsSection />
            </div>

            {/* Sidebar with suggested videos */}
            <div className="lg:w-96">
              <SuggestedVideos />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
