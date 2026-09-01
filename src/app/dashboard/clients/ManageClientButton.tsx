'use client'

import { useState } from 'react'
import { MoreVertical, X, Trash2, AlertTriangle } from 'lucide-react'
import { updateClient, deleteClient } from '@/app/actions'

export default function ManageClientButton({ client, isMobile = false }: { client: any, isMobile?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [planType, setPlanType] = useState(client.sub_type || 'active')
  const [hasProfitShare, setHasProfitShare] = useState(client.profit_share_percent > 0)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg(null)
    
    const formData = new FormData(e.currentTarget)
    formData.append('id', client.id)
    
    if (planType === 'active') {
      formData.set('profit_share_percent', '0')
      formData.set('settlement_period', 'monthly') // Fallback
    } else if (planType === 'lifetime' && !hasProfitShare) {
      formData.set('profit_share_percent', '0')
      formData.set('settlement_period', 'monthly')
      formData.set('duration_days', '0')
    } else if (planType === 'trial') {
      formData.set('duration_days', '0')
    }
    
    const res = await updateClient(formData)
    
    setIsSubmitting(false)
    if (res.success) {
      setIsOpen(false)
    } else {
      setErrorMsg(res.error || 'Failed to update client. Please check the data format.')
    }
  }

  const handleDelete = async () => {
    setIsSubmitting(true)
    setErrorMsg(null)
    const res = await deleteClient(client.id)
    setIsSubmitting(false)
    if (res.success) {
      setIsOpen(false)
    } else {
      setErrorMsg(res.error || 'Failed to delete client')
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(() => setIsDeleting(false), 200) // Reset state after animation
  }

  return (
    <>
      {isMobile ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="text-yellow-500 font-black text-xs uppercase tracking-widest active:scale-95 transition-transform bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-xl"
        >
          Manage
        </button>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="text-gray-500 hover:text-yellow-400 transition-colors p-2 rounded-xl hover:bg-gray-800"
        >
          <MoreVertical className="w-5 h-5" />
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111] rounded-3xl border border-gray-800 w-full max-w-md overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-5 border-b border-gray-800">
              <h3 className="font-black text-xl text-white">
                {isDeleting ? 'Delete Client' : 'Manage Client'}
              </h3>
              <button onClick={handleClose} className="text-gray-500 hover:text-white transition-colors p-1">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {!isDeleting ? (
              <form onSubmit={handleSubmit} className="p-5 space-y-4 text-left">
                {errorMsg && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-3 rounded-xl text-xs font-bold">
                    {errorMsg}
                  </div>
                )}
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Client Name</label>
                  <input required type="text" name="name" defaultValue={client.name} className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" />
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">MT4/MT5 Account Number</label>
                  <input required type="text" name="mt4_account" defaultValue={client.mt4_account} className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Status</label>
                  <select 
                    name="status" 
                    defaultValue={client.status}
                    className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500 appearance-none font-bold mb-4"
                  >
                    <option value="active" className="text-green-500">Active</option>
                    <option value="suspended" className="text-red-500">Suspended</option>
                    <option value="expired" className="text-yellow-500">Expired</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">WhatsApp Number</label>
                  <input type="text" name="whatsapp" defaultValue={client.whatsapp || ''} placeholder="e.g. +628123456789" className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors mb-4" />
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Change Plan Type</label>
                  <select 
                    name="sub_type" 
                    value={planType}
                    onChange={(e) => setPlanType(e.target.value)}
                    className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500 appearance-none mb-4"
                  >
                    <option value="active">Regular (By Duration)</option>
                    <option value="lifetime">Lifetime (No Expiry)</option>
                    <option value="trial">Account Management (Profit Share)</option>
                  </select>
                </div>

                {planType === 'active' && (
                  <div>
                    <label className="block text-[10px] font-bold text-yellow-500 uppercase tracking-widest mb-1">Add Duration (Days)</label>
                    <input type="number" name="duration_days" min="0" defaultValue="0" className="w-full bg-[#0a0a0a] border border-yellow-500/30 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" />
                    <p className="text-[9px] text-gray-500 mt-1">Leave 0 to keep current expiry date.</p>
                  </div>
                )}

                {planType === 'lifetime' && (
                  <div className="flex items-center gap-3 bg-[#0a0a0a] p-4 rounded-xl border border-gray-800">
                    <input 
                      type="checkbox" 
                      id={`hasProfitShare_${client.id}`}
                      checked={hasProfitShare}
                      onChange={(e) => setHasProfitShare(e.target.checked)}
                      className="w-5 h-5 accent-yellow-500"
                    />
                    <label htmlFor={`hasProfitShare_${client.id}`} className="text-sm font-bold text-gray-300">Enable Profit Share?</label>
                  </div>
                )}

                {(planType === 'trial' || (planType === 'lifetime' && hasProfitShare)) && (
                  <div className="grid grid-cols-2 gap-4 p-4 bg-[#0a0a0a] rounded-xl border border-orange-500/30">
                    <div>
                      <label className="block text-[9px] font-bold text-orange-500 uppercase tracking-widest mb-1">Profit Share (%)</label>
                      <input required type="number" name="profit_share_percent" defaultValue={client.profit_share_percent || 50} min="1" max="100" className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-orange-500 uppercase tracking-widest mb-1">Settlement</label>
                      <select name="settlement_period" defaultValue={client.settlement_period || 'monthly'} className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-orange-500 appearance-none">
                        <option value="weekly">Weekly</option>
                        <option value="biweekly">Bi-Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="pt-4 flex flex-col gap-3 mt-auto">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 disabled:opacity-50 text-black py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
                  >
                    {isSubmitting ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setIsDeleting(true)}
                    className="w-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-500 py-3 rounded-xl font-bold text-sm transition-all active:scale-95 flex justify-center items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Client Completely
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4 border border-red-500/20 animate-pulse">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <h4 className="text-white font-black text-xl mb-2">Are you absolutely sure?</h4>
                <p className="text-gray-400 text-sm font-medium mb-8 leading-relaxed">
                  You are about to permanently delete <strong className="text-white">{client.name}</strong> from the system. This action cannot be undone and their EA will be permanently disconnected.
                </p>
                <div className="flex gap-3 w-full">
                  <button 
                    onClick={() => setIsDeleting(false)}
                    disabled={isSubmitting}
                    className="flex-1 bg-[#222] hover:bg-[#333] text-white py-3 rounded-xl font-bold transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleDelete}
                    disabled={isSubmitting}
                    className="flex-1 bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl font-black shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all"
                  >
                    {isSubmitting ? 'Deleting...' : 'Yes, Delete!'}
                  </button>
                </div>
                {errorMsg && (
                  <div className="mt-4 bg-red-500/10 border border-red-500/30 text-red-500 p-3 rounded-xl text-xs font-bold w-full">
                    {errorMsg}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
