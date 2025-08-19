import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.")
      return
    }

    setError("")
    setSuccess(true)

    // Placeholder: Replace with EmailJS/Firebase function
    console.log("Contact form submitted:", form)

    setForm({ name: "", email: "", message: "" })

    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center text-gray-700 mb-8">
        Have questions or need support? Fill out the form below and we’ll get back to you shortly.
      </p>

      {error && <p className="text-red-600 text-center">{error}</p>}
      {success && <p className="text-green-600 text-center">Message sent successfully!</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
        ></textarea>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
