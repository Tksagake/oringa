import { useState, useEffect } from 'react'

interface Booking {
  _id: string
  guestId: string
  roomId: string
  checkInDate: string
  checkOutDate: string
  status: string
  paymentStatus: string
}

export default function BookingsList() {
  const [bookings, setBookings] = useState<Booking[]>([])

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await fetch('/api/bookings')
      const data = await res.json()
      setBookings(data)
    }

    fetchBookings()
  }, [])

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/bookings/${id}`, { method: 'DELETE' })
    const data = await res.json()
    alert(data.message)
    setBookings(bookings.filter((booking) => booking._id !== id))
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Bookings</h1>
      <ul className="space-y-4">
        {bookings.map((booking) => (
          <li key={booking._id} className="border p-4">
            <p>Guest ID: {booking.guestId}</p>
            <p>Room ID: {booking.roomId}</p>
            <p>Check-in: {booking.checkInDate}</p>
            <p>Check-out: {booking.checkOutDate}</p>
            <p>Status: {booking.status}</p>
            <p>Payment Status: {booking.paymentStatus}</p>
            <button
              onClick={() => handleDelete(booking._id)}
              className="btn bg-red-600 text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
