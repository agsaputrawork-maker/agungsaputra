'use client'

import { useState, useEffect } from 'react'
import { Activity, WifiOff } from 'lucide-react'
import { checkServerStatus } from '@/app/actions'

export default function ServerStatusBadge() {
  const [isOnline, setIsOnline] = useState<boolean | null>(null)
  const [isChecking, setIsChecking] = useState(true)

  const checkStatus = async () => {
    setIsChecking(true)
    const { online } = await checkServerStatus()
    setIsOnline(online)
    setIsChecking(false)
  }

  useEffect(() => {
    checkStatus()
    const interval = setInterval(checkStatus, 30000) // check every 30s
    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      onClick={checkStatus}
      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border cursor-pointer transition-all active:scale-95 shadow-lg
        ${isOnline === true ? 'bg-green-500/10 border-green-500/30 shadow-green-500/10' : 
          isOnline === false ? 'bg-red-500/10 border-red-500/30 shadow-red-500/10' : 
          'bg-gray-800/50 border-gray-700 shadow-none'}`}
    >
      {isChecking ? (
        <div className="w-5 h-5 rounded-full border-2 border-gray-500 border-t-white animate-spin"></div>
      ) : isOnline ? (
        <Activity className="w-5 h-5 text-green-500 animate-pulse" />
      ) : (
        <WifiOff className="w-5 h-5 text-red-500" />
      )}
      
      <div>
        <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 leading-none mb-1">TCP Engine</p>
        <p className={`text-xs font-black uppercase tracking-wide leading-none
          ${isOnline === true ? 'text-green-500' : isOnline === false ? 'text-red-500' : 'text-gray-400'}
        `}>
          {isChecking ? 'Checking...' : isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </div>
  )
}
