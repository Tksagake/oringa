import mongoose from 'mongoose'

const GallerySchema = new mongoose.Schema({
  imageUrl: String,
  caption: String,
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true })

export default mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema)
export type Gallery = {
  _id: string
  imageUrl: string
  caption: string
  uploadedBy: string
  createdAt: Date
  updatedAt: Date
}
export type GalleryFormData = Omit<Gallery, '_id' | 'createdAt' | 'updatedAt'>  
