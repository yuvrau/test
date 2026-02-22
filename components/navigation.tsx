"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Store", href: "/store" },
    { name: "Staff", href: "/staff" },
    { name: "Vote", href: "/voting" },
    { name: "About", href: "/about" },
  ]

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div
                className="w-10 h-10 overflow-hidden neon-glow-green group-hover:scale-110 transition-transform duration-300"
                style={{ borderRadius: "0.75rem" }}
              >
                <Image
                  src="https://sjc.microlink.io/Urp0tNZenE8Ucn9pxVrQWrW5X33QYgvG_DdUbukIjI12XUEK7EXrr0tu5eeNDQNqqzGOYUIAn9YtZnkscMg2bQ.jpeg"
                  alt="CraftRealm Creeper Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white neon-text-green group-hover:text-green-300 transition-colors">
                  CraftRealm
                </span>
                <span className="text-xs text-gray-400 hidden sm:block">Ultimate Survival</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link"
                style={{
                  color: "rgb(209, 213, 219)",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgb(74, 222, 128)"
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                  e.currentTarget.style.transform = "scale(1.05)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgb(209, 213, 219)"
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.transform = "scale(1)"
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Discord & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Discord Button - Desktop */}
            <a
              href="https://discord.gg/craftrealm"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 discord-btn neon-glow-blue"
              style={{
                backgroundColor: "#5865F2",
                color: "white",
                fontWeight: "500",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#4752C4"
                e.currentTarget.style.transform = "scale(1.05)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#5865F2"
                e.currentTarget.style.transform = "scale(1)"
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span>Discord</span>
            </a>

            {/* Mobile Discord */}
            

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              style={{
                padding: "0.5rem",
                borderRadius: "0.5rem",
                color: "rgb(156, 163, 175)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "white"
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgb(156, 163, 175)"
                e.currentTarget.style.backgroundColor = "transparent"
              }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            className="px-2 pt-2 pb-3 space-y-1"
            style={{
              background: "rgba(15, 23, 42, 0.95)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium transition-colors"
                style={{
                  color: "rgb(209, 213, 219)",
                  borderRadius: "0.375rem",
                  textDecoration: "none",
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgb(74, 222, 128)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgb(209, 213, 219)"
                }}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://discord.gg/craftrealm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 text-base font-medium transition-colors"
              style={{
                color: "#5865F2",
                borderRadius: "0.375rem",
                textDecoration: "none",
              }}
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#4752C4"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#5865F2"
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span>Join Discord</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
