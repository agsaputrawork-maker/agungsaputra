import { supabase } from '@/lib/supabase'
import { format } from 'date-fns'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import MarkPaidButton from './MarkPaidButton'

export const revalidate = 0

export default async function BillingPage() {
  const { data: clients } = await supabase
    .from('clients')
    .select('*')
    .order('next_settlement_date', { ascending: true })

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">Settlements</h2>
        <p className="text-gray-500 text-xs md:text-sm mt-1 uppercase tracking-widest font-semibold">Track unpaid profit shares</p>
      </div>

      {/* Desktop Table - Hidden on Mobile */}
      <div className="hidden md:block bg-[#0a0a0a] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
        <table className="min-w-full divide-y divide-gray-800">
           <thead className="bg-[#111]">
            <tr>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Client Info</th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Unpaid Amount</th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Due Date</th>
              <th className="px-6 py-5 text-right text-xs font-bold text-gray-400 uppercase tracking-widest">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {clients?.filter(c => Number(c.unpaid_profit) > 0).map((client) => {
              const isOverdue = new Date(client.next_settlement_date) < new Date()
              return (
                <tr key={client.id} className="hover:bg-[#111] transition-colors">
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="text-sm font-black text-gray-100">{client.name}</div>
                    <div className="text-xs text-yellow-500 font-bold mt-1 tracking-wider">{client.mt4_account}</div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                      ${Number(client.unpaid_profit).toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className={`text-sm font-bold ${isOverdue ? 'text-red-500' : 'text-gray-300'}`}>
                      {client.next_settlement_date ? format(new Date(client.next_settlement_date), 'MMM d, yyyy') : 'N/A'}
                    </div>
                    {isOverdue && <span className="text-[10px] text-red-500 font-black uppercase tracking-widest mt-1 block">Overdue</span>}
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                    <MarkPaidButton clientId={client.id} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card List - Hidden on Desktop */}
      <div className="md:hidden grid grid-cols-1 gap-5">
        {clients?.filter(c => Number(c.unpaid_profit) > 0).map((client) => {
          const isOverdue = new Date(client.next_settlement_date) < new Date()
          return (
            <div key={client.id} className="bg-[#111] p-6 rounded-[2rem] border border-gray-800 shadow-xl flex flex-col gap-5 relative overflow-hidden group">
              {isOverdue && <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-500 to-red-800 shadow-[0_0_15px_red]"></div>}
              
              <div className="flex justify-between items-start pl-2">
                <div>
                  <h3 className="font-black text-white text-xl tracking-wide">{client.name}</h3>
                  <p className="text-gray-500 text-xs font-bold mt-1 uppercase tracking-widest">Acc: <span className="text-yellow-500">{client.mt4_account}</span></p>
                </div>
                
                <div className="text-right">
                  <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">To Collect</p>
                  <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 leading-none mt-1">
                    ${Number(client.unpaid_profit).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className={`flex justify-between items-center p-4 rounded-2xl ml-2 border ${isOverdue ? 'bg-red-950/20 border-red-900/30' : 'bg-[#0a0a0a] border-gray-800/50'}`}>
                <div className="flex items-center gap-3">
                  {isOverdue ? <AlertCircle className="w-6 h-6 text-red-500" /> : <CheckCircle2 className="w-6 h-6 text-gray-600" />}
                  <div>
                    <p className={`text-[9px] font-black uppercase tracking-widest ${isOverdue ? 'text-red-500' : 'text-gray-500'}`}>
                      {isOverdue ? 'OVERDUE' : 'DUE DATE'}
                    </p>
                    <p className={`text-sm font-bold mt-0.5 ${isOverdue ? 'text-red-400' : 'text-gray-300'}`}>
                      {client.next_settlement_date ? format(new Date(client.next_settlement_date), 'MMM d, yyyy') : 'N/A'}
                    </p>
                  </div>
                </div>
                
                <MarkPaidButton clientId={client.id} isMobile={true} />
              </div>
            </div>
          )
        })}

        {(!clients || clients.filter(c => Number(c.unpaid_profit) > 0).length === 0) && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-sm font-bold uppercase tracking-widest">All settled. No unpaid profits.</p>
          </div>
        )}
      </div>

      {/* Upcoming Renewals (Regular Plans) */}
      <div className="pt-8">
        <div>
          <h2 className="text-xl md:text-2xl font-black tracking-tight text-white">Upcoming Renewals</h2>
          <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest font-semibold">Track expiring regular subscriptions</p>
        </div>
        
        <div className="mt-6 bg-[#0a0a0a] rounded-2xl border border-gray-800 shadow-xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-800 hidden md:table">
             <thead className="bg-[#111]">
              <tr>
                <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest">Client Info</th>
                <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest">Plan</th>
                <th className="px-6 py-4 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest">Expiry Date</th>
                <th className="px-6 py-4 text-right text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {(() => {
                // Get regular clients
                const regularClients = clients?.filter(c => c.sub_type === 'active' || (c.sub_type === 'lifetime' && c.profit_share_percent === 0)) || []
                
                if (regularClients.length === 0) {
                  return (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center text-gray-600 text-xs font-bold uppercase tracking-widest">No regular subscriptions found.</td>
                    </tr>
                  )
                }

                return regularClients.map((client) => {
                  const isExpired = client.next_settlement_date ? new Date(client.next_settlement_date) < new Date() : false
                  const isLifetime = client.sub_type === 'lifetime'

                  return (
                    <tr key={`reg-${client.id}`} className="hover:bg-[#111] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-black text-gray-200">{client.name}</div>
                        <div className="text-[10px] text-yellow-500 font-bold mt-1 tracking-wider">{client.mt4_account}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${isLifetime ? 'bg-yellow-500/10 text-yellow-500' : 'bg-gray-800 text-gray-300'}`}>
                          {isLifetime ? 'Lifetime' : 'Regular'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-bold ${isExpired ? 'text-red-500' : 'text-gray-300'}`}>
                          {isLifetime ? 'Never' : (client.next_settlement_date ? format(new Date(client.next_settlement_date), 'MMM d, yyyy') : 'N/A')}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        {isLifetime ? (
                          <span className="text-[10px] text-yellow-500 font-black uppercase tracking-widest">Active</span>
                        ) : isExpired ? (
                          <span className="text-[10px] text-red-500 font-black uppercase tracking-widest">Expired</span>
                        ) : (
                          <span className="text-[10px] text-green-500 font-black uppercase tracking-widest">Active</span>
                        )}
                      </td>
                    </tr>
                  )
                })
              })()}
            </tbody>
          </table>
          
          {/* Mobile view for regular plans */}
          <div className="md:hidden divide-y divide-gray-800">
             {(() => {
                const regularClients = clients?.filter(c => c.sub_type === 'active' || (c.sub_type === 'lifetime' && c.profit_share_percent === 0)) || []
                
                if (regularClients.length === 0) {
                  return (
                    <div className="p-8 text-center text-gray-600 text-[10px] font-bold uppercase tracking-widest">No regular subscriptions found.</div>
                  )
                }

                return regularClients.map((client) => {
                  const isExpired = client.next_settlement_date ? new Date(client.next_settlement_date) < new Date() : false
                  const isLifetime = client.sub_type === 'lifetime'

                  return (
                    <div key={`mob-reg-${client.id}`} className="p-4 flex justify-between items-center">
                       <div>
                         <div className="text-sm font-black text-gray-200">{client.name}</div>
                         <div className="text-[10px] text-gray-500 font-bold mt-1 tracking-wider">{isLifetime ? 'LIFETIME' : 'REGULAR'}</div>
                       </div>
                       <div className="text-right">
                         <div className={`text-xs font-bold ${isExpired && !isLifetime ? 'text-red-500' : 'text-gray-300'}`}>
                           {isLifetime ? 'Never Expires' : (client.next_settlement_date ? format(new Date(client.next_settlement_date), 'MMM d, yyyy') : 'N/A')}
                         </div>
                         {isExpired && !isLifetime && <span className="text-[9px] text-red-500 font-black uppercase tracking-widest mt-1 block">Expired</span>}
                       </div>
                    </div>
                  )
                })
              })()}
          </div>
        </div>
      </div>
    </div>
  )
}
