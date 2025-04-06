import { NextResponse } from 'next/server'
import Booking from '../../../lib/mongodb/models/Booking'
import { connectDB } from '../../../lib/mongodb/connect'

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const { checkInDate, checkOutDate, status, paymentStatus } = await req.json()

  try {
    await connectDB()

    const booking = await Booking.findByIdAndUpdate(id, {
      checkInDate,
      checkOutDate,
      status,
      paymentStatus,
    }, { new: true })

    return NextResponse.json({ message: 'Booking updated successfully', booking })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error updating booking' }, { status: 500 })
  }
}
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = params
  
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
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    await connectDB()

    const booking = await Booking.findById(id).populate('guestId').populate('roomId')

    if (!booking) {
      return NextResponse.json({ message: 'Booking not found' }, { status: 404 })
    }

    return NextResponse.json(booking)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error fetching booking' }, { status: 500 })
  }
  }  