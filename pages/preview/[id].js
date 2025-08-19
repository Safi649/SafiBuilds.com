import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import PrivateRoute from "../../components/PrivateRoute"
import { auth, db } from "../../firebase"
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore"

const templateData = [
  { id: "t1", title: "Business Template", img: "/templates/business.jpg", description: "Professional business website template." },
  { id: "t2", title: "Portfolio Template", img: "/templates/portfolio.jpg", description: "Showcase your portfolio beautifully." },
  { id: "t3", title: "SaaS Template", img: "/templates/saas.jpg", description: "Modern SaaS landing page template." },
  { id: "t4", title: "Restaurant Template", img: "/templates/restaurant.jpg", description: "Template for restaurants and cafes." },
  { id: "t5", title: "Doctor Template", img: "/templates/doctor.jpg", description: "Medical and doctor website template." },
  { id: "t6", title: "Hospital Template", img: "/templates/hospital.jpg", description: "Hospital and healthcare template." },
]

export default function TemplatePreview() {
  const router = useRouter()
  const { id } = router.query
  const [template, setTemplate] = useState(null)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!id) return
    const selected = templateData.find((t) => t.id === id)
    setTemplate(selected)
  }, [id])

  useEffect(() => {
    const fetchUser = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid))
        if (userDoc.exists()) setUserData(userDoc.data())
      }
      setLoading(false)
    }
    fetchUser()
  }, [])

  const handleSaveTemplate = async () => {
    if (!userData || !template) return

    const planLimit = userData.plan === "Free" ? 3 : userData.plan === "Pro" ? 10 : 100
    const savedCount = userData.savedTemplates ? userData.savedTemplates.length : 0

    if (savedCount >= planLimit) {
      alert(`Your plan allows only ${planLimit} templates. Upgrade to save more.`)
      return
    }

    setSaving(true)
    try {
      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        savedTemplates: arrayUnion({ templateId: template.id, title: template.title, savedAt: new Date() }),
      })
      alert(`${template.title} saved successfully!`)
      setUserData({ ...userData, savedTemplates: [...(userData.savedTemplates || []), { templateId: template.id, title: template.title, savedAt: new Date() }] })
    } catch (error) {
      console.error(error)
      alert("Error saving template. Please try again.")
    }
    setSaving(false)
  }

  if (loading || !template) return <p className="text-center mt-16">Loading Preview...</p>

  return (
    <PrivateRoute>
      <div className="min-h-screen p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">{template.title}</h1>
        <div className="w-full max-w-5xl border rounded shadow overflow-hidden">
          <img src={template.img} alt={template.title} className="w-full h-96 object-cover" />
          <div className="p-4 bg-gray-50">
            <p className="text-gray-700">{template.description}</p>
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <button
            onClick={handleSaveTemplate}
            disabled={saving}
            className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            {saving ? "Saving..." : "Save Template"}
          </button>
          <button
            onClick={() => router.push("/templates")}
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Back to Templates
          </button>
        </div>
      </div>
    </PrivateRoute>
  )
}
