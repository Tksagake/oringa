import { NextResponse } from 'next/server'
import Booking from '../../lib/mongodb/models/Booking'
import { connectDB } from '../../lib/mongodb/connect'

export async function POST(req: Request) {
  const { guestId, roomId, checkInDate, checkOutDate, status, paymentStatus } = await req.json()

  try {
    await connectDB()

    const booking = new Booking({
      guestId,
      roomId,
      checkInDate,
      checkOutDate,
      status,  // e.g., 'pending', 'confirmed', 'completed'
      paymentStatus,  // e.g., 'paid', 'pending'
    })

    await booking.save()

    return NextResponse.json({ message: 'Booking created successfully', booking })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error creating booking' }, { status: 500 })
  }
}
export async function GET() {
    try {
      await connectDB()
      const bookings = await Booking.find().populate('guestId').populate('roomId')
      return NextResponse.json(bookings)
    } catch (error) {
      console.error(error)
      return NextResponse.json({ message: 'Error fetching bookings' }, { status: 500 })
    }
  }
export async function DELETE(req: Request) {
  const { id } = await req.json()

  try {
    await connectDB()

    const booking = await Booking.findByIdAndDelete(id)

    if (!booking) {
      return NextResponse.json({ message: 'Booking not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Booking deleted successfully' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error deleting booking' }, { status: 500 })
  }
}  