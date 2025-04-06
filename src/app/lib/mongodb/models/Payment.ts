import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    method: { type: String, enum: ['stripe', 'mpesa'], required: true },  // Payment method (Stripe or M-Pesa)
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    transactionId: { type: String, required: true }, // Stripe or M-Pesa transaction ID
    paymentDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

const Payment = mongoose.models.Payment || mongoose.model('Payment', paymentSchema)

export default Payment
