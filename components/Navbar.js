import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Navbar() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Home", href: "/" },
    { name: "Templates", href: "/templates" },
    { name: "Blank Template", href: "/blank" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ]

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/">
          <a className="text-2xl font-bold text-blue-600">SafiBuilds</a>
        </Link>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className={`hover:text-blue-600 transition ${router.pathname === link.href ? "text-blue-600 font-semibold" : "text-gray-700"}`}>
                {link.name}
              </a>
            </Link>
          ))}
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <span className="text-2xl">&#9776;</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-white shadow">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className={`hover:text-blue-600 transition ${router.pathname === link.href ? "text-blue-600 font-semibold" : "text-gray-700"}`} onClick={() => setOpen(false)}>
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
