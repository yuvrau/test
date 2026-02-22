import { Shield, Users, Zap, Heart } from "lucide-react"

const rules = [
  {
    icon: Shield,
    title: "No Griefing",
    description: "Respect other players' builds and creations. Griefing will result in immediate punishment.",
  },
  {
    icon: Users,
    title: "Be Respectful",
    description: "Treat all players with respect. No harassment, discrimination, or toxic behavior.",
  },
  {
    icon: Zap,
    title: "No Cheating",
    description: "Hacked clients, exploits, and unfair advantages are strictly prohibited.",
  },
  {
    icon: Heart,
    title: "Have Fun",
    description: "Most importantly, enjoy your time on the server and help create a positive community.",
  },
]

export function RulesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-text-red">
            Server <span className="text-red-400">Rules</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Follow these simple rules to ensure everyone has a great experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="glass-effect p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4 group-hover:bg-red-500/30 transition-colors">
                <rule.icon className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 group-hover:neon-text-red transition-all">
                {rule.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{rule.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
