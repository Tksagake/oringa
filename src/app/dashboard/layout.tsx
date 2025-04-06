// src/app/dashboard/layout.tsx
import React from "react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Shared Header or Sidebar can go here */}
        {children}
      </div>
    </main>
  )
}
