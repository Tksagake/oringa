import mongoose from 'mongoose'

const RoomSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  capacity: Number,
  images: [String],
  available: { type: Boolean, default: true },
}, { timestamps: true })

export default mongoose.models.Room || mongoose.model('Room', RoomSchema)
export type Room = {
  _id: string
  name: string
  description: string
  price: number
  capacity: number
  images: string[]
  available: boolean
  createdAt: Date
  updatedAt: Date
}
export type RoomFormData = Omit<Room, '_id' | 'createdAt' | 'updatedAt'>