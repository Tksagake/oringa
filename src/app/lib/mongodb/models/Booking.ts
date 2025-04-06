import mongoose from 'mongoose'

const BookingSchema = new mongoose.Schema({
  guestId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  checkIn: Date,
  checkOut: Date,
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
}, { timestamps: true })

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema)
export type Booking = {
  _id: string
  guestId: string
  roomId: string
  checkIn: Date
  checkOut: Date
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}
export type BookingFormData = Omit<Booking, '_id' | 'createdAt' | 'updatedAt'>  