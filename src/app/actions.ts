'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export async function addClient(formData: FormData) {
  const name = formData.get('name') as string
  const mt4_account = formData.get('mt4_account') as string
  const rawPlanType = formData.get('sub_type') as string
  const profit_share_percent = parseInt(formData.get('profit_share_percent') as string) || 0
  const duration_days = parseInt(formData.get('duration_days') as string) || 0
  const settlement_period = formData.get('settlement_period') as string
  const whatsapp = formData.get('whatsapp') as string || ''

  let mappedSubType = 'active'
  let sub_end_date = null
  let next_settlement_date = null

  if (rawPlanType === 'regular') {
    mappedSubType = 'active'
    const end = new Date()
    end.setDate(end.getDate() + duration_days)
    sub_end_date = end.toISOString()
    
    const settle = new Date()
    settle.setDate(settle.getDate() + 30) // Set arbitrary future date for sorting
    next_settlement_date = settle.toISOString()

  } else if (rawPlanType === 'lifetime') {
    mappedSubType = 'lifetime'
    const settle = new Date()
    settle.setDate(settle.getDate() + 30) // Set arbitrary future date
    next_settlement_date = settle.toISOString()

  } else if (rawPlanType === 'account_management') {
    mappedSubType = 'trial'
    
    // Calculate next settlement date based on period
    const nextSettle = new Date()
    if (settlement_period === 'weekly') {
      nextSettle.setDate(nextSettle.getDate() + 7)
    } else if (settlement_period === 'biweekly') {
      nextSettle.setDate(nextSettle.getDate() + 14)
    } else {
      nextSettle.setMonth(nextSettle.getMonth() + 1)
    }
    next_settlement_date = nextSettle.toISOString()
  }

  const { error } = await supabase
    .from('clients')
    .insert([{ 
      name, 
      mt4_account, 
      sub_type: mappedSubType,
      profit_share_percent,
      sub_end_date,
      settlement_period: rawPlanType === 'account_management' ? settlement_period : null,
      next_settlement_date,
      whatsapp,
      status: 'active' 
    }])

  if (error) {
    console.error(error)
    return { success: false, error: error.message }
  }

  revalidatePath('/dashboard/clients')
  revalidatePath('/dashboard')
  return { success: true }
}

export async function markPaid(clientId: string) {
  const { data: client } = await supabase.from('clients').select('settlement_period').eq('id', clientId).single()
  
  if (!client) return { success: false, error: 'Client not found' }
  
  const next_settlement_date = new Date()
  if (client.settlement_period === 'weekly') next_settlement_date.setDate(next_settlement_date.getDate() + 7)
  else if (client.settlement_period === 'biweekly') next_settlement_date.setDate(next_settlement_date.getDate() + 14)
  else if (client.settlement_period === 'monthly') next_settlement_date.setMonth(next_settlement_date.getMonth() + 1)
  else if (client.settlement_period === 'none') {
    // Should not happen for billing, but just in case
    return { success: false, error: 'Client has no settlement period' }
  }

  const { error } = await supabase
    .from('clients')
    .update({ 
      unpaid_profit: 0,
      next_settlement_date: next_settlement_date.toISOString()
    })
    .eq('id', clientId)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath('/dashboard/billing')
  revalidatePath('/dashboard')
  return { success: true }
}

export async function updateClient(formData: FormData) {
  const id = formData.get('id') as string
  const name = formData.get('name') as string
  const mt4_account = formData.get('mt4_account') as string
  const status = formData.get('status') as string
  
  const rawPlanType = formData.get('sub_type') as string
  const profit_share_percent = parseInt(formData.get('profit_share_percent') as string) || 0
  const duration_days = parseInt(formData.get('duration_days') as string) || 0
  const settlement_period = formData.get('settlement_period') as string
  const whatsapp = formData.get('whatsapp') as string || ''

  if (!id || !name || !mt4_account) {
    return { success: false, error: 'Missing required fields' }
  }

  let mappedSubType = 'active'
  let sub_end_date = null
  let next_settlement_date = null

  if (rawPlanType === 'regular') {
    mappedSubType = 'active'
    const end = new Date()
    end.setDate(end.getDate() + duration_days)
    sub_end_date = end.toISOString()
    
    const settle = new Date()
    settle.setDate(settle.getDate() + 30)
    next_settlement_date = settle.toISOString()
  } else if (rawPlanType === 'lifetime') {
    mappedSubType = 'lifetime'
    const settle = new Date()
    settle.setDate(settle.getDate() + 30)
    next_settlement_date = settle.toISOString()
  } else if (rawPlanType === 'account_management') {
    mappedSubType = 'trial'
    const nextSettle = new Date()
    if (settlement_period === 'weekly') {
      nextSettle.setDate(nextSettle.getDate() + 7)
    } else if (settlement_period === 'biweekly') {
      nextSettle.setDate(nextSettle.getDate() + 14)
    } else {
      nextSettle.setMonth(nextSettle.getMonth() + 1)
    }
    next_settlement_date = nextSettle.toISOString()
  }

  // Build update object
  const updates: any = {
    name,
    mt4_account,
    status,
    sub_type: mappedSubType,
    profit_share_percent,
    sub_end_date,
    settlement_period: rawPlanType === 'account_management' ? settlement_period : null,
    next_settlement_date,
    whatsapp
  }

  const { error } = await supabase
    .from('clients')
    .update(updates)
    .eq('id', id)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath('/dashboard/clients')
  revalidatePath('/dashboard')
  return { success: true }
}

export async function deleteClient(id: string) {
  if (!id) return { success: false, error: 'Client ID is missing' }

  const { error } = await supabase
    .from('clients')
    .delete()
    .eq('id', id)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath('/dashboard/clients')
  revalidatePath('/dashboard')
  return { success: true }
}

export async function checkServerStatus() {
  const host = process.env.TCP_HOST || 'localhost'
  const port = parseInt(process.env.TCP_PORT || '8080')

  return new Promise<{ online: boolean }>((resolve) => {
    try {
      const net = require('net')
      const socket = new net.Socket()
      
      socket.setTimeout(2000)
      socket.on('connect', () => {
        socket.destroy()
        resolve({ online: true })
      })
      socket.on('timeout', () => {
        socket.destroy()
        resolve({ online: false })
      })
      socket.on('error', () => {
        resolve({ online: false })
      })
      socket.connect(port, host)
    } catch (e) {
      resolve({ online: false })
    }
  })
}

export async function getConnectedEAs() {
  const apiUrl = process.env.PYTHON_API_URL || 'http://localhost:8080'

  try {
    const res = await fetch(`${apiUrl}/status`, { cache: 'no-store', signal: AbortSignal.timeout(2000) })
    if (res.ok) {
      const data = await res.json()
      return data.connected_eas || []
    }
  } catch (e) {
    // ignore
  }
  return []
}
