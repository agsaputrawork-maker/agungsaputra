import { supabase } from '@/lib/supabase'
import { format } from 'date-fns'
import { MoreVertical, ShieldAlert, ShieldCheck } from 'lucide-react'
import AddClientButton from './AddClientButton'
import ManageClientButton from './ManageClientButton'
import { getConnectedEAs } from '@/app/actions'
import AutoRefresh from './AutoRefresh'

export const revalidate = 0

export default async function ClientsPage() {
  const { data: clients } = await supabase.from('clients').select('*').order('created_at', { ascending: false })
  const connectedEAs = await getConnectedEAs()

  return (
    <div className="space-y-6 md:space-y-8">
      <AutoRefresh intervalMs={10000} />
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">Clients</h2>
          <p className="text-gray-500 text-xs md:text-sm mt-1 uppercase tracking-widest font-semibold">Manage MT4/MT5 Access</p>
        </div>
        <AddClientButton />
      </div>

      {/* Desktop Table - Hidden on Mobile */}
      <div className="hidden md:block bg-[#0a0a0a] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
        <table className="min-w-full divide-y divide-gray-800">
          <thead className="bg-[#111]">
            <tr>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Client Info</th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Meta Trader Account</th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Plan / Split</th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
              <th className="px-6 py-5 text-right text-xs font-bold text-gray-400 uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {clients?.map((client) => {
              // Map DB sub_types to UI strings
              let displayPlan = 'Regular'
              if (client.sub_type === 'lifetime') displayPlan = 'Lifetime'
              if (client.sub_type === 'trial') displayPlan = 'Account Management'
              
              const isConnected = connectedEAs.includes(client.mt4_account)
              
              return (
              <tr key={client.id} className="hover:bg-[#111] transition-colors">
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="text-sm font-black text-gray-100 tracking-wide">{client.name}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="text-[11px] text-gray-500 font-bold uppercase">Joined {format(new Date(client.created_at), 'MMM d, yyyy')}</div>
                    {client.whatsapp && (
                      <a href={`https://wa.me/${client.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-[10px] text-green-500 bg-green-500/10 px-2 py-0.5 rounded-md font-bold hover:bg-green-500/20 transition-colors">
                        {client.whatsapp}
                      </a>
                    )}
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex flex-col items-start gap-2">
                    <div className="text-sm font-black text-yellow-500 tracking-wider bg-yellow-500/10 inline-block px-3 py-1 rounded-lg border border-yellow-500/20">
                      {client.mt4_account}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse' : 'bg-gray-700'}`}></div>
                      <span className={`text-[9px] font-black uppercase tracking-widest ${isConnected ? 'text-green-500' : 'text-gray-500'}`}>
                        {isConnected ? 'EA Connected' : 'Offline'}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="text-sm font-bold text-gray-300 capitalize">
                    {displayPlan}
                  </div>
                  {client.profit_share_percent > 0 ? (
                    <div className="text-xs text-orange-500 font-black mt-1">{client.profit_share_percent}% Share</div>
                  ) : (
                    <div className="text-xs text-gray-500 font-black mt-1">No Split</div>
                  )}
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <span className={`px-4 py-1.5 inline-flex text-xs font-black uppercase tracking-wider rounded-lg border
                    ${client.status === 'active' ? 'bg-green-500/10 text-green-500 border-green-500/20' : ''}
                    ${client.status === 'suspended' ? 'bg-red-500/10 text-red-500 border-red-500/20' : ''}
                    ${client.status === 'expired' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' : ''}
                  `}>
                    {client.status}
                  </span>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                  <ManageClientButton client={client} />
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>

      {/* Mobile Card List - Hidden on Desktop */}
      <div className="md:hidden grid grid-cols-1 gap-5">
        {clients?.map((client) => {
          let displayPlan = 'Regular'
          if (client.sub_type === 'lifetime') displayPlan = 'Lifetime'
          if (client.sub_type === 'trial') displayPlan = 'Account Management'
          
          const isConnected = connectedEAs.includes(client.mt4_account)

          return (
          <div key={client.id} className="bg-[#111] p-6 rounded-[2rem] border border-gray-800 shadow-xl flex flex-col gap-5 relative">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-black text-white text-xl tracking-wide">{client.name}</h3>
                  {client.whatsapp && (
                    <a href={`https://wa.me/${client.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-[9px] text-green-500 bg-green-500/10 px-2 py-0.5 rounded-md font-bold mt-1 hover:bg-green-500/20 transition-colors">
                      WA
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-1.5">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Acc: <span className="text-yellow-500">{client.mt4_account}</span></p>
                  <div className="flex items-center gap-1.5 bg-gray-900 px-2 py-0.5 rounded-full border border-gray-800">
                    <div className={`w-1.5 h-1.5 rounded-full ${isConnected ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse' : 'bg-gray-700'}`}></div>
                    <span className={`text-[8px] font-black uppercase tracking-widest ${isConnected ? 'text-green-500' : 'text-gray-500'}`}>
                      {isConnected ? 'Connected' : 'Offline'}
                    </span>
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1.5 text-[10px] uppercase tracking-widest font-black rounded-xl border flex items-center gap-1.5 shadow-lg
                ${client.status === 'active' ? 'bg-green-500/10 text-green-500 border-green-500/30 shadow-green-500/10' : ''}
                ${client.status === 'suspended' ? 'bg-red-500/10 text-red-500 border-red-500/30 shadow-red-500/10' : ''}
                ${client.status === 'expired' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30 shadow-yellow-500/10' : ''}
              `}>
                {client.status === 'active' ? <ShieldCheck className="w-3.5 h-3.5" /> : <ShieldAlert className="w-3.5 h-3.5" />}
                {client.status}
              </span>
            </div>

            <div className="flex items-center gap-3 bg-[#0a0a0a] rounded-2xl p-4 border border-gray-800/50">
              <div className="flex-1">
                <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Plan</p>
                <p className="text-sm font-bold text-gray-200 capitalize mt-1">{displayPlan}</p>
              </div>
              <div className="w-px h-10 bg-gray-800"></div>
              <div className="flex-1 pl-3">
                <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Profit Split</p>
                {client.profit_share_percent > 0 ? (
                  <p className="text-sm font-black text-orange-500 mt-1">{client.profit_share_percent}% / {(100 - Number(client.profit_share_percent))}%</p>
                ) : (
                  <p className="text-sm font-black text-gray-600 mt-1">N/A</p>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center pt-1">
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Joined {format(new Date(client.created_at), 'MMM yy')}</p>
              <ManageClientButton client={client} isMobile={true} />
            </div>
          </div>
        )})}
        
        {(!clients || clients.length === 0) && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-sm font-bold uppercase tracking-widest">No clients found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
