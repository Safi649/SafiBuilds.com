import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      name: "Free Trial",
      price: "$0",
      features: ["3 templates", "No custom domain"],
    },
    {
      name: "Pro",
      price: "$29/mo",
      features: ["Limited templates", "Custom domain support"],
    },
    {
      name: "Premium",
      price: "$59/mo",
      features: ["All templates", "Custom domain", "Priority support", "Extra storage"],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feat, idx) => (
                <li key={idx} className="text-gray-700">{feat}</li>
              ))}
            </ul>
            <Link
              href="/signup"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
