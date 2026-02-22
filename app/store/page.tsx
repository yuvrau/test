"use client"

import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function StorePage() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  useEffect(() => {
    // Redirect to external store after 3 seconds
    const timer = setTimeout(() => {
      window.open("https://store.craftrealm.net", "_blank")
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 rounded-full mb-8 neon-glow-green p-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src="https://sjc.microlink.io/Urp0tNZenE8Ucn9pxVrQWrW5X33QYgvG_DdUbukIjI12XUEK7EXrr0tu5eeNDQNqqzGOYUIAn9YtZnkscMg2bQ.jpeg"
                alt="CraftRealm Creeper Logo"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-green">
            CraftRealm <span className="text-green-400">Store</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Support the server and get exclusive perks, ranks, and items to enhance your gameplay experience.
          </p>

          <div className="glass-effect p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Redirecting to Store...</h2>
            <p className="text-gray-300 mb-6">
              You will be automatically redirected to our secure store in a few seconds.
            </p>
            <div className="w-full bg-slate-700 rounded-full h-2 mb-6">
              <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{ width: "100%" }}></div>
            </div>
          </div>

          <a
            href="https://store.craftrealm.net"
            target="_blank"
            rel="noopener noreferrer"
            className="minecraft-btn inline-flex items-center space-x-2 neon-glow-green"
          >
            <span>Visit Store Now</span>
            <ExternalLink className="w-5 h-5" />
          </a>

          <div className="mt-8">
            <button
              onClick={() => copyToClipboard("play.craftrealm.net")}
              className="minecraft-btn inline-flex items-center space-x-2 neon-glow-green mr-4"
            >
              <span>{copied ? "IP Copied!" : "Copy Server IP"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="glass-effect p-6 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-2">VIP Ranks</h3>
              <p className="text-gray-300">Exclusive perks and privileges</p>
            </div>
            <div className="glass-effect p-6 text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Cosmetics</h3>
              <p className="text-gray-300">Unique items and decorations</p>
            </div>
            <div className="glass-effect p-6 text-center">
              <h3 className="text-xl font-bold text-purple-400 mb-2">Boosters</h3>
              <p className="text-gray-300">XP and drop rate multipliers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
