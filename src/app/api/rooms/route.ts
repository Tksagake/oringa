import { NextResponse } from 'next/server'
import Room from '../../lib/mongodb/models/Room'
import { connectDB } from '../../lib/mongodb/connect'

export async function POST(req: Request) {
  const { name, description, price, capacity, images, available } = await req.json()

  try {
    await connectDB()

    const room = new Room({
      name,
      description,
      price,
      capacity,
      images,
      available,
    })

    await room.save()

    return NextResponse.json({ message: 'Room created successfully', room })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error creating room' }, { status: 500 })
  }
}
export async function GET() {
    try {
      await connectDB()
      const rooms = await Room.find()
      return NextResponse.json(rooms)
    } catch (error) {
      console.error(error)
      return NextResponse.json({ message: 'Error fetching rooms' }, { status: 500 })
    }
  }
export async function DELETE(req: Request) {
  const { id } = await req.json()

  try {
    await connectDB()

    const room = await Room.findByIdAndDelete(id)

    if (!room) {
      return NextResponse.json({ message: 'Room not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Room deleted successfully' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error deleting room' }, { status: 500 })
  }
}  