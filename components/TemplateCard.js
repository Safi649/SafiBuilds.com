import Link from 'next/link'
import { motion } from 'framer-motion'

export default function TemplateCard({ title, image }) {
  return (
    <motion.div
      className="border rounded overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <Link href="/signup" className="text-blue-600 hover:underline">
          Use this template
        </Link>
      </div>
    </motion.div>
  )
}
