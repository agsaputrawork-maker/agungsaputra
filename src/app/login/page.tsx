'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Eye, EyeOff, AlertCircle, Loader2, User, Lock, Target, ShieldCheck, BarChart3 } from 'lucide-react'
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
      if (result && !result.success) {
        setIsLoading(false)
        setErrorMsg(result.error === 'Invalid login credentials' ? 'Email or Password incorrect.' : result.error)
      }
    } catch (error) {
      if (error && typeof error === 'object' && 'digest' in error) {
        throw error
      }
      setIsLoading(false)
      setErrorMsg('An unexpected error occurred.')
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 lg:p-12 relative overflow-hidden">
      
      {/* Background Texture/Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-900/10 via-[#050505] to-[#050505]"></div>
      
      {/* Decorative Golden Lines (Simulated with div rotation) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-yellow-500/5 to-transparent rotate-45 transform origin-top-right blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-yellow-500/5 to-transparent rotate-45 transform origin-bottom-left blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        
        {/* LEFT SIDE (Desktop Only Logo & Features) */}
        <div className="hidden lg:flex flex-col items-start flex-1 w-full">
          <div className="relative w-72 h-72 mb-4">
             <Image src="https://s6.imgcdn.dev/Y8iVa0.png" alt="GOLDZONFIRE Logo" fill className="object-contain drop-shadow-[0_0_30px_rgba(234,179,8,0.2)]" />
          </div>
          <h1 className="text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 mb-2">
            GOLDZONFIRE
          </h1>
          <p className="text-yellow-600 text-sm tracking-[0.3em] uppercase font-semibold mb-16">
            Premium Trading Signals
          </p>

          <div className="flex gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col items-start max-w-[140px]">
              <div className="w-12 h-12 rounded-full border border-yellow-600/40 flex items-center justify-center text-yellow-500 mb-4 bg-yellow-500/5">
                 <Target className="w-5 h-5" />
              </div>
              <h3 className="text-yellow-500 text-xs font-bold tracking-wider mb-2">ACCURATE</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed">High accuracy trading signals</p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-start max-w-[140px]">
              <div className="w-12 h-12 rounded-full border border-yellow-600/40 flex items-center justify-center text-yellow-500 mb-4 bg-yellow-500/5">
                 <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-yellow-500 text-xs font-bold tracking-wider mb-2">RELIABLE</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed">Trusted by thousands of traders</p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-start max-w-[140px]">
              <div className="w-12 h-12 rounded-full border border-yellow-600/40 flex items-center justify-center text-yellow-500 mb-4 bg-yellow-500/5">
                 <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-yellow-500 text-xs font-bold tracking-wider mb-2">PROFESSIONAL</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed">Designed for serious traders and investors</p>
            </div>
          </div>
          
          <div className="mt-16 text-gray-600 text-xs tracking-wider">
            &copy; 2026 GOLDZONFIRE. All Rights Reserved.
          </div>
        </div>

        {/* RIGHT SIDE (Login Card & Mobile Logo) */}
        <div className="w-full max-w-md flex flex-col items-center">
          
          {/* Mobile Logo (Hidden on Desktop) */}
          <div className="lg:hidden flex flex-col items-center mb-8">
            <div className="relative w-48 h-48 mb-2">
               <Image src="https://s6.imgcdn.dev/Y8iVa0.png" alt="GOLDZONFIRE Logo" fill className="object-contain drop-shadow-[0_0_20px_rgba(234,179,8,0.2)]" />
            </div>
            <h1 className="text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 mb-1">
              GOLDZONFIRE
            </h1>
            <p className="text-yellow-600 text-[10px] tracking-[0.2em] uppercase font-semibold">
              Premium Trading Signals
            </p>
          </div>

          {/* Login Card */}
          <div className="w-full bg-[#0d0d0d] p-8 lg:p-10 rounded-[2rem] border border-yellow-900/30 shadow-[0_0_40px_rgba(0,0,0,0.8)] relative">
            
            <div className="text-center mb-10">
              <h2 className="text-yellow-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Welcome Back</h2>
              <h3 className="text-white text-xl lg:text-2xl font-medium mb-3">Login to Your Account</h3>
              <p className="text-gray-500 text-xs lg:text-sm">Access your account and continue your trading journey</p>
            </div>

            {errorMsg && (
              <div className="mb-6 flex items-start gap-3 bg-red-950/30 border border-red-900/50 p-4 rounded-xl">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <p className="text-xs text-red-400 leading-relaxed">{errorMsg}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-yellow-600/70" />
                </div>
                <input 
                  required 
                  name="email" 
                  type="email" 
                  disabled={isLoading}
                  className="w-full bg-transparent border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-yellow-600 focus:bg-[#111] transition-all disabled:opacity-50" 
                  placeholder="Email or Username" 
                />
              </div>
              
              {/* Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-yellow-600/70" />
                </div>
                <input 
                  required 
                  name="password" 
                  type={showPassword ? "text" : "password"} 
                  disabled={isLoading}
                  className="w-full bg-transparent border border-gray-800 rounded-xl py-4 pl-12 pr-12 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-yellow-600 focus:bg-[#111] transition-all disabled:opacity-50" 
                  placeholder="Password" 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-yellow-500 transition-colors focus:outline-none disabled:opacity-50"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between text-xs lg:text-sm">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer appearance-none w-4 h-4 border border-gray-700 rounded bg-transparent checked:bg-yellow-600 checked:border-yellow-600 transition-colors cursor-pointer" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none text-black">
                      <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3"><path d="M3 7.5L6 10.5L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Remember Me</span>
                </label>
                
                <a href="#" className="text-yellow-600 hover:text-yellow-500 transition-colors">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full relative group overflow-hidden bg-gradient-to-b from-[#d4af37] via-[#aa7c11] to-[#6a4d0b] text-black font-bold py-4 rounded-xl text-sm tracking-widest transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
              >
                {/* Button Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-200/20 to-yellow-100/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>AUTHENTICATING...</span>
                    </>
                  ) : (
                    <span>LOGIN</span>
                  )}
                </div>
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  )
}
