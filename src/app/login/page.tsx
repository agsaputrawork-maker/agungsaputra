'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Eye, EyeOff, AlertCircle, Loader2 } from 'lucide-react'
import { login } from './actions'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg('')
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    
    try {
      const result = await login(formData)
      // If login is successful, Next.js 'redirect' will throw an internal error to navigate
      // If it doesn't throw, it means we got an error object back
      if (result && !result.success) {
        setIsLoading(false)
        // Clean up Supabase's generic error message for better UX
        setErrorMsg(result.error === 'Invalid login credentials' ? 'Email or Password incorrect.' : result.error)
      }
    } catch (error) {
      // Next.js redirect throws an error to navigate, so we don't catch it
      if (error && typeof error === 'object' && 'digest' in error) {
        throw error
      }
      setIsLoading(false)
      setErrorMsg('An unexpected error occurred.')
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-[#111] p-8 rounded-[2.5rem] border border-gray-800 shadow-2xl relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.2)] mb-4 relative">
             <Image src="https://s6.imgcdn.dev/Y8iVa0.png" alt="GOLDZONFIRE" fill className="object-cover" />
          </div>
          <h1 className="font-black text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            GOLDZONFIRE
          </h1>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-bold">Admin Portal</p>
        </div>

        {/* Error Message Banner */}
        {errorMsg && (
          <div className="relative z-10 mb-6 flex items-start gap-3 bg-red-950/40 border border-red-900/50 p-4 rounded-2xl animate-in slide-in-from-top-2 fade-in duration-300">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <p className="text-xs font-semibold text-red-400 leading-relaxed">{errorMsg}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Email</label>
            <div className="relative">
              <input 
                required 
                name="email" 
                type="email" 
                disabled={isLoading}
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-2xl p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors disabled:opacity-50" 
                placeholder="admin@goldzonfire.com" 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Password</label>
            <div className="relative">
              <input 
                required 
                name="password" 
                type={showPassword ? "text" : "password"} 
                disabled={isLoading}
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-2xl p-4 pr-12 text-white focus:outline-none focus:border-yellow-500 transition-colors disabled:opacity-50" 
                placeholder="••••••••" 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-yellow-500 transition-colors focus:outline-none disabled:opacity-50"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 disabled:from-yellow-600 disabled:to-orange-700 text-black py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.2)] disabled:shadow-none"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <span>Secure Sign In</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
