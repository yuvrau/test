import { Sword, Home, Coins, Zap, Users, Shield } from "lucide-react"

const features = [
  {
    icon: Sword,
    title: "Custom PvP",
    description: "Engage in epic battles with custom weapons and abilities in our dedicated PvP zones.",
  },
  {
    icon: Home,
    title: "Land Claims",
    description: "Protect your builds with our advanced land claiming system and grief protection.",
  },
  {
    icon: Coins,
    title: "Economy System",
    description: "Trade, buy, and sell with other players using our balanced economy system.",
  },
  {
    icon: Zap,
    title: "Custom Plugins",
    description: "Experience unique gameplay with over 50 custom plugins and features.",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Join thousands of active players in our friendly and welcoming community.",
  },
  {
    icon: Shield,
    title: "24/7 Moderation",
    description: "Our dedicated staff team ensures a safe and fair gaming environment.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-text-blue">
            Server <span className="text-blue-400">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover what makes CraftRealm the ultimate Minecraft experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-effect p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6 group-hover:bg-blue-500/30 transition-colors">
                <feature.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 group-hover:neon-text-blue transition-all">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
