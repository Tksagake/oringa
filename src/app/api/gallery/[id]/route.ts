import { NextResponse } from 'next/server'
import Gallery from '../../../lib/mongodb/models/Gallery'
import { connectDB } from '../../../lib/mongodb/connect'

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const { imageUrl, title, description } = await req.json()

  try {
    await connectDB()

    // Find the gallery item by ID and update it
    const galleryItem = await Gallery.findByIdAndUpdate(id, {
      imageUrl,
      title,
      description,
    }, { new: true }) // 'new: true' returns the updated document

    if (!galleryItem) {
      return NextResponse.json({ message: 'Gallery item not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Gallery image updated successfully', galleryItem })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error updating gallery image' }, { status: 500 })
  }
}
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    await connectDB()

    // Find the gallery item by ID and delete it
    const galleryItem = await Gallery.findByIdAndDelete(id)

    if (!galleryItem) {
      return NextResponse.json({ message: 'Gallery image not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Gallery image deleted successfully' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error deleting gallery image' }, { status: 500 })
  }
}
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    await connectDB()

    // Find the gallery item by ID
    const galleryItem = await Gallery.findById(id)

    if (!galleryItem) {
      return NextResponse.json({ message: 'Gallery image not found' }, { status: 404 })
    }

    return NextResponse.json(galleryItem)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error fetching gallery image' }, { status: 500 })
  }
}