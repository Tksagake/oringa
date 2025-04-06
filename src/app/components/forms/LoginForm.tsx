import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface LoginFormProps {
  onSuccess?: () => void
  userType?: "guest" | "admin" | "staff"
  showRegisterLink?: boolean
  rememberMeOption?: boolean
  forgotPasswordLink?: boolean
}

const LoginForm = ({
  onSuccess,
  userType = "guest",
  showRegisterLink = true,
  rememberMeOption = true,
  forgotPasswordLink = true
}: LoginFormProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: userType === "guest" ? "/dashboard/guest" : "/dashboard" // Based on userType, redirect accordingly
    })

    if (res?.error) {
      setError(res.error)
    } else {
      onSuccess ? onSuccess() : router.push(res?.url || "/dashboard") // Handle success with the passed callback
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded-lg text-center">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-lg font-medium text-blue-900 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-lg font-medium text-blue-900 mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
          placeholder="Enter your password"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        {rememberMeOption && (
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
        )}

        {forgotPasswordLink && (
          <div className="text-sm">
            <Link 
              href="/forgot-password" 
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-300"
            >
              Forgot password?
            </Link>
          </div>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
        >
          Sign In
        </button>
      </div>

      {showRegisterLink && (
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Don't have an account?
              </span>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/register"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            >
              Create your account
            </Link>
          </div>
        </div>
      )}
    </form>
  )
}

export default LoginForm
