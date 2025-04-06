import mongoose, { Schema, Document } from "mongoose"

export interface IUser extends Document {
  email: string
  password: string
  role: 'admin' | 'receptionist' | 'guest'
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'receptionist', 'guest'], default: 'guest' }
})

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema)
