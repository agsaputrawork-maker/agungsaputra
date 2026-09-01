import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// The fixed magic number assigned to our EA so we don't calculate manual trades
const EA_MAGIC_NUMBER = '777999' // You can change this to match your EA's magic number

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { mt4_account, profit_amount, magic_number, ticket_id } = body

    if (!mt4_account || profit_amount === undefined) {
      return NextResponse.json({ error: 'MT4 Account and profit_amount are required' }, { status: 400 })
    }

    // 0. VERY IMPORTANT: Prevent counting manual trades or other EA trades!
    if (magic_number !== EA_MAGIC_NUMBER) {
      return NextResponse.json({ 
        success: false, 
        message: 'Trade ignored. Magic number does not match our EA. (Manual trade or different EA)' 
      }, { status: 200 }) // Return 200 so the EA doesn't panic, just ignores it
    }

    // 1. Fetch current client data
    const { data: client, error } = await supabase
      .from('clients')
      .select('id, unpaid_profit, profit_share_percent, status')
      .eq('mt4_account', mt4_account)
      .single()

    if (error || !client) {
      return NextResponse.json({ error: 'Client not found' }, { status: 404 })
    }

    if (client.status !== 'active') {
      return NextResponse.json({ error: 'Client is not active' }, { status: 403 })
    }

    // 2. Calculate the split (e.g. if profit is $100 and share is 50%, add $50 to unpaid)
    const numericProfit = Number(profit_amount)
    const adminCut = numericProfit * (client.profit_share_percent / 100)

    let newUnpaidProfit = Number(client.unpaid_profit) + adminCut
    if (newUnpaidProfit < 0) newUnpaidProfit = 0 // Optionally prevent negative unpaid balance

    // 3. Update database
    const { error: updateError } = await supabase
      .from('clients')
      .update({ unpaid_profit: newUnpaidProfit })
      .eq('id', client.id)

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 })
    }

    return NextResponse.json({ 
      success: true, 
      added_to_unpaid: adminCut,
      new_unpaid_balance: newUnpaidProfit,
      ticket_id: ticket_id
    })

  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
