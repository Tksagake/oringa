import { NextResponse } from 'next/server'
import Gallery from '../../lib/mongodb/models/Gallery'
import { connectDB } from '../../lib/mongodb/connect'

export async function POST(req: Request) {
  const { imageUrl, title, description } = await req.json()

  try {
    await connectDB()

    const galleryItem = new Gallery({
      imageUrl,
      title,
      description,
    })

    await galleryItem.save()

    return NextResponse.json({ message: 'Gallery image created successfully', galleryItem })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error creating gallery image' }, { status: 500 })
  }
}
export async function GET() {
    try {
      await connectDB()
      const galleryItems = await Gallery.find()
      return NextResponse.json(galleryItems)
    } catch (error) {
      console.error(error)
      return NextResponse.json({ message: 'Error fetching gallery images' }, { status: 500 })
    }
  }
export async function DELETE(req: Request) {
  const { id } = await req.json()

  try {
    await connectDB()

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