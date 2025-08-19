import { useRouter } from "next/router"
import PrivateRoute from "../components/PrivateRoute"

export default function PricingPage() {
  const router = useRouter()

  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "3 Templates",
        "No Custom Domain",
        "Basic Support",
      ],
      type: "Free"
    },
    {
      name: "Pro",
      price: "$6.99",
      features: [
        "Limited Templates",
        "Custom Domain Support",
        "Priority Support",
      ],
      type: "Pro"
    },
    {
      name: "Premium",
      price: "$9.99",
      features: [
        "All Templates",
        "Custom Domain Support",
        "Priority Support",
        "Extra Storage",
      ],
      type: "Premium"
    },
  ]

  return (
    <PrivateRoute>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Choose Your Plan</h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded shadow p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                <p className="text-3xl font-semibold mb-6">{plan.price}</p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700">• {feature}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => router.push("/dashboard")}
                className="mt-auto px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Upgrade
              </button>
            </div>
          ))}
        </div>
      </div>
    </PrivateRoute>
  )
}
