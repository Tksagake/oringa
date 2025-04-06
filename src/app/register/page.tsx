'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import LandingNavbar from '../components/navbar/LandingNavbar'
import { Link } from 'lucide-react'

export default function GuestLoginPage() {
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
      router.push('/dashboard/guest')
    }
  }

  return (
    <div className="relative min-h-screen bg-blue-50">
      {/* Navbar Section */}
      <LandingNavbar />

      {/* Hero Section with Background */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src="/login-bg.jpg" 
          alt="Hotel Lobby" 
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Guest Portal</h1>
            <p className="text-xl text-white">
              Access your booking details and hotel services
            </p>
          </div>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-blue-900 py-4 px-6">
            <h2 className="text-2xl font-semibold text-white">Sign In to Your Account</h2>
          </div>
          
          <div className="p-8">
            {error && (
              <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-blue-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-lg font-medium text-blue-900 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    New to Oringa Hotel?
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="/register"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                >
                  Create your account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Oringa Hotel. All Rights Reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-blue-300 transition-colors duration-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-blue-300 transition-colors duration-300">Terms of Service</Link>
              <Link href="#" className="hover:text-blue-300 transition-colors duration-300">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}