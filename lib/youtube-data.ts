export interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  videoUrl: string
  duration: string
  views: number
  likes: number
  dislikes: number
  uploadDate: string
  channel: {
    id: string
    name: string
    avatar: string
    subscribers: number
    verified: boolean
  }
  tags: string[]
  category: string
}

export interface Comment {
  id: string
  videoId: string
  userId: string
  userName: string
  userAvatar: string
  content: string
  likes: number
  timestamp: string
  replies?: Comment[]
}

export interface Channel {
  id: string
  name: string
  avatar: string
  banner: string
  subscribers: number
  videos: number
  description: string
  verified: boolean
  joinDate: string
}

export const sampleVideos: Video[] = [
  {
    id: "1",
    title: "Building a Modern React App with Next.js 14",
    description:
      "Learn how to build a complete React application using Next.js 14 with the latest features including App Router, Server Components, and more.",
    thumbnail: "/youtube/thumbnails/react-nextjs.jpg",
    videoUrl: "/youtube/videos/react-tutorial.mp4",
    duration: "15:42",
    views: 125000,
    likes: 8500,
    dislikes: 120,
    uploadDate: "2024-01-15",
    channel: {
      id: "tech-guru",
      name: "Tech Guru",
      avatar: "/youtube/avatars/tech-guru.jpg",
      subscribers: 850000,
      verified: true,
    },
    tags: ["React", "Next.js", "JavaScript", "Web Development"],
    category: "Technology",
  },
  {
    id: "2",
    title: "10 Minute Morning Workout - No Equipment Needed",
    description:
      "Start your day right with this energizing 10-minute morning workout routine. Perfect for beginners and requires no equipment!",
    thumbnail: "/youtube/thumbnails/morning-workout.jpg",
    videoUrl: "/youtube/videos/workout.mp4",
    duration: "10:15",
    views: 2300000,
    likes: 95000,
    dislikes: 1200,
    uploadDate: "2024-01-12",
    channel: {
      id: "fitness-pro",
      name: "FitnessPro",
      avatar: "/youtube/avatars/fitness-pro.jpg",
      subscribers: 1200000,
      verified: true,
    },
    tags: ["Fitness", "Workout", "Morning Routine", "Health"],
    category: "Sports",
  },
  {
    id: "3",
    title: "Amazing Street Food in Tokyo - Food Tour",
    description:
      "Join me as I explore the incredible street food scene in Tokyo, trying authentic Japanese dishes from local vendors.",
    thumbnail: "/youtube/thumbnails/tokyo-food.jpg",
    videoUrl: "/youtube/videos/food-tour.mp4",
    duration: "22:18",
    views: 890000,
    likes: 42000,
    dislikes: 800,
    uploadDate: "2024-01-10",
    channel: {
      id: "food-explorer",
      name: "Food Explorer",
      avatar: "/youtube/avatars/food-explorer.jpg",
      subscribers: 650000,
      verified: true,
    },
    tags: ["Food", "Travel", "Tokyo", "Street Food", "Japan"],
    category: "Travel",
  },
  {
    id: "4",
    title: "Learn Python in 30 Minutes - Complete Beginner Tutorial",
    description:
      "Complete Python tutorial for absolute beginners. Learn variables, functions, loops, and more in just 30 minutes!",
    thumbnail: "/youtube/thumbnails/python-tutorial.jpg",
    videoUrl: "/youtube/videos/python-tutorial.mp4",
    duration: "30:45",
    views: 1500000,
    likes: 78000,
    dislikes: 2100,
    uploadDate: "2024-01-08",
    channel: {
      id: "code-academy",
      name: "Code Academy",
      avatar: "/youtube/avatars/code-academy.jpg",
      subscribers: 2100000,
      verified: true,
    },
    tags: ["Python", "Programming", "Tutorial", "Beginner"],
    category: "Education",
  },
  {
    id: "5",
    title: "Relaxing Piano Music for Study and Work",
    description:
      "2 hours of peaceful piano music perfect for studying, working, or relaxation. No ads, just pure music.",
    thumbnail: "/youtube/thumbnails/piano-music.jpg",
    videoUrl: "/youtube/videos/piano-music.mp4",
    duration: "2:00:00",
    views: 5600000,
    likes: 125000,
    dislikes: 3200,
    uploadDate: "2024-01-05",
    channel: {
      id: "peaceful-sounds",
      name: "Peaceful Sounds",
      avatar: "/youtube/avatars/peaceful-sounds.jpg",
      subscribers: 890000,
      verified: false,
    },
    tags: ["Music", "Piano", "Relaxing", "Study Music"],
    category: "Music",
  },
  {
    id: "6",
    title: "iPhone 15 Pro Max Review - Is It Worth the Upgrade?",
    description:
      "Comprehensive review of the iPhone 15 Pro Max covering camera, performance, battery life, and whether you should upgrade.",
    thumbnail: "/youtube/thumbnails/iphone-review.jpg",
    videoUrl: "/youtube/videos/iphone-review.mp4",
    duration: "18:32",
    views: 3200000,
    likes: 156000,
    dislikes: 8900,
    uploadDate: "2024-01-03",
    channel: {
      id: "tech-reviews",
      name: "TechReviews",
      avatar: "/youtube/avatars/tech-reviews.jpg",
      subscribers: 4500000,
      verified: true,
    },
    tags: ["iPhone", "Apple", "Review", "Technology"],
    category: "Technology",
  },
]

export const sampleComments: Comment[] = [
  {
    id: "1",
    videoId: "1",
    userId: "user1",
    userName: "WebDev Enthusiast",
    userAvatar: "/youtube/avatars/user1.jpg",
    content:
      "Great tutorial! Really helped me understand Next.js 14 better. The explanation of Server Components was particularly clear.",
    likes: 45,
    timestamp: "2024-01-16T10:30:00Z",
    replies: [
      {
        id: "1-1",
        videoId: "1",
        userId: "tech-guru",
        userName: "Tech Guru",
        userAvatar: "/youtube/avatars/tech-guru.jpg",
        content: "Thanks! Glad it helped. More Next.js content coming soon!",
        likes: 12,
        timestamp: "2024-01-16T11:15:00Z",
      },
    ],
  },
  {
    id: "2",
    videoId: "1",
    userId: "user2",
    userName: "React Developer",
    userAvatar: "/youtube/avatars/user2.jpg",
    content: "Could you make a video about Next.js deployment strategies?",
    likes: 23,
    timestamp: "2024-01-16T14:20:00Z",
  },
]

export const categories = [
  "All",
  "Technology",
  "Sports",
  "Music",
  "Gaming",
  "Education",
  "Entertainment",
  "News",
  "Travel",
  "Food",
  "Fashion",
  "Science",
]

export function formatViews(views: number): string {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`
  }
  return views.toString()
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

export function getTimeAgo(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) return "Just now"
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`
  return `${Math.floor(diffInSeconds / 31536000)} years ago`
}
