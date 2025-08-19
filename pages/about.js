import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">

      {/* About Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">About SafiBuilds</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          SafiBuilds is your all-in-one website builder platform. Whether you want to use ready-made templates or start from scratch, SafiBuilds makes it effortless to create, customize, and publish professional websites.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 p-8 rounded shadow"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            To empower individuals and businesses to easily create their online presence without any coding knowledge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 p-8 rounded shadow"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p>
            To become the most user-friendly, modern, and reliable website building platform, helping everyone bring their ideas online.
          </p>
        </motion.div>
      </div>

      {/* Team Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our team is passionate about web development and design, dedicated to creating the best tools for our users. (Team photos or details can be added later.)
        </p>
      </motion.div>

    </div>
  )
}
