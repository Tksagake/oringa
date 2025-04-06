import { useState } from 'react'

export default function CreateGalleryForm() {
  const [imageUrl, setImageUrl] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const galleryData = {
      imageUrl,
      title,
      description,
    }

    const res = await fetch('/api/gallery', {
      method: 'POST',
      body: JSON.stringify(galleryData),
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await res.json()
    alert(data.message)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
        className="input"
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="input"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="textarea"
      />
      <button type="submit" className="btn">Create Gallery Image</button>
    </form>
  )
}
