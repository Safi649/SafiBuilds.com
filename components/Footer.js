import { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaArrowUp } from 'react-icons/fa'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert(`Thank you for subscribing with ${email}!`) // placeholder for EmailJS/Firebase integration
    setEmail('')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white mt-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p>Email: safi65225@gmail.com</p>
          <p>Phone: +92 348 9085366</p>
          <p>Location: Swabi, KPK, Pakistan</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-3 py-2 rounded text-gray-900 flex-1"
            />
            <button type="submit" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-center py-4 relative">
        <p>© 2025 SafiBuilds. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
        >
          <FaArrowUp className="text-white" />
        </button>
      </div>
    </footer>
  )
}
