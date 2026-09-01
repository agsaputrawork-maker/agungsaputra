import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { mt4_account } = body

    if (!mt4_account) {
      return NextResponse.json({ error: 'MT4 Account is required' }, { status: 400 })
    }

    const { data: client, error } = await supabase
      .from('clients')
      .select('*')
      .eq('mt4_account', mt4_account)
      .single()

    if (error || !client) {
      return NextResponse.json({ authorized: false, reason: 'Account not found or unregistered.' }, { status: 404 })
    }

    // 1. If already suspended or expired, block immediately
    if (client.status !== 'active') {
      return NextResponse.json({ authorized: false, reason: `Account is currently ${client.status}.` }, { status: 403 })
    }

    // 2. Auto-Suspend Logic: Check if the settlement/expiry date has passed
    if (client.next_settlement_date) {
      const dueDate = new Date(client.next_settlement_date)
      const now = new Date()

      if (dueDate < now) {
        // The date has passed. They are either expired (Regular) or overdue (Account Management)
        const newStatus = client.sub_type === 'regular' ? 'expired' : 'suspended'
        
        // Auto-update database
        await supabase
          .from('clients')
          .update({ status: newStatus })
          .eq('id', client.id)

        return NextResponse.json({ 
          authorized: false, 
          reason: client.sub_type === 'regular' 
            ? 'Plan expired. Please renew.' 
            : 'Account suspended due to overdue profit settlement.' 
        }, { status: 403 })
      }
    }

    // 3. Authorized successfully
    return NextResponse.json({
      authorized: true,
      profit_share_percent: client.profit_share_percent,
      client_name: client.name,
      sub_type: client.sub_type
    })

  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
