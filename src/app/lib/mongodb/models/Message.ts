import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
  sender: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    role: { type: String, enum: ['guest', 'admin', 'receptionist'] },
    name: String,
  },
  receiver: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    role: { type: String, enum: ['guest', 'admin', 'receptionist'] },
    name: String,
  },
  content: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true })

export default mongoose.models.Message || mongoose.model('Message', MessageSchema)
export type Message = {
  _id: string
  sender: {
    id: string
    role: 'guest' | 'admin' | 'receptionist'
    name: string
  }
  receiver: {
    id: string
    role: 'guest' | 'admin' | 'receptionist'
    name: string
  }
  content: string
  read: boolean
  createdAt: Date
  updatedAt: Date
}
export type MessageFormData = Omit<Message, '_id' | 'createdAt' | 'updatedAt'>
