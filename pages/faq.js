import { useState } from "react"

const faqData = [
  { q: "What is SafiBuilds?", a: "SafiBuilds is a modern website building platform that allows users to create websites using templates or a blank canvas." },
  { q: "Do I need coding skills?", a: "No, SafiBuilds is designed for everyone. You can use templates or the blank canvas without coding." },
  { q: "How many templates are free?", a: "Free plan allows 3 templates. Pro and Premium have more options." },
  { q: "Can I use my own domain?", a: "Yes, Pro and Premium plans support custom domains." },
  { q: "Is there a trial version?", a: "Yes, the Free plan acts as a trial version with limited features." },
  { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade anytime from your dashboard." },
  { q: "How do I save my website progress?", a: "Your progress is saved automatically in your account via Firebase." },
  { q: "What payment methods are supported?", a: "Currently, we support major credit/debit cards and PayPal." },
  { q: "Can I collaborate with others?", a: "At the moment, SafiBuilds is single-user per account." },
  { q: "Are there templates for businesses?", a: "Yes, we provide business, portfolio, SaaS, e-commerce templates and more." },
  { q: "Is my data secure?", a: "Yes, all user data is securely stored in Firebase." },
  { q: "Can I delete my website?", a: "Yes, you can delete saved templates or blank canvas projects from your dashboard." },
  { q: "Do you provide support?", a: "Yes, Pro and Premium plans have priority support." },
  { q: "Can I preview templates before saving?", a: "Yes, click the Preview button to see the template before saving." },
  { q: "Is there a limit to the number of saved templates?", a: "Yes, based on your plan: Free = 3, Pro = 10, Premium = 100." },
  { q: "Can I download my website?", a: "Currently, exporting websites is under development." },
  { q: "Does SafiBuilds work on mobile?", a: "Yes, the platform is fully responsive." },
  { q: "Can I change my plan anytime?", a: "Yes, you can upgrade or downgrade from your dashboard." },
  { q: "Is there a money-back guarantee?", a: "For paid plans, please contact support for details." },
  { q: "How do I contact support?", a: "You can use the Contact page or email us directly at safi65225@gmail.com." },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded shadow p-8 space-y-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left py-4 px-2 flex justify-between items-center font-medium text-gray-800 hover:text-blue-600 transition"
              >
                {item.q}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="px-4 pb-4 text-gray-700">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
