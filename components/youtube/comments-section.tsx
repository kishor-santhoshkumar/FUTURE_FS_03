"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useYouTubeStore } from "@/lib/youtube-store"
import { sampleComments, getTimeAgo } from "@/lib/youtube-data"
import Image from "next/image"

export default function CommentsSection() {
  const { currentVideo, user, addComment } = useYouTubeStore()
  const [newComment, setNewComment] = useState("")
  const [showReplies, setShowReplies] = useState<string[]>([])

  if (!currentVideo) return null

  const videoComments = sampleComments.filter((comment) => comment.videoId === currentVideo.id)

  const handleSubmitComment = () => {
    if (!newComment.trim() || !user) return

    const comment = {
      id: Date.now().toString(),
      videoId: currentVideo.id,
      userId: user.id,
      userName: user.name,
      userAvatar: user.avatar,
      content: newComment,
      likes: 0,
      timestamp: new Date().toISOString(),
    }

    addComment(comment)
    setNewComment("")
  }

  const toggleReplies = (commentId: string) => {
    setShowReplies((prev) => (prev.includes(commentId) ? prev.filter((id) => id !== commentId) : [...prev, commentId]))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{videoComments.length} Comments</h3>
        <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400">
          Sort by
        </Button>
      </div>

      {/* Add comment */}
      {user && (
        <div className="flex space-x-4">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 space-y-3">
            <Textarea
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[80px] resize-none border-0 border-b-2 border-gray-200 dark:border-gray-700 rounded-none bg-transparent focus:border-blue-500 dark:focus:border-blue-400"
            />
            <div className="flex items-center justify-end space-x-2">
              <Button variant="ghost" size="sm" onClick={() => setNewComment("")} disabled={!newComment.trim()}>
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={handleSubmitComment}
                disabled={!newComment.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Comment
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Comments list */}
      <div className="space-y-6">
        {videoComments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={comment.userAvatar || "/placeholder.svg"}
                  alt={comment.userName}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-sm text-gray-900 dark:text-white">{comment.userName}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">{getTimeAgo(comment.timestamp)}</span>
                </div>

                <p className="text-sm text-gray-900 dark:text-white">{comment.content}</p>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <span className="text-xs text-gray-600 dark:text-gray-400">{comment.likes}</span>
                  </div>

                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ThumbsDown className="h-4 w-4" />
                  </Button>

                  <Button variant="ghost" size="sm" className="text-xs">
                    Reply
                  </Button>
                </div>

                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleReplies(comment.id)}
                      className="text-blue-600 dark:text-blue-400 text-xs p-0 h-auto"
                    >
                      {showReplies.includes(comment.id) ? "Hide" : "Show"} {comment.replies.length} replies
                    </Button>

                    {showReplies.includes(comment.id) && (
                      <div className="space-y-4 ml-6 border-l-2 border-gray-200 dark:border-gray-700 pl-6">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex space-x-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={reply.userAvatar || "/placeholder.svg"}
                                alt={reply.userName}
                                width={32}
                                height={32}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <div className="flex-1 space-y-1">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-sm text-gray-900 dark:text-white">
                                  {reply.userName}
                                </span>
                                <span className="text-xs text-gray-600 dark:text-gray-400">
                                  {getTimeAgo(reply.timestamp)}
                                </span>
                              </div>

                              <p className="text-sm text-gray-900 dark:text-white">{reply.content}</p>

                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                  <Button variant="ghost" size="icon" className="h-6 w-6">
                                    <ThumbsUp className="h-3 w-3" />
                                  </Button>
                                  <span className="text-xs text-gray-600 dark:text-gray-400">{reply.likes}</span>
                                </div>

                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                  <ThumbsDown className="h-3 w-3" />
                                </Button>

                                <Button variant="ghost" size="sm" className="text-xs">
                                  Reply
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
