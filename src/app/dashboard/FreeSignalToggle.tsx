'use client'

import { useState, useEffect } from 'react'
import { Radio, Power, Loader2 } from 'lucide-react'

export default function FreeSignalToggle() {
  const [isOn, setIsOn] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchStatus = async () => {
    try {
      const response = await fetch("https://goldzonefree-production.up.railway.app/api/status")
      const data = await response.json()
      setIsOn(data.status === "ON")
    } catch (error) {
      console.error("Failed to fetch signal status", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchStatus()
    const interval = setInterval(fetchStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  const handleToggle = async () => {
    if (isLoading) return
    setIsLoading(true)
    try {
      const response = await fetch("https://goldzonefree-production.up.railway.app/api/toggle", {
        method: "POST"
      })
      const data = await response.json()
      setIsOn(data.status === "ON")
    } catch (error) {
      console.error("Failed to toggle signal", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div 
      onClick={handleToggle}
      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border cursor-pointer transition-all active:scale-95 shadow-lg
        ${isLoading ? 'bg-gray-800/50 border-gray-700 shadow-none' :
          isOn ? 'bg-yellow-500/10 border-yellow-500/30 shadow-yellow-500/10' : 
          'bg-gray-800/50 border-gray-700 shadow-none'}`}
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
      ) : isOn ? (
        <Radio className="w-5 h-5 text-yellow-500 animate-pulse" />
      ) : (
        <Power className="w-5 h-5 text-gray-500" />
      )}
      
      <div>
        <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 leading-none mb-1">Free Signal</p>
        <p className={`text-xs font-black uppercase tracking-wide leading-none
          ${isLoading ? 'text-gray-400' : isOn ? 'text-yellow-500' : 'text-gray-400'}
        `}>
          {isLoading ? 'Loading...' : isOn ? 'ON' : 'OFF'}
        </p>
      </div>
    </div>
  )
}
