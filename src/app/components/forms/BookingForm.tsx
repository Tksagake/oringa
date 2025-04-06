import { useState, useEffect } from 'react'

export default function CreateBookingForm() {
  const [guestId, setGuestId] = useState('')
  const [roomId, setRoomId] = useState('')
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [status, setStatus] = useState('pending')
  const [paymentStatus, setPaymentStatus] = useState('pending')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const bookingData = {
      guestId,
      roomId,
      checkInDate,
      checkOutDate,
      status,
      paymentStatus,
    }

    const res = await fetch('/api/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData),
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await res.json()
    alert(data.message)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Guest ID"
        value={guestId}
        onChange={(e) => setGuestId(e.target.value)}
        required
        className="input"
      />
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        required
        className="input"
      />
      <input
        type="date"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
        required
        className="input"
      />
      <input
        type="date"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
        required
        className="input"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="input">
        <option value="pending">Pending</option>
        <option value="confirmed">Confirmed</option>
        <option value="completed">Completed</option>
      </select>
      <select value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)} className="input">
        <option value="pending">Pending</option>
        <option value="paid">Paid</option>
      </select>
      <button type="submit" className="btn">Create Booking</button>
    </form>
  )
}
