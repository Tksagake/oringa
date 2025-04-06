// hotelier login page
'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function HotelierLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault()

      const res = await signIn('credentials', {
          email,
          password,
          redirect: false,
      })

      if (res?.error) {
          setError(res.error)
      } else {
          const userRole = await fetch('/api/[...nextauth]/')
            .then((response) => response.json())
            .then((data) => data.role)
            .catch(() => null);

          if (!userRole) {
              setError('Failed to fetch user role');
              return;
          }

          if (userRole === 'admin') {
              router.push('/dashboard/admin')
          } else if (userRole === 'receptionist') {
              router.push('/dashboard/receptionist')
          } else {
              setError('Invalid user role')
          }
      }
  }

  return (
      <div className="flex items-center justify-center h-screen bg-blue-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
              <h2 className="text-3xl font-semibold text-center mb-4">Hotelier Login</h2>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                      <label htmlFor="email" className="block text-lg font-medium">Email</label>
                      <input
                          type="email"
                          id="email"
                          className="w-full p-2 border rounded-md"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                      />
                  </div>
                  <div>
                      <label htmlFor="password" className="block text-lg font-medium">Password</label>
                      <input
                          type="password"
                          id="password"
                          className="w-full p-2 border rounded-md"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                      />
                  </div>
                  <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                  >
                      Login
                  </button>
              </form>
          </div>
      </div>
  )
}
