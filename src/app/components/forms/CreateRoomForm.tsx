import { useState } from 'react'

export default function CreateRoomForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [capacity, setCapacity] = useState(1)
  const [images, setImages] = useState([''])
  const [available, setAvailable] = useState(true)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const roomData = {
      name,
      description,
      price,
      capacity,
      images,
      available,
    }

    const res = await fetch('/api/rooms', {
      method: 'POST',
      body: JSON.stringify(roomData),
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await res.json()
    alert(data.message)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Room Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="input"
      />
      <textarea
        placeholder="Room Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="textarea"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        required
        className="input"
      />
      <input
        type="number"
        placeholder="Capacity"
        value={capacity}
        onChange={(e) => setCapacity(Number(e.target.value))}
        required
        className="input"
      />
      <input
        type="text"
        placeholder="Image URLs (comma separated)"
        value={images.join(',')}
        onChange={(e) => setImages(e.target.value.split(','))}
        className="input"
      />
      <label>
        Available:
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
      </label>
      <button type="submit" className="btn">Create Room</button>
    </form>
  )
}
