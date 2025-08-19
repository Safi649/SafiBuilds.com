import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import PrivateRoute from "../../components/PrivateRoute"
import { auth, db } from "../../firebase"
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore"

const templatesData = [
  { id: 1, title: "Business Pro", type: "Free", image: "/templates/business.png" },
  { id: 2, title: "Portfolio Starter", type: "Free", image: "/templates/portfolio.png" },
  { id: 3, title: "SaaS Pro", type: "Free", image: "/templates/saas.png" },
  { id: 4, title: "E-commerce Plus", type: "Pro", image: "/templates/ecommerce.png" },
  { id: 5, title: "Premium Agency", type: "Premium", image: "/templates/agency.png" },
]

function PreviewContent() {
  const router = useRouter()
  const { id } = router.query
  const [template, setTemplate] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (!id) return
    const t = templatesData.find((temp) => temp.id === parseInt(id))
    setTemplate(t)
  }, [id])

  useEffect(() => {
    const fetchUser = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid))
        if (userDoc.exists()) setUser(userDoc.data())
      }
    }
    fetchUser()
  }, [])

  const handleSave = async () => {
    if (!user || !template) return
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
    router.push("/dashboard")
  }

  if (!template) return <p className="text-center mt-16">Loading Template...</p>

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-8">
        <h1 className="text-3xl font-bold mb-4">{template.title}</h1>
        <p className="text-gray-600 mb-6">Plan: {template.type}</p>
        <img src={template.image} alt={template.title} className="rounded mb-6 object-cover w-full h-80"/>
        
        <div className="flex gap-4">
          <button onClick={handleSave} className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Save Template
          </button>
          <button onClick={() => router.push("/templates")} className="px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
            Back to Templates
          </button>
        </div>
      </div>
    </div>
  )
}

export default function PreviewPage() {
  return (
    <PrivateRoute>
      <PreviewContent />
    </PrivateRoute>
  )
}
