import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: "Home", href: "/" },
    { label: "Templates", href: "/templates" },
    { label: "Blank Template", href: "/blank" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">SafiBuilds</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-600 transition">
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Login
          </Link>
          <Link href="/signup" className="ml-2 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block px-4 py-2 hover:bg-gray-100 transition">
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="block px-4 py-2 mt-2 bg-blue-600 text-white rounded mx-4 text-center hover:bg-blue-700 transition">
            Login
          </Link>
          <Link href="/signup" className="block px-4 py-2 mt-2 border border-blue-600 text-blue-600 rounded mx-4 text-center hover:bg-blue-600 hover:text-white transition">
            Signup
          </Link>
        </div>
      )}
    </nav>
  )
}
