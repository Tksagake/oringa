import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import Payment from '../../../lib/mongodb/models/Payment'
import { connectDB } from '../../../lib/mongodb/connect'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-03-31.basil' })

export async function POST(req: Request) {
  const { userId, amount } = await req.json()

  try {
    await connectDB()

    // Create a new payment in MongoDB
    const payment = new Payment({
      userId,
      amount,
      method: 'stripe',
      status: 'pending',
      transactionId: '', // Stripe transaction ID will be added later
    })
    await payment.save()

    // Create a new Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe accepts amount in cents
      currency: 'usd',
      metadata: { paymentId: payment._id.toString() },
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret, paymentId: payment._id })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error creating payment' }, { status: 500 })
  }
}
