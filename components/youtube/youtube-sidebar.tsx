"use client"

import { Home, Compass, PlaySquare, Clock, ThumbsUp, Download, Settings, HelpCircle, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useYouTubeStore } from "@/lib/youtube-store"
import { cn } from "@/lib/utils"

const mainMenuItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Compass, label: "Explore" },
  { icon: PlaySquare, label: "Subscriptions" },
]

const libraryItems = [
  { icon: Clock, label: "History" },
  { icon: PlaySquare, label: "Your videos" },
  { icon: Clock, label: "Watch later" },
  { icon: ThumbsUp, label: "Liked videos" },
  { icon: Download, label: "Downloads" },
]

const subscriptions = [
  { name: "Tech Guru", avatar: "/youtube/avatars/tech-guru.jpg" },
  { name: "FitnessPro", avatar: "/youtube/avatars/fitness-pro.jpg" },
  { name: "Food Explorer", avatar: "/youtube/avatars/food-explorer.jpg" },
  { name: "Code Academy", avatar: "/youtube/avatars/code-academy.jpg" },
]

export default function YouTubeSidebar() {
  const { sidebarOpen, user } = useYouTubeStore()

  if (!sidebarOpen) {
    return (
      <aside className="fixed left-0 top-14 w-16 h-[calc(100vh-3.5rem)] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-40">
        <div className="flex flex-col items-center py-4 space-y-4">
          {mainMenuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={cn(
                "w-12 h-12 flex flex-col items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800",
                item.active && "bg-gray-100 dark:bg-gray-800",
              )}
            >
              <item.icon className="h-5 w-5" />
            </Button>
          ))}
        </div>
      </aside>
    )
  }

  return (
    <aside className="fixed left-0 top-14 w-60 h-[calc(100vh-3.5rem)] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto z-40">
      <div className="py-2">
        {/* Main Menu */}
        <div className="px-3 mb-4">
          {mainMenuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={cn(
                "w-full justify-start px-3 py-2 h-10 hover:bg-gray-100 dark:hover:bg-gray-800",
                item.active && "bg-gray-100 dark:bg-gray-800",
              )}
            >
              <item.icon className="h-5 w-5 mr-6" />
              <span className="text-sm">{item.label}</span>
            </Button>
          ))}
        </div>

        <hr className="border-gray-200 dark:border-gray-700 mb-4" />

        {/* Library */}
        {user && (
          <>
            <div className="px-3 mb-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2 px-3">Library</h3>
              {libraryItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start px-3 py-2 h-10 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <item.icon className="h-5 w-5 mr-6" />
                  <span className="text-sm">{item.label}</span>
                </Button>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 mb-4" />
          </>
        )}

        {/* Subscriptions */}
        <div className="px-3 mb-4">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2 px-3">Subscriptions</h3>
          {subscriptions.map((channel, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start px-3 py-2 h-10 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden mr-6">
                <img
                  src={channel.avatar || "/placeholder.svg"}
                  alt={channel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm truncate">{channel.name}</span>
            </Button>
          ))}
        </div>

        <hr className="border-gray-200 dark:border-gray-700 mb-4" />

        {/* More from YouTube */}
        <div className="px-3 mb-4">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2 px-3">More from YouTube</h3>
          <Button
            variant="ghost"
            className="w-full justify-start px-3 py-2 h-10 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div className="w-6 h-6 bg-red-600 rounded mr-6 flex items-center justify-center">
              <span className="text-white text-xs font-bold">YT</span>
            </div>
            <span className="text-sm">YouTube Premium</span>
          </Button>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 mb-4" />

        {/* Settings and Help */}
        <div className="px-3">
          <Button
            variant="ghost"
            className="w-full justify-start px-3 py-2 h-10 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Settings className="h-5 w-5 mr-6" />
            <span className="text-sm">Settings</span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start px-3 py-2 h-10 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Flag className="h-5 w-5 mr-6" />
            <span className="text-sm">Report history</span>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start px-3 py-2 h-10 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <HelpCircle className="h-5 w-5 mr-6" />
            <span className="text-sm">Help</span>
          </Button>
        </div>
      </div>
    </aside>
  )
}
