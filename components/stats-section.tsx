"use client"

import { Users, Server, Trophy, Clock } from "lucide-react"
import { useServerStatus } from "../hooks/use-server-status"

export function StatsSection() {
  const { status, loading, error } = useServerStatus("hypixel.net")

  const stats = [
    {
      icon: Users,
      value: loading ? "..." : status?.players?.online ? `${status.players.online.toLocaleString()}` : "15,000+",
      label: "Players Online",
      color: "text-blue-400",
      pulseClass: "pulse-glow-subtle",
      isLive: !loading && !error && status?.online,
    },
    {
      icon: Server,
      value: loading ? "..." : status?.online ? "99.9%" : "Offline",
      label: "Server Status",
      color: loading ? "text-yellow-400" : status?.online ? "text-green-400" : "text-red-400",
      pulseClass: status?.online ? "pulse-glow-green" : "",
      isLive: false,
    },
    {
      icon: Trophy,
      value: "500+",
      label: "Events Hosted",
      color: "text-yellow-400",
      pulseClass: "pulse-glow-yellow",
      isLive: false,
    },
    {
      icon: Clock,
      value: "3 Years",
      label: "Online Since",
      color: "text-purple-400",
      pulseClass: "pulse-glow-purple",
      isLive: false,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`glass-effect p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group ${stat.pulseClass}`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${stat.color.replace("text-", "bg-").replace("-400", "-500/20")} group-hover:${stat.color.replace("text-", "bg-").replace("-400", "-500/30")} transition-colors`}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div
                  className={`text-4xl font-bold ${stat.color} group-hover:${stat.color.replace("text-", "neon-text-").replace("-400", "")} transition-all`}
                >
                  {stat.value}
                </div>
                {stat.isLive && (
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400 font-medium">LIVE</span>
                  </div>
                )}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
              {index === 0 && loading && <div className="text-xs text-blue-400 mt-1">Updating...</div>}
              {index === 0 && error && <div className="text-xs text-yellow-400 mt-1">Demo Mode</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
