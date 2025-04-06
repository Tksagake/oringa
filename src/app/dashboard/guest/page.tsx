'use client'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") return <p>Loading...</p>
  if (!session || session.user.role !== "guest") {
    // Redirect to login if not authenticated or not a guest
    router.push("/login")
    return null
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Guest Dashboard</h1>
      <p>Welcome, {session.user.email}</p>
    </div>
  )
}
