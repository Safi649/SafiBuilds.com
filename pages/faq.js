import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FAQ() {
  const faqs = [
    { q: "Can I use my own domain?", a: "Yes, Pro and Premium plans support custom domains." },
    { q: "Do I need coding skills?", a: "No, our templates are drag-and-drop ready." },
    { q: "How many templates are included in the Free plan?", a: "Free plan includes 3 templates only." },
    { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade at any time from your dashboard." },
    { q: "Is there priority support?", a: "Yes, Premium plan users receive priority support." },
    { q: "Can I save my work?", a: "Yes, all registered users can save their website progress." },
    { q: "How do I start from scratch?", a: "Use the Blank Template page to create a website from a true blank canvas." },
    { q: "Are templates customizable?", a: "Yes, you can edit colors, texts, images, and layout." },
    { q: "Is there a free trial?", a: "Yes, the Free plan allows 3 templates with no custom domain." },
    { q: "Can multiple users access the same template?", a: "No, each user has a separate workspace." },
    { q: "How do I contact support?", a: "Use the Contact page or email us at safi65225@gmail.com." },
    { q: "What payment methods are supported?", a: "All major credit/debit cards are accepted." },
    { q: "Can I downgrade my plan?", a: "Yes, downgrades are possible from your dashboard." },
    { q: "Do you offer discounts for yearly plans?", a: "Yes, contact us for special offers." },
    { q: "Is my data secure?", a: "Yes, we use Firebase security rules to protect your data." },
    { q: "Can I preview templates before using?", a: "Yes, each template has a preview option." },
    { q: "Are updates included in the plan?", a: "Yes, all plan users receive automatic updates." },
    { q: "Can I export my website?", a: "Yes, Pro and Premium users can export code or publish online." },
    { q: "Is there a limit on storage?", a: "Free plan has limited storage; Premium includes extra storage." },
    { q: "Can I cancel my subscription anytime?", a: "Yes, subscriptions can be canceled at any time." },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded shadow">
            <button
              onClick={() => toggle(i)}
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 transition flex justify-between items-center"
            >
              <span>{faq.q}</span>
              <span>{openIndex === i ? "-" : "+"}</span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-3 bg-white text-gray-700"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
