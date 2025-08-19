// 📁 components/Layout.js
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">🌍 Global Scholarships</h1>
          <div className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/scholarships">Scholarships</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow container mx-auto p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-4 text-center">
        <p>© {new Date().getFullYear()} Global Scholarships. All rights reserved.</p>
      </footer>
    </div>
  )
}
