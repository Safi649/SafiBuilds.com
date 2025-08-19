import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import PrivateRoute from "../components/PrivateRoute"
import { auth, db } from "../firebase"
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore"

const templateData = [
  { id: "t1", title: "Business Template", img: "/templates/business.jpg" },
  { id: "t2", title: "Portfolio Template", img: "/templates/portfolio.jpg" },
  { id: "t3", title: "SaaS Template", img: "/templates/saas.jpg" },
  { id: "t4", title: "Restaurant Template", img: "/templates/restaurant.jpg" },
  { id: "t5", title: "Doctor Template", img: "/templates/doctor.jpg" },
  { id: "t6", title: "Hospital Template", img: "/templates/hospital.jpg" },
  // Add more templates as needed
]

export default function TemplatesPage() {
  const router = useRouter()
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid))
        if (userDoc.exists()) {
          setUserData(userDoc.data())
        }
      }
      setLoading(false)
    }
    fetchUser()
  }, [])

  const handleSaveTemplate = async (template) => {
    if (!userData) return

    const planLimit = userData.plan === "Free" ? 3 : userData.plan === "Pro" ? 10 : 100
    const savedCount = userData.savedTemplates ? userData.savedTemplates.length : 0

    if (savedCount >= planLimit) {
      alert(`Your plan allows only ${planLimit} templates. Upgrade to save more.`)
      return
    }

    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      savedTemplates: arrayUnion({ templateId: template.id, title: template.title, savedAt: new Date() }),
    })
    alert(`${template.title} saved successfully!`)
    setUserData({ ...userData, savedTemplates: [...(userData.savedTemplates || []), { templateId: template.id, title: template.title, savedAt: new Date() }] })
  }

  if (loading) return <p className="text-center mt-16">Loading Templates...</p>

  return (
    <PrivateRoute>
      <div className="min-h-screen p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Available Templates</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templateData.map((template) => (
            <div key={template.id} className="border rounded shadow bg-white">
              <img src={template.img} alt={template.title} className="w-full h-48 object-cover rounded-t" />
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-xl font-semibold">{template.title}</h2>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => router.push(`/preview/${template.id}`)}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => handleSaveTemplate(template)}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PrivateRoute>
  )
}
