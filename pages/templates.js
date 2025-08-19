import PrivateRoute from "../components/PrivateRoute"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { auth, db } from "../firebase"
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore"

const templatesData = [
  { id: 1, title: "Business Pro", type: "Free", image: "/templates/business.png" },
  { id: 2, title: "Portfolio Starter", type: "Free", image: "/templates/portfolio.png" },
  { id: 3, title: "SaaS Pro", type: "Free", image: "/templates/saas.png" },
  { id: 4, title: "E-commerce Plus", type: "Pro", image: "/templates/ecommerce.png" },
  { id: 5, title: "Premium Agency", type: "Premium", image: "/templates/agency.png" },
  // add more templates here
]

function TemplatesContent() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid))
        if (userDoc.exists()) setUser(userDoc.data())
      }
    }
    fetchUser()
  }, [])

  const handleSaveTemplate = async (template) => {
    if (!user) return
    const allowedTemplates = user.plan === "Free" ? 3 : user.plan === "Pro" ? 10 : 100
    if (user.savedTemplates.length >= allowedTemplates) {
      alert(`Your plan allows only ${allowedTemplates} templates. Upgrade to save more.`)
      return
    }

    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      savedTemplates: arrayUnion({
        templateId: template.id,
        title: template.title,
        savedAt: new Date(),
      }),
    })
    alert(`Template "${template.title}" saved!`)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose a Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templatesData.map((template) => (
          <div key={template.id} className="bg-white rounded shadow p-4 flex flex-col">
            <img src={template.image} alt={template.title} className="rounded mb-4 h-40 object-cover"/>
            <h2 className="text-xl font-semibold mb-2">{template.title}</h2>
            <p className="mb-4 text-gray-600">Plan: {template.type}</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleSaveTemplate(template)}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Save
              </button>
              <button
                onClick={() => router.push(`/preview/${template.id}`)}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TemplatesPage() {
  return (
    <PrivateRoute>
      <TemplatesContent />
    </PrivateRoute>
  )
}
