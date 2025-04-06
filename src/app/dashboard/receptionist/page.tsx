'use client'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") return <p>Loading...</p>
  if (!session || session.user.role !== "receptionist") {
    // Redirect to login if not authenticated or not a receptionist
    router.push("/login")
    return null
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Oringa Reception Dashboard</h1>
      <p>Welcome, {session.user.email}</p>
    </div>
  )
}
