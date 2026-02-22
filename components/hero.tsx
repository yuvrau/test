"use client"

import { Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useServerStatus } from "../hooks/use-server-status"

export function Hero() {
  const [copied, setCopied] = useState(false)
  const { status, loading, error } = useServerStatus("hypixel.net")

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
          alt="Minecraft landscape"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/50 to-slate-900/70" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating-animation"></div>
      <div className="absolute top-32 right-20 floating-animation" style={{ animationDelay: "2s" }}></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text-green">
          Welcome to <span className="text-green-400">CraftRealm</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience the ultimate Minecraft survival server with custom plugins, epic events, and an amazing community.
        </p>

        {/* Server Status */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          {error && (
            <div
              className="flex items-center space-x-2 px-3 py-1"
              style={{
                background: "rgba(234, 179, 8, 0.2)",
                borderRadius: "0.5rem",
              }}
            >
              <span className="text-yellow-400 text-sm">Demo Mode</span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => copyToClipboard("play.craftrealm.net")}
            className="minecraft-btn flex items-center space-x-2 neon-glow-green"
            style={{
              background: "linear-gradient(to right, #10b981, #059669)",
              color: "white",
              fontWeight: "bold",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(to right, #059669, #047857)"
              e.currentTarget.style.transform = "scale(1.05)"
              e.currentTarget.style.boxShadow =
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(to right, #10b981, #059669)"
              e.currentTarget.style.transform = "scale(1)"
              e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            }}
          >
            <Play className="w-5 h-5" />
            <span>{copied ? "IP Copied!" : "Join Server"}</span>
          </button>
          <div
            className="ip-box cursor-pointer transition-colors"
            onClick={() => copyToClipboard("play.craftrealm.net")}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "0.5rem",
              padding: "0.75rem 1.5rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"
            }}
          >
            <span className="text-green-400 font-mono text-lg">play.craftrealm.net</span>
          </div>
        </div>

        {/* Server Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div
            className="text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "0.75rem",
              padding: "1.5rem",
            }}
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="text-3xl font-bold text-green-400">
                {loading ? "..." : status?.players?.online?.toLocaleString() || "1,247"}
              </div>
              {!loading && !error && status?.online && (
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-medium">LIVE</span>
                </div>
              )}
            </div>
            <div className="text-gray-300">Players Online</div>
            {loading && <div className="text-xs text-blue-400 mt-1">Updating...</div>}
          </div>
          <div
            className="text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "0.75rem",
              padding: "1.5rem",
            }}
          >
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300">Server Uptime</div>
          </div>
          <div
            className="text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "0.75rem",
              padding: "1.5rem",
            }}
          >
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300">Custom Plugins</div>
          </div>
        </div>
      </div>
    </section>
  )
}
