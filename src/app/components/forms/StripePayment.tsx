import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const stripePayment = async (userId: string, amount: number) => {
  const res = await fetch('/api/payments/stripe', {
    method: 'POST',
    body: JSON.stringify({ userId, amount }),
    headers: { 'Content-Type': 'application/json' },
  })

  const data = await res.json()
  return data.clientSecret
}

const StripePaymentForm = () => {
  const [userId, setUserId] = useState('')
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccessMessage('')

    if (!stripe || !elements) {
      return
    }

    const clientSecret = await stripePayment(userId, amount)

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement) || (() => { throw new Error('CardElement not found') })(),
        billing_details: { name: 'Customer' },
      },
    })

    if (error) {
      setError(error.message || 'An error occurred')
    } else if (paymentIntent?.status === 'succeeded') {
      setSuccessMessage('Payment Successful!')
    }
  }

  return (
    <Elements stripe={stripePromise}>
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
        <CardElement />
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <button type="submit" disabled={!stripe}>Pay with Stripe</button>
      </form>
    </Elements>
  )
}

export default StripePaymentForm
