'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, Receipt, LogOut } from 'lucide-react'
import { logout } from '@/app/login/actions'
import AutoLogoutProvider from './AutoLogoutProvider'
import ServerStatusBadge from './ServerStatusBadge'

import FreeSignalToggle from './FreeSignalToggle'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Clients', href: '/dashboard/clients', icon: Users },
    { name: 'Billing', href: '/dashboard/billing', icon: Receipt },
  ]

  return (
    <AutoLogoutProvider>
      <div className="flex h-screen bg-[#050505] text-gray-200 font-sans md:flex-row flex-col-reverse">
        
        {/* Floating Bottom Nav for Mobile / Sidebar for Desktop */}
        <nav className="fixed md:static bottom-0 w-full md:w-64 bg-[#0a0a0a]/90 backdrop-blur-xl border-t md:border-r md:border-t-0 border-gray-800 md:flex-col flex justify-around md:justify-start px-2 py-2 md:p-6 z-50 pb-[calc(0.5rem+env(safe-area-inset-bottom,0))]">
          <div className="hidden md:flex flex-col items-center mb-10 mt-4">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
              <Image src="https://s6.imgcdn.dev/Y8iVa0.png" alt="GOLDZONFIRE" fill className="object-cover" />
            </div>
            <h1 className="mt-4 font-black text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-orange-500">
              GOLDZONFIRE
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Admin Panel</p>
          </div>

          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex md:flex-row flex-col items-center justify-center md:justify-start gap-1 md:gap-4 px-2 py-2 md:px-4 md:py-3 md:mb-3 rounded-xl md:rounded-2xl text-[10px] md:text-sm font-bold transition-all duration-300 w-full md:w-auto ${
                  isActive 
                    ? 'text-yellow-400 md:bg-yellow-500/10 shadow-[0_0_15px_rgba(250,204,21,0.05)] md:shadow-[0_0_15px_rgba(250,204,21,0.1)]' 
                    : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'
                }`}
              >
                <Icon className={`w-5 h-5 md:w-5 md:h-5 ${isActive ? 'text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]' : 'text-gray-500'}`} strokeWidth={isActive ? 2.5 : 2} />
                <span className="mt-1 md:mt-0">{item.name}</span>
              </Link>
            )
          })}

          <div className="hidden md:block mt-auto pt-6 border-t border-gray-800 space-y-4">
            <ServerStatusBadge />
            <FreeSignalToggle />
            <form action={logout}>
              <button className="flex w-full items-center gap-4 px-4 py-3 rounded-2xl hover:bg-red-500/10 text-red-500 text-sm font-bold transition-all">
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </form>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto relative w-full">
          {/* Mobile Header */}
          <header className="md:hidden sticky top-0 bg-[#050505]/95 backdrop-blur-xl border-b border-gray-800 px-4 py-3 flex justify-between items-center z-40">
            <div className="flex items-center gap-2">
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-yellow-500/50">
                <Image src="https://s6.imgcdn.dev/Y8iVa0.png" alt="GOLDZONFIRE" fill className="object-cover" />
              </div>
              <h1 className="font-black text-base tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                GOLDZONFIRE
              </h1>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <FreeSignalToggle />
              <ServerStatusBadge />
              <form action={logout}>
                <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-800 rounded-full active:scale-95 transition-all">
                  <LogOut className="w-5 h-5" />
                </button>
              </form>
            </div>
          </header>

          <div className="p-4 md:p-10 max-w-5xl mx-auto w-full pb-28 md:pb-10">
            {children}
          </div>
        </main>
      </div>
    </AutoLogoutProvider>
  )
}
