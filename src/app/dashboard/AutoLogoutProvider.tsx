'use client'

import { useEffect, useRef } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'

export default function AutoLogoutProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // 1 hour in milliseconds
  const IDLE_TIMEOUT = 60 * 60 * 1000

  const handleLogout = async () => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    await supabase.auth.signOut()
    router.push('/login')
  }

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      handleLogout()
    }, IDLE_TIMEOUT)
  }

  useEffect(() => {
    // Initial timer start
    resetTimer()

    // Event listeners for activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']
    events.forEach(event => document.addEventListener(event, resetTimer))

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      events.forEach(event => document.removeEventListener(event, resetTimer))
    }
  }, [])

  return <>{children}</>
}
