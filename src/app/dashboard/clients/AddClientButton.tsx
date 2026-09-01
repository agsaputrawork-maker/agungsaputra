'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { addClient } from '@/app/actions'

export default function AddClientButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const [planType, setPlanType] = useState('active')
  const [hasProfitShare, setHasProfitShare] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg(null)
    
    const formData = new FormData(e.currentTarget)
    
    // Automatically set zero/null for hidden fields to prevent backend errors
    if (planType === 'active') {
      formData.set('profit_share_percent', '0')
      formData.set('settlement_period', 'monthly')
    } else if (planType === 'lifetime' && !hasProfitShare) {
      formData.set('profit_share_percent', '0')
      formData.set('settlement_period', 'monthly')
      formData.set('duration_days', '0')
    } else if (planType === 'trial') {
      formData.set('duration_days', '0')
    }
    
    const res = await addClient(formData)
    
    setIsSubmitting(false)
    if (res.success) {
      setIsOpen(false)
      // Reset state
      setPlanType('active')
      setHasProfitShare(false)
    } else {
      setErrorMsg(res.error || 'Failed to add client. Check your data.')
    }
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 active:scale-95 text-black p-3 md:px-5 md:py-2.5 rounded-2xl md:rounded-xl text-sm font-black tracking-wide transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center justify-center"
      >
        <span className="hidden md:inline">ADD NEW CLIENT</span>
        <Plus className="w-6 h-6 md:hidden" strokeWidth={3} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111] rounded-3xl border border-gray-800 w-full max-w-md overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-5 border-b border-gray-800">
              <h3 className="font-black text-xl text-white">Add New Client</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors p-1">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
              {errorMsg && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-3 rounded-xl text-xs font-bold">
                  {errorMsg}
                </div>
              )}
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Client Name</label>
                <input required type="text" name="name" className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="e.g. John Doe" />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">MT4/MT5 Account Number</label>
                <input required type="text" name="mt4_account" className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="e.g. 12345678" />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Plan Type</label>
                <select 
                  name="sub_type" 
                  value={planType}
                  onChange={(e) => setPlanType(e.target.value)}
                  className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500 appearance-none"
                >
                  <option value="active">Regular (By Duration)</option>
                  <option value="lifetime">Lifetime (No Expiry)</option>
                  <option value="trial">Account Management (Profit Share)</option>
                </select>
              </div>

              {/* Dynamic Fields based on Plan Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">WhatsApp Number</label>
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="e.g. +628123456789"
                  className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder:text-gray-700"
                />
              </div>
              
              {/* Regular Plan Fields */}
              {planType === 'active' && (
                <div>
                  <label className="block text-[10px] font-bold text-yellow-500 uppercase tracking-widest mb-1">Duration (Days)</label>
                  <input required type="number" name="duration_days" min="1" defaultValue="30" className="w-full bg-[#0a0a0a] border border-yellow-500/30 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" />
                </div>
              )}

              {/* Lifetime Plan Options */}
              {planType === 'lifetime' && (
                <div className="flex items-center gap-3 bg-[#0a0a0a] p-4 rounded-xl border border-gray-800">
                  <input 
                    type="checkbox" 
                    id="hasProfitShare"
                    checked={hasProfitShare}
                    onChange={(e) => setHasProfitShare(e.target.checked)}
                    className="w-5 h-5 accent-yellow-500"
                  />
                  <label htmlFor="hasProfitShare" className="text-sm font-bold text-gray-300">Enable Profit Share?</label>
                </div>
              )}

              {/* Profit Share & Settlement Fields (Visible for Account Management or Lifetime w/ Profit Share) */}
              {(planType === 'Account Management' || (planType === 'Lifetime' && hasProfitShare)) && (
                <div className="grid grid-cols-2 gap-4 p-4 bg-[#0a0a0a] rounded-xl border border-orange-500/30">
                  <div>
                    <label className="block text-[9px] font-bold text-orange-500 uppercase tracking-widest mb-1">Profit Share (%)</label>
                    <input required type="number" name="profit_share_percent" defaultValue="50" min="1" max="100" className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-orange-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-orange-500 uppercase tracking-widest mb-1">Settlement</label>
                    <select name="settlement_period" className="w-full bg-[#050505] border border-gray-800 rounded-xl p-3 text-white focus:outline-none focus:border-orange-500 appearance-none">
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Bi-Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="pt-4 mt-auto">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 disabled:opacity-50 text-black py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
                >
                  {isSubmitting ? 'Saving...' : 'Save Client'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
