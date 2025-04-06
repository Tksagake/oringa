import { NextResponse } from 'next/server'
import Room from '../../../lib/mongodb/models/Room'
import { connectDB } from '../../../lib/mongodb/connect'

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const { name, description, price, capacity, images, available } = await req.json()

  try {
    await connectDB()

    const room = await Room.findByIdAndUpdate(id, {
      name,
      description,
      price,
      capacity,
      images,
      available,
    }, { new: true })

    return NextResponse.json({ message: 'Room updated successfully', room })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error updating room' }, { status: 500 })
  }
}
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = params
  
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
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    await connectDB()

    const room = await Room.findById(id)

    if (!room) {
      return NextResponse.json({ message: 'Room not found' }, { status: 404 })
    }

    return NextResponse.json(room)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error fetching room' }, { status: 500 })   
  }
  }  