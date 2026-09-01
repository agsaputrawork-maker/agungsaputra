'use client'

import { useState } from 'react'
import { markPaid } from '@/app/actions'

export default function MarkPaidButton({ clientId, isMobile = false }: { clientId: string, isMobile?: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleMarkPaid = async () => {
    if (!confirm('Are you sure this client has paid their profit share?')) return
    
    setIsSubmitting(true)
    const res = await markPaid(clientId)
    setIsSubmitting(false)
    
    if (!res.success) {
      alert(res.error || 'Failed to update billing')
    }
  }

  if (isMobile) {
    return (
      <button 
        onClick={handleMarkPaid}
        disabled={isSubmitting}
        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 disabled:opacity-50 text-black font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-xl active:scale-95 transition-all shadow-[0_0_15px_rgba(34,197,94,0.2)]"
      >
        {isSubmitting ? '...' : 'PAID'}
      </button>
    )
  }

  return (
    <button 
      onClick={handleMarkPaid}
      disabled={isSubmitting}
      className="bg-green-500/10 border border-green-500/30 text-green-500 hover:bg-green-500 hover:text-black disabled:opacity-50 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all"
    >
      {isSubmitting ? 'Updating...' : 'Mark Paid'}
    </button>
  )
}
