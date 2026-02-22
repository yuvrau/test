"use client"

import type React from "react"

import { X, Calendar, User } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface NewsModalProps {
  news: {
    id: number
    title: string
    content: string
    author: string
    date: string
    image: string
  }
  onClose: () => void
}

export function NewsModal({ news, onClose }: NewsModalProps) {
  // Handle ESC key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    // Add event listener when modal opens
    document.addEventListener("keydown", handleEscapeKey)

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden"

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "unset"
    }
  }, [onClose])

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="glass-effect max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors group"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-white group-hover:text-red-400 transition-colors" />
          </button>

          <div className="relative h-64 md:h-80">
            <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover rounded-t-xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-xl" />
          </div>

          <div className="p-8">
            <div className="flex items-center text-sm text-gray-400 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(news.date).toLocaleDateString()}</span>
              <User className="w-4 h-4 ml-6 mr-2" />
              <span>{news.author}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">{news.title}</h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">{news.content}</p>
            </div>

            {/* ESC hint */}
            <div className="mt-8 pt-4 border-t border-white/10">
              <p className="text-gray-500 text-sm text-center">
                Press <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">ESC</kbd> or click outside to close
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
