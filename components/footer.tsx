"use client"

import Link from "next/link"
import { Mail, Users } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Footer() {
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

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden neon-glow-green">
                <Image
                  src="https://sjc.microlink.io/Urp0tNZenE8Ucn9pxVrQWrW5X33QYgvG_DdUbukIjI12XUEK7EXrr0tu5eeNDQNqqzGOYUIAn9YtZnkscMg2bQ.jpeg"
                  alt="CraftRealm Creeper Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold text-white neon-text-green">CraftRealm</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The ultimate Minecraft survival experience with custom plugins, events, and an amazing community. Join
              thousands of players in our premium server.
            </p>
            <div
              className="glass-effect px-4 py-2 rounded-lg inline-block cursor-pointer hover:bg-white/20 transition-colors"
              onClick={() => copyToClipboard("play.craftrealm.net")}
            >
              <span className="text-green-400 font-mono">{copied ? "IP Copied!" : "play.craftrealm.net"}</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/store" className="text-gray-400 hover:text-green-400 transition-colors">
                  Store
                </Link>
              </li>
              <li>
                <Link href="/staff" className="text-gray-400 hover:text-green-400 transition-colors">
                  Staff
                </Link>
              </li>
              <li>
                <Link href="/voting" className="text-gray-400 hover:text-green-400 transition-colors">
                  Vote
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Community</h3>
            <div className="space-y-3">
              <a
                href="https://discord.gg/craftrealm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#5865F2] transition-colors group"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span>Discord</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors">
                <Users className="w-5 h-5" />
                <span>Forums</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>Support</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 CraftRealm. All rights reserved. Not affiliated with Mojang Studios.</p>
        </div>
      </div>
    </footer>
  )
}
