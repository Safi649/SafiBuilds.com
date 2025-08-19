import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",     // replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",    // replace with your EmailJS Template ID
        form,
        "YOUR_PUBLIC_KEY"      // replace with your EmailJS Public Key
      )
      alert("Message sent successfully!")
      setForm({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error(error)
      alert("Something went wrong, please try again.")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

        {/* Contact Details */}
        <div className="bg-gray-50 p-6 rounded shadow space-y-2">
          <p><strong>Email:</strong> safi65225@gmail.com</p>
          <p><strong>Alternate Email:</strong> muhammadabbassafi332@gmail.com</p>
          <p><strong>Phone:</strong> +923489085366</p>
          <p><strong>Location:</strong> Swabi, KPK, Pakistan</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-2 border rounded"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-2 border rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  )
}
