import { NextResponse } from 'next/server'
import Payment from '../../../lib/mongodb/models/Payment'
import { connectDB } from '../../../lib/mongodb/connect'

export async function POST(req: Request) {
  const { userId, amount } = await req.json()

  try {
    await connectDB()

    // Create a new payment in MongoDB for tracking
    const payment = new Payment({
      userId,
      amount,
      method: 'mpesa',
      status: 'pending',
      transactionId: '', // M-Pesa transaction ID will be added later
    })
    await payment.save()

    // Call M-Pesa API (using Safaricom's Lipa na M-Pesa API)
    const mpesaResponse = await fetch('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MPESA_ACCESS_TOKEN}`, // Use your M-Pesa access token
      },
      body: JSON.stringify({
        BusinessShortCode: process.env.MPESA_SHORTCODE,
        LipaNaMpesaOnlineShortcode: process.env.MPESA_SHORTCODE,
        phoneNumber: 'PHONE_NUMBER', // You should send phone number dynamically
        amount,
        accountReference: payment._id.toString(),
        transactionDesc: 'Payment for order',
        callbackUrl: 'https://your-callback-url.com/callback', // Your callback URL for M-Pesa
        // other M-Pesa params
      })
    })

    const data = await mpesaResponse.json()

    if (data && data.ResponseCode === '0') {
      return NextResponse.json({ message: 'M-Pesa payment initiated successfully', payment })
    }

    return NextResponse.json({ message: 'Error initiating M-Pesa payment' }, { status: 500 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error processing M-Pesa payment' }, { status: 500 })
  }
}
