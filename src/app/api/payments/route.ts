import { NextResponse } from 'next/server'
import Payment from '../../lib/mongodb/models/Payment'
import { connectDB } from '../../lib/mongodb/connect'

export async function GET() {
  try {
    await connectDB()

    const payments = await Payment.find()
    return NextResponse.json(payments)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error fetching payments' }, { status: 500 })
  }
}
