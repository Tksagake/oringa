'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/gallery', label: 'Gallery' },
  { href: 'dashboard/guest/bookings', label: 'Bookings' },
  { href: 'dashboard/guest/payments', label: 'Payments' },
  { href: 'dashboard/guest/contact', label: 'Contact Us' },
  { href: 'dashboard/guest', label: 'Profile' },
]

export default function GuestSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4 fixed">
      <h2 className="text-xl font-bold mb-6">Oringa Hotel</h2>
      <nav className="flex flex-col space-y-4">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded-md font-medium ${pathname === link.href ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
