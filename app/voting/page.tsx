"use client"

import { useState } from "react"
import { ExternalLink, Gift, Star, Trophy } from "lucide-react"
import Image from "next/image"

const votingSites = [
  {
    name: "MinecraftServers.org",
    url: "https://minecraftservers.org/vote/123456",
    logo: "https://minecraft.buzz/template/images/logo.png?v=6",
    reward: "5 Diamonds + 100 Coins",
    cooldown: "24 hours",
  },
  {
    name: "Minecraft-Server-List.com",
    url: "https://minecraft-server-list.com/vote/123456",
    logo: "https://minecraft.buzz/template/images/logo.png?v=6",
    reward: "Vote Key + XP Boost",
    cooldown: "24 hours",
  },
  {
    name: "TopMinecraftServers.org",
    url: "https://topminecraftservers.org/vote/123456",
    logo: "https://minecraft.buzz/template/images/logo.png?v=6",
    reward: "Rare Items + Money",
    cooldown: "24 hours",
  },
  {
    name: "MinecraftMP.com",
    url: "https://minecraftmp.com/vote/123456",
    logo: "https://minecraft.buzz/template/images/logo.png?v=6",
    reward: "Vote Crate + Tokens",
    cooldown: "12 hours",
  },
  {
    name: "Minecraft-Servers.biz",
    url: "https://minecraft-servers.biz/vote/123456",
    logo: "https://minecraft.buzz/template/images/logo.png?v=6",
    reward: "Premium Items",
    cooldown: "24 hours",
  },
  {
    name: "TopG.org",
    url: "https://topg.org/vote/123456",
    logo: "https://minecraft.buzz/template/images/logo.png?v=6",
    reward: "Special Rewards",
    cooldown: "24 hours",
  },
]

const topVoters = [
  { rank: 1, name: "DiamondMiner99", votes: 847 },
  { rank: 2, name: "CraftMaster", votes: 823 },
  { rank: 3, name: "BlockBuilder", votes: 756 },
  { rank: 4, name: "RedstoneWiz", votes: 689 },
  { rank: 5, name: "EnderDragon", votes: 634 },
]

export default function VotingPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-green">
            Vote for <span className="text-green-400">CraftRealm</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Support our server by voting on these sites and earn amazing rewards! Your votes help us grow and provide
            better experiences.
          </p>

          <div className="glass-effect p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Gift className="w-6 h-6 text-green-400" />
              <span className="text-lg font-bold text-white mb-2 group-hover:text-green-400 group-hover:neon-text-green transition-all">
                Daily Vote Rewards
              </span>
            </div>
            <p className="text-green-400 font-semibold">Vote on all sites for bonus rewards!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {votingSites.map((site, index) => (
            <div
              key={index}
              className="glass-effect p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-center mb-4">
                <div className="w-full h-20 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    width={200}
                    height={80}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity rounded"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 group-hover:neon-text-green transition-all">
                  {site.name}
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Reward:</span>
                  <span className="text-green-400 font-semibold">{site.reward}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Cooldown:</span>
                  <span className="text-blue-400">{site.cooldown}</span>
                </div>
              </div>

              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full minecraft-btn flex items-center justify-center space-x-2 neon-glow-green"
              >
                <span>Vote Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Voters */}
          <div className="glass-effect p-8">
            <div className="flex items-center space-x-2 mb-6">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Top Voters This Month</h2>
            </div>

            <div className="space-y-4">
              {topVoters.map((voter) => (
                <div
                  key={voter.rank}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        voter.rank === 1
                          ? "bg-yellow-500 text-black"
                          : voter.rank === 2
                            ? "bg-gray-400 text-black"
                            : voter.rank === 3
                              ? "bg-amber-600 text-white"
                              : "bg-slate-600 text-white"
                      }`}
                    >
                      {voter.rank}
                    </div>
                    <span className="text-white font-semibold">{voter.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 font-bold">{voter.votes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vote Rewards */}
          <div className="glass-effect p-8">
            <div className="flex items-center space-x-2 mb-6">
              <Gift className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Vote Rewards</h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h3 className="text-green-400 font-bold mb-2">Per Vote Rewards</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 5 Diamonds</li>
                  <li>• 100-500 Coins</li>
                  <li>• Vote Keys</li>
                  <li>• XP Boost (30 min)</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <h3 className="text-blue-400 font-bold mb-2">Daily Vote Bonus</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Vote on all 6 sites</li>
                  <li>• Get 2x rewards</li>
                  <li>• Bonus vote crate</li>
                  <li>• Special items</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <h3 className="text-purple-400 font-bold mb-2">Monthly Top Voter</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Exclusive rank upgrade</li>
                  <li>• 10,000 coins</li>
                  <li>• Rare cosmetics</li>
                  <li>• Hall of Fame entry</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
