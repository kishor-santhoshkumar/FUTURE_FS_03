"use client"

import type React from "react"

import { useState } from "react"
import { Search, Menu, Mic, VideoIcon as VideoPlus, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useYouTubeStore } from "@/lib/youtube-store"
import Image from "next/image"

export default function YouTubeHeader() {
  const { searchQuery, setSearchQuery, sidebarOpen, setSidebarOpen, user, darkMode, setDarkMode } = useYouTubeStore()

  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(localSearchQuery)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-4 py-2 h-14">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <div className="w-5 h-3 bg-white rounded-sm relative">
                <div className="absolute inset-0 bg-red-600 rounded-sm transform scale-75"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">YouTube</span>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-2xl mx-4">
          <form onSubmit={handleSearch} className="flex">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search"
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2 border border-gray-300 dark:border-gray-600 rounded-l-full bg-white dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400"
              />
            </div>
            <Button
              type="submit"
              className="px-6 bg-gray-50 dark:bg-gray-700 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-full hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <Search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </Button>
          </form>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800">
            <Mic className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800">
            <VideoPlus className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800 relative">
            <Bell className="h-5 w-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full"></div>
          </Button>

          {user ? (
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
              <User className="h-4 w-4" />
              <span>Sign in</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
