import { useEffect, useState } from 'react'

interface GalleryItem {
  _id: string
  imageUrl: string
  title: string
  description: string
}

export default function GalleryList() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])

  useEffect(() => {
    const fetchGalleryItems = async () => {
      const res = await fetch('/api/gallery')
      const data = await res.json()
      setGalleryItems(data)
    }

    fetchGalleryItems()
  }, [])

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/gallery/${id}`, { method: 'DELETE' })
    const data = await res.json()
    alert(data.message)
    setGalleryItems(galleryItems.filter((item) => item._id !== id))
  }

  const handleUpdate = async (id: string, updatedData: GalleryItem) => {
    const res = await fetch(`/api/gallery/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedData),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()
    alert(data.message)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gallery Images</h1>
      <ul className="space-y-4">
        {galleryItems.map((item) => (
          <li key={item._id} className="border p-4">
            <img src={item.imageUrl} alt={item.title} className="w-full h-auto" />
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p>{item.description}</p>
            <button
              onClick={() => handleDelete(item._id)}
              className="btn bg-red-600 text-white"
            >
              Delete
            </button>
            {/* Update button can open a modal to edit the item */}
            <button
              onClick={() =>
                handleUpdate(item._id, {
                    imageUrl: item.imageUrl,
                    title: 'Updated Title',
                    description: 'Updated Description',
                    _id: ''
                })
              }
              className="btn bg-blue-600 text-white"
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
