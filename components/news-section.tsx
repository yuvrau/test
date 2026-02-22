"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar, User } from "lucide-react"
import Image from "next/image"
import { NewsModal } from "./news-modal"

const newsData = [
  {
    id: 1,
    title: "Halloween Event 2024 - Spooky Adventures Await!",
    excerpt:
      "Join us for our biggest Halloween event yet with exclusive rewards, haunted dungeons, and limited-time items.",
    content:
      "Get ready for the most spine-chilling event of the year! Our Halloween Event 2024 brings you haunted dungeons filled with terrifying monsters, exclusive Halloween-themed items, and special rewards that you can only get during this limited time. Explore the Haunted Mansion, defeat the Pumpkin King, and collect rare Halloween cosmetics. The event runs from October 1st to November 1st, so don't miss out on this spooky adventure!",
    author: "Admin Steve",
    date: "2024-10-15",
    image:
      "https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/key-art/Minecraft%20Dungeons%20Halloween_Hero%20Screenshot.jpg",
  },
  {
    id: 2,
    title: "New PvP Arena Now Open - Battle for Glory!",
    excerpt:
      "Test your combat skills in our brand new PvP arena with ranked matches and exclusive rewards for champions.",
    content:
      "The wait is over! Our new PvP Arena is now open for all players. This state-of-the-art combat facility features multiple arena types, ranked matchmaking, and exclusive rewards for the top fighters. Whether you're a seasoned warrior or just starting your PvP journey, there's something for everyone. Climb the leaderboards, earn prestigious titles, and show off your combat prowess. Special tournaments will be held every weekend with amazing prizes!",
    author: "Moderator Alex",
    date: "2024-10-12",
    image:
      "https://imgs.search.brave.com/QLcBSp0nhPIC34Gyyh-w-aMCpL4EUHxQG-i4ag75IlA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/bWluZWNyYWZ0LXN1/YnVyYmlhLW5laWdo/Ym9yaG9vZC12MC0y/OHNxM2lkdXdscWEx/LmpwZz93aWR0aD02/NDAmY3JvcD1zbWFy/dCZhdXRvPXdlYnAm/cz1hZWI3ZDczM2Ux/ZGE5ODliZTY5ZDhk/MDk4NjA5NzMzNTA4/ZjgxYTgy",
  },
  {
    id: 3,
    title: "Economy Update - New Shops and Trading System",
    excerpt:
      "Major economy overhaul with player shops, auction house, and improved trading mechanics for better gameplay.",
    content:
      "We're excited to announce a major update to our server economy! The new system includes player-owned shops, a global auction house, and improved trading mechanics. Players can now set up their own shops in designated market areas, list items on the auction house for other players to bid on, and enjoy a more balanced economy with better item values. This update also includes new jobs and ways to earn money, making the economic aspect of the server more engaging than ever.",
    author: "Developer Mike",
    date: "2024-10-08",
    image: "https://staticg.sportskeeda.com/editor/2021/06/9df27-16228531262819-800.jpg",
  },
  {
    id: 4,
    title: "Custom Enchantments Released - Power Up Your Gear!",
    excerpt: "Discover over 30 new custom enchantments that will revolutionize your gameplay experience.",
    content:
      "Prepare to enhance your equipment like never before! We've introduced over 30 custom enchantments that add unique abilities to your weapons, armor, and tools. From explosive arrows to self-repairing armor, these enchantments will change how you play. Some highlights include: Lightning Strike (chance to summon lightning), Vampire (heal from damage dealt), and Telekinesis (automatically pick up mined blocks). Visit the Enchantment Master in spawn to learn more!",
    author: "Admin Sarah",
    date: "2024-10-05",
    image:
      "https://camo.githubusercontent.com/fc6fc181eefdc30ccdb880ce261990ee3b7cae41811afceb46c303a904704e24/68747470733a2f2f692e696d6775722e636f6d2f4d78694635375a2e706e67",
  },
  {
    id: 5,
    title: "Monthly Building Contest - Theme: Medieval Castles",
    excerpt: "Show off your building skills in our monthly contest with amazing prizes for the most creative builds.",
    content:
      "Calling all master builders! This month's building contest theme is Medieval Castles. Create the most impressive, creative, and detailed medieval castle to win amazing prizes including exclusive building materials, custom titles, and in-game currency. The contest runs until the end of the month, and all builds will be judged by our staff team and community votes. Don't forget to use the contest world accessible via /contest. Good luck, builders!",
    author: "Builder Jenny",
    date: "2024-10-01",
    image: "https://static.planetminecraft.com/files/image/minecraft/project/2024/762/17961633_l.webp",
  },
  {
    id: 6,
    title: "Server Performance Upgrade Complete",
    excerpt: "Experience smoother gameplay with our latest server hardware upgrade and optimization improvements.",
    content:
      "We're happy to announce that our server performance upgrade is now complete! With new high-performance hardware and extensive optimization, you can expect significantly reduced lag, faster chunk loading, and improved overall stability. The upgrade includes doubled RAM capacity, faster SSD storage, and enhanced network connectivity. We've also optimized our plugins and server configuration for maximum performance. Thank you for your patience during the maintenance period!",
    author: "Tech Team",
    date: "2024-09-28",
    image: "https://cdn.hostadvice.com/2023/04/final-importance-and-benefits-of-updating-minecraft-server-2.png.webp",
  },
]

export function NewsSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedNews, setSelectedNews] = useState<(typeof newsData)[0] | null>(null)
  const itemsPerPage = 3
  const totalPages = Math.ceil(newsData.length / itemsPerPage)

  const getCurrentNews = () => {
    const start = currentPage * itemsPerPage
    return newsData.slice(start, start + itemsPerPage)
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-text-green">
            Latest <span className="text-green-400">News</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest events, updates, and announcements from CraftRealm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getCurrentNews().map((news) => (
            <div
              key={news.id}
              className="p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              onClick={() => setSelectedNews(news)}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "0.75rem",
              }}
            >
              <div className="relative mb-4 overflow-hidden" style={{ borderRadius: "0.5rem" }}>
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>

              <div className="flex items-center text-sm text-gray-400 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(news.date).toLocaleDateString()}</span>
                <User className="w-4 h-4 ml-4 mr-2" />
                <span>{news.author}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                {news.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{news.excerpt}</p>

              <div className="mt-4 text-green-400 text-sm font-medium group-hover:text-green-300">Read More →</div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="pagination-btn"
            style={{
              padding: "0.5rem",
              borderRadius: "0.5rem",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              transition: "all 0.3s ease",
              cursor: currentPage === 0 ? "not-allowed" : "pointer",
              opacity: currentPage === 0 ? 0.5 : 1,
            }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className="w-3 h-3 transition-all duration-300"
                style={{
                  borderRadius: "50%",
                  backgroundColor: i === currentPage ? "#4ade80" : "#6b7280",
                  boxShadow: i === currentPage ? "0 0 20px rgba(74, 222, 128, 0.5)" : "none",
                }}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="pagination-btn"
            style={{
              padding: "0.5rem",
              borderRadius: "0.5rem",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              transition: "all 0.3s ease",
              cursor: currentPage === totalPages - 1 ? "not-allowed" : "pointer",
              opacity: currentPage === totalPages - 1 ? 0.5 : 1,
            }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {selectedNews && <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />}
    </section>
  )
}
