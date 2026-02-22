"use client"

import { useState, useEffect } from "react"

interface ServerStatus {
  online: boolean
  players: {
    online: number
    max: number
  }
  version: string
  motd: string
}

export function useServerStatus(serverIp = "hypixel.net") {
  const [status, setStatus] = useState<ServerStatus>({
    online: true,
    players: { online: 1247, max: 2000 },
    version: "1.20.4",
    motd: "CraftRealm - Ultimate Survival",
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        setLoading(true)
        setError(null)

        console.log("Fetching server status for:", serverIp)

        // Use the specific API endpoint you provided
        const response = await fetch(`https://mcapi.us/server/status?ip=${serverIp}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log("API Response:", data)

        if (data.online) {
          setStatus({
            online: data.online,
            players: {
              online: data.players?.now || 0,
              max: data.players?.max || 0,
            },
            version: data.server?.name || "Unknown",
            motd: data.motd || "Minecraft Server",
          })
          console.log("Updated status with player count:", data.players?.now)
        } else {
          // Server is offline
          setStatus({
            online: false,
            players: { online: 0, max: 0 },
            version: "Unknown",
            motd: "Server Offline",
          })
        }
      } catch (err) {
        console.error("Failed to fetch server status:", err)
        setError("Failed to fetch server status")

        // Fallback to original demo values if API fails
        setStatus({
          online: true,
          players: { online: 1247, max: 2000 },
          version: "1.20.4",
          motd: "CraftRealm - Ultimate Survival",
        })
      } finally {
        setLoading(false)
      }
    }

    // Initial fetch
    fetchServerStatus()

    // Update every 1 minute (60000ms)
    const interval = setInterval(() => {
      console.log("Updating server status...")
      fetchServerStatus()
    }, 60000)

    return () => clearInterval(interval)
  }, [serverIp])

  return { status, loading, error }
}
