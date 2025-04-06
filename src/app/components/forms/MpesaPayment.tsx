import { useState } from 'react'

export default function MpesaPaymentForm() {
  const [userId, setUserId] = useState('')
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccessMessage('')

    try {
      const res = await fetch('/api/payments/mpesa', {
        method: 'POST',
        body: JSON.stringify({ userId, amount }),
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await res.json()

      if (data.message.includes('Error')) {
        setError(data.message)
      } else {
        setSuccessMessage(data.message)
      }
    } catch (err) {
      setError('An error occurred while processing the payment.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        required
      />
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <button type="submit">Pay with M-Pesa</button>
    </form>
  )
}
