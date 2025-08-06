import { create } from "zustand"
import type { Video, Comment } from "./youtube-data"

interface YouTubeStore {
  // Video state
  currentVideo: Video | null
  videos: Video[]
  filteredVideos: Video[]
  searchQuery: string
  selectedCategory: string

  // UI state
  sidebarOpen: boolean
  darkMode: boolean

  // User state
  user: {
    id: string
    name: string
    avatar: string
    subscriptions: string[]
    likedVideos: string[]
    watchHistory: string[]
  } | null

  // Comments
  comments: Comment[]

  // Actions
  setCurrentVideo: (video: Video | null) => void
  setVideos: (videos: Video[]) => void
  setSearchQuery: (query: string) => void
  setSelectedCategory: (category: string) => void
  setSidebarOpen: (open: boolean) => void
  setDarkMode: (dark: boolean) => void
  setUser: (user: any) => void
  addComment: (comment: Comment) => void
  likeVideo: (videoId: string) => void
  subscribeToChannel: (channelId: string) => void
  addToWatchHistory: (videoId: string) => void
  filterVideos: () => void
}

export const useYouTubeStore = create<YouTubeStore>((set, get) => ({
  // Initial state
  currentVideo: null,
  videos: [],
  filteredVideos: [],
  searchQuery: "",
  selectedCategory: "All",
  sidebarOpen: true,
  darkMode: false,
  user: null,
  comments: [],

  // Actions
  setCurrentVideo: (video) => set({ currentVideo: video }),

  setVideos: (videos) => {
    set({ videos, filteredVideos: videos })
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query })
    get().filterVideos()
  },

  setSelectedCategory: (category) => {
    set({ selectedCategory: category })
    get().filterVideos()
  },

  setSidebarOpen: (open) => set({ sidebarOpen: open }),

  setDarkMode: (dark) => set({ darkMode: dark }),

  setUser: (user) => set({ user }),

  addComment: (comment) => {
    set((state) => ({
      comments: [...state.comments, comment],
    }))
  },

  likeVideo: (videoId) => {
    const { user } = get()
    if (!user) return

    const isLiked = user.likedVideos.includes(videoId)
    const updatedLikedVideos = isLiked
      ? user.likedVideos.filter((id) => id !== videoId)
      : [...user.likedVideos, videoId]

    set({
      user: {
        ...user,
        likedVideos: updatedLikedVideos,
      },
    })
  },

  subscribeToChannel: (channelId) => {
    const { user } = get()
    if (!user) return

    const isSubscribed = user.subscriptions.includes(channelId)
    const updatedSubscriptions = isSubscribed
      ? user.subscriptions.filter((id) => id !== channelId)
      : [...user.subscriptions, channelId]

    set({
      user: {
        ...user,
        subscriptions: updatedSubscriptions,
      },
    })
  },

  addToWatchHistory: (videoId) => {
    const { user } = get()
    if (!user) return

    const updatedHistory = [videoId, ...user.watchHistory.filter((id) => id !== videoId)]

    set({
      user: {
        ...user,
        watchHistory: updatedHistory.slice(0, 100), // Keep last 100 videos
      },
    })
  },

  filterVideos: () => {
    const { videos, searchQuery, selectedCategory } = get()

    let filtered = videos

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((video) => video.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (video) =>
          video.title.toLowerCase().includes(query) ||
          video.description.toLowerCase().includes(query) ||
          video.channel.name.toLowerCase().includes(query) ||
          video.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    set({ filteredVideos: filtered })
  },
}))
