import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(req: NextRequest) {
  try {
    const { planName, planPrice, userEmail } = await req.json()

    // Validate required fields
    if (!planName || !planPrice) {
      return NextResponse.json(
        { error: 'Missing plan details' },
        { status: 400 }
      )
    }

    const merchantId = process.env.NEXT_PUBLIC_CRYPTOMUS_MERCHANT_ID
    const apiKey = process.env.CRYPTOMUS_API_KEY

    if (!merchantId || !apiKey) {
      console.error('[v0] Missing Cryptomus credentials')
      return NextResponse.json(
        { error: 'Payment service not configured' },
        { status: 500 }
      )
    }

    // Generate unique order ID
    const orderId = `osint_${planName.toLowerCase()}_${Date.now()}`

    // Prepare payment data
    const paymentData = {
      order_id: orderId,
      amount: parseFloat(planPrice.replace('$', '')),
      currency: 'USD',
      url_return: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/success`,
      url_cancel: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/cancel`,
      url_callback: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/webhook/cryptomus`,
      is_payment_method_set: 0,
      lifetime: 3600,
      to_currency: 'USD',
      subtract: 1,
      accuracy_payment_amount: 2,
      additional_data: {
        plan: planName,
        email: userEmail || 'noreply@osintpro.gov',
      },
    }

    // Create signature
    const dataString = JSON.stringify(paymentData)
    const dataBase64 = Buffer.from(dataString).toString('base64')
    const signString = dataBase64 + apiKey
    const signature = crypto
      .createHash('md5')
      .update(signString)
      .digest('hex')

    // Call Cryptomus API
    const response = await fetch('https://api.cryptomus.com/v1/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        merchant: merchantId,
        sign: signature,
      },
      body: dataString,
    })

    if (!response.ok) {
      console.error('[v0] Cryptomus API error:', response.status)
      return NextResponse.json(
        { error: 'Failed to create payment' },
        { status: response.status }
      )
    }

    const result = await response.json()

    console.log('[v0] Payment created:', orderId)
    return NextResponse.json({
      success: true,
      paymentUrl: result.result?.url || result.url,
      orderId: orderId,
    })
  } catch (error) {
    console.error('[v0] Checkout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
