import { Calendar, Users, Server, Heart, Target, Zap } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-green">
            About <span className="text-green-400">CraftRealm</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CraftRealm was born from a passion for creating the ultimate Minecraft survival experience. Since 2021,
            we've been dedicated to building a community where creativity, adventure, and friendship thrive.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="glass-effect p-8">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text-green">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                CraftRealm began as a small project between friends who shared a love for Minecraft. What started as a
                simple survival server has evolved into a thriving community of over 15,000 players.
              </p>
              <p>
                Our journey has been marked by continuous innovation, from developing custom plugins to hosting epic
                server-wide events. We've always prioritized creating a fair, fun, and engaging environment for players
                of all skill levels.
              </p>
              <p>
                Today, CraftRealm stands as one of the premier Minecraft survival servers, known for our active
                community, professional staff, and commitment to providing the best possible gaming experience.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
              alt="CraftRealm server spawn"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="glass-effect p-8 text-center">
            <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4 neon-text-blue">Our Mission</h3>
            <p className="text-gray-300">
              To create the most engaging and fair Minecraft survival experience, fostering a community where players
              can build, explore, and make lasting friendships.
            </p>
          </div>

          <div className="glass-effect p-8 text-center">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4 neon-text-yellow">Our Vision</h3>
            <p className="text-gray-300">
              To be the leading Minecraft server that sets the standard for community-driven gameplay, innovation, and
              player satisfaction in the gaming world.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text-green">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="glass-effect p-4 rounded-full">
                <Calendar className="w-6 h-6 text-green-400" />
              </div>
              <div className="glass-effect p-6 flex-1">
                <h3 className="text-xl font-bold text-white mb-2">2021 - The Beginning</h3>
                <p className="text-gray-300">CraftRealm launches with 20 players and big dreams.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="glass-effect p-4 rounded-full">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div className="glass-effect p-6 flex-1">
                <h3 className="text-xl font-bold text-white mb-2">2022 - Growing Community</h3>
                <p className="text-gray-300">Reached 1,000 registered players and introduced custom plugins.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="glass-effect p-4 rounded-full">
                <Server className="w-6 h-6 text-purple-400" />
              </div>
              <div className="glass-effect p-6 flex-1">
                <h3 className="text-xl font-bold text-white mb-2">2023 - Major Expansion</h3>
                <p className="text-gray-300">Server hardware upgrade and launch of multiple game modes.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="glass-effect p-4 rounded-full">
                <Heart className="w-6 h-6 text-red-400" />
              </div>
              <div className="glass-effect p-6 flex-1">
                <h3 className="text-xl font-bold text-white mb-2">2024 - Community First</h3>
                <p className="text-gray-300">15,000+ players strong with focus on community events and feedback.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-12 neon-text-green">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community First</h3>
              <p className="text-gray-300">Every decision we make prioritizes our players and community well-being.</p>
            </div>

            <div className="glass-effect p-8 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-300">
                We constantly evolve and improve to provide cutting-edge gameplay experiences.
              </p>
            </div>

            <div className="glass-effect p-8 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fairness</h3>
              <p className="text-gray-300">Equal opportunities and fair play for all members of our community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
