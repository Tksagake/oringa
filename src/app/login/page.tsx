'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import LandingNavbar from '../components/navbar/LandingNavbar'
import LoginForm from '../components/forms/LoginForm'

export default function GuestLoginPage() {
  const router = useRouter()

  const handleSuccess = () => {
    router.push('/dashboard/guest')  // Redirects the guest user to the dashboard page
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
            <LoginForm 
              onSuccess={handleSuccess}  // Pass the handleSuccess to LoginForm
              userType="guest"  // Ensure the login is specific for guests
            />
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
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
