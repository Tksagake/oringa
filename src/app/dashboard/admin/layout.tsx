import AdminSidebar from '../../components/dashboard/AdminSidebar'
import React from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="ml-64 p-6 w-full bg-gray-50 min-h-screen">
        {children}
      </main>
    </div>
  )
}
