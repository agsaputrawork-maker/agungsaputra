import { supabase } from '@/lib/supabase'
import AutoRefresh from './clients/AutoRefresh'
import { getConnectedEAs } from '@/app/actions'

export const revalidate = 0

export default async function DashboardOverview() {
  const { data: clients } = await supabase.from('clients').select('*')
  const connectedEAs = await getConnectedEAs()
  
  const totalClients = clients?.length || 0
  const activeClients = connectedEAs.length || 0
  const totalUnpaid = clients?.reduce((acc, curr) => acc + Number(curr.unpaid_profit), 0) || 0
  
  const avgSplit = totalClients > 0 
    ? ((clients?.reduce((acc, curr) => acc + Number(curr.profit_share_percent), 0) || 0) / totalClients).toFixed(0)
    : 0
    
  const lifetimeCount = clients?.filter(c => c.sub_type === 'lifetime').length || 0
  const activePlanCount = clients?.filter(c => c.sub_type === 'active').length || 0

  return (
    <div className="w-full space-y-4 md:space-y-8">
      <AutoRefresh intervalMs={15000} />
      {/* Page Title (Visible on both mobile and desktop now for context) */}
      <div className="mb-2">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">Overview</h2>
        <p className="text-gray-400 text-xs md:text-sm mt-1 uppercase tracking-widest font-semibold">System Summary</p>
      </div>
      
      {/* 2x2 Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        
        {/* Card 1: Active Clients (Full Width on Mobile) */}
        <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 p-5 rounded-2xl shadow-[0_8px_30px_rgba(234,88,12,0.2)] text-white relative overflow-hidden group">
          <div className="absolute top-1/2 -translate-y-1/2 right-4 opacity-20">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_white]"></div>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/90">Active EA Connected</p>
            </div>
            <p className="text-5xl font-black mt-2 drop-shadow-md">{activeClients}</p>
            
            <div className="mt-5">
              <div className="w-full bg-black/20 h-1.5 rounded-full overflow-hidden backdrop-blur-sm">
                 <div className="bg-white h-full w-full shadow-[0_0_10px_white]"></div>
              </div>
              <p className="text-[9px] font-bold text-white/80 mt-2 uppercase tracking-widest">Receiving Realtime Signals</p>
            </div>
          </div>
        </div>

        {/* Card 2: Total Clients (Half Width on Mobile) */}
        <div className="col-span-1 bg-[#111] p-5 rounded-2xl border border-gray-800/80 shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div>
            <svg className="w-6 h-6 text-gray-600 mb-3" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Total Clients</p>
          </div>
          <div className="mt-4">
            <p className="text-3xl font-black text-white">{totalClients}</p>
            <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden mt-3">
               <div className="bg-gray-500 h-full w-3/4"></div>
            </div>
          </div>
        </div>
        
        {/* Card 3: Unpaid Profit (Half Width on Mobile) */}
        <div className="col-span-1 bg-[#111] p-5 rounded-2xl border border-gray-800/80 shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div>
            <svg className="w-6 h-6 text-yellow-600 mb-3" fill="currentColor" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Unpaid Profit</p>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 truncate">
              ${totalUnpaid.toFixed(2)}
            </p>
            <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden mt-3">
               <div className="bg-yellow-500 h-full w-1/3 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
            </div>
          </div>
        </div>

        {/* Card 4: Plan & Split Summary (Full Width on Mobile) */}
        <div className="col-span-2 md:col-span-1 bg-[#111] p-5 rounded-2xl border border-gray-800/80 shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v2h2v5h2v-5h2v-2zM14 7h4v2h-4V7zm0 4h4v2h-4v-2zm0 4h4v2h-4v-2z"/></svg>
                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Plan & Split</p>
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-4xl font-black text-white">{avgSplit}</p>
                <p className="text-xl font-bold text-orange-500">%</p>
              </div>
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-600 mt-1">Average Share</p>
            </div>
            
            <div className="bg-black/50 p-3 rounded-xl border border-gray-800 min-w-[100px]">
              <div className="flex justify-between items-center mb-2">
                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Lifetime</p>
                <p className="text-sm font-black text-yellow-500">{lifetimeCount}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Regular</p>
                <p className="text-sm font-black text-orange-500">{activePlanCount}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-5">
             <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden flex">
               <div className="bg-yellow-500 h-full" style={{ width: `${(lifetimeCount/totalClients)*100 || 0}%` }}></div>
               <div className="bg-orange-500 h-full" style={{ width: `${(activePlanCount/totalClients)*100 || 0}%` }}></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
