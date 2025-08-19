import Link from 'next/link'
import { motion } from 'framer-motion'
import TemplateCard from '../components/TemplateCard'

export default function Home() {
  // Sample templates for preview carousel
  const templates = [
    { id: 1, title: "Business Pro", image: "/templates/business1.jpg" },
    { id: 2, title: "Doctor Care", image: "/templates/doctor1.jpg" },
    { id: 3, title: "Restaurant Deluxe", image: "/templates/restaurant1.jpg" },
    { id: 4, title: "SaaS Starter", image: "/templates/saas1.jpg" },
    { id: 5, title: "Portfolio Modern", image: "/templates/portfolio1.jpg" },
  ]

  // Sample FAQs
  const faqs = [
    { q: "Can I use my own domain?", a: "Yes, Pro and Premium plans support custom domains." },
    { q: "Do I need coding skills?", a: "No, our templates are drag-and-drop ready." },
    { q: "How many templates are in Free plan?", a: "Free plan includes 3 templates only." },
  ]

  return (
    <div className="space-y-20">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-32 text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Build Your Dream Website Today
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-2xl mb-8"
        >
          Templates or Blank Canvas – Create, Customize, Publish.
        </motion.p>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }}>
          <Link href="/templates" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition">
            Explore Templates
          </Link>
        </motion.div>
      </section>

      {/* Templates Preview Carousel */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Templates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {templates.map((temp) => (
            <TemplateCard key={temp.id} title={temp.title} image={temp.image} />
          ))}
        </div>
      </section>

      {/* Blank Template Teaser */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Start from Scratch</h2>
        <p className="mb-6">Create your website with a true blank canvas and full freedom.</p>
        <Link href="/blank" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Blank Canvas
        </Link>
      </section>

      {/* Pricing Highlights */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-6 rounded shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-2">Free Trial</h3>
            <p className="mb-4">3 templates | No custom domain</p>
            <p className="text-2xl font-bold mb-4">$0</p>
            <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Get Started
            </Link>
          </div>
          <div className="border p-6 rounded shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="mb-4">Limited templates | Custom domain</p>
            <p className="text-2xl font-bold mb-4">$29/mo</p>
            <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Get Started
            </Link>
          </div>
          <div className="border p-6 rounded shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <p className="mb-4">All templates | Extra storage | Priority support</p>
            <p className="text-2xl font-bold mb-4">$59/mo</p>
            <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">About SafiBuilds</h2>
        <p className="max-w-3xl mx-auto text-lg">
          SafiBuilds is your all-in-one website builder platform. Use ready-made templates or start from scratch. Build, customize, and publish your website effortlessly.
        </p>
      </section>

      {/* Contact CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">Have questions or need help? Contact us today!</p>
        <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Contact Us
        </Link>
      </section>

      {/* FAQ Teaser */}
      <section className="bg-gray-100 py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">FAQs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border p-4 rounded shadow hover:shadow-lg transition">
              <h4 className="font-semibold mb-2">{faq.q}</h4>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
