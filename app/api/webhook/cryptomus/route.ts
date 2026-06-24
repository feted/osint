import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const apiKey = process.env.CRYPTOMUS_API_KEY

    if (!apiKey) {
      console.error('[v0] Missing Cryptomus API key for webhook verification')
      return NextResponse.json(
        { error: 'Webhook verification failed' },
        { status: 401 }
      )
    }

    // Verify webhook signature
    const signature = req.headers.get('sign')
    if (!signature) {
      console.error('[v0] Missing webhook signature')
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 400 }
      )
    }

    const dataString = JSON.stringify(data)
    const dataBase64 = Buffer.from(dataString).toString('base64')
    const signString = dataBase64 + apiKey
    const expectedSignature = crypto
      .createHash('md5')
      .update(signString)
      .digest('hex')

    if (signature !== expectedSignature) {
      console.error('[v0] Invalid webhook signature')
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }

    // Handle payment status
    const { status, order_id, uuid } = data

    console.log(`[v0] Payment webhook received - Order: ${order_id}, Status: ${status}`)

    if (status === 'paid') {
      // TODO: Update user subscription in your database
      console.log(`[v0] Payment confirmed for order ${order_id}`)
    } else if (status === 'expired') {
      // TODO: Handle expired payment
      console.log(`[v0] Payment expired for order ${order_id}`)
    } else if (status === 'failed') {
      // TODO: Handle failed payment
      console.log(`[v0] Payment failed for order ${order_id}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[v0] Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
