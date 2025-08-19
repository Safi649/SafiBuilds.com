import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import PrivateRoute from "../components/PrivateRoute"
import { auth, db } from "../firebase"
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore"

export default function DashboardPage() {
  const router = useRouter()
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

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

  const handleSaveBlank = async () => {
    if (!userData) return
    const planLimit = userData.plan === "Free" ? 3 : userData.plan === "Pro" ? 10 : 100
    const savedCount = userData.savedTemplates ? userData.savedTemplates.length : 0

    if (savedCount >= planLimit) {
      alert(`Your plan allows only ${planLimit} templates. Upgrade to save more.`)
      return
    }

    const blankTemplate = {
      templateId: `blank-${new Date().getTime()}`,
      title: "Blank Template",
      savedAt: new Date(),
    }

    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      savedTemplates: arrayUnion(blankTemplate),
    })

    setUserData({
      ...userData,
      savedTemplates: [...(userData.savedTemplates || []), blankTemplate],
    })

    alert("Blank template saved successfully!")
  }

  const handleLogout = async () => {
    await auth.signOut()
    router.push("/login")
  }

  if (loading) return <p className="text-center mt-16">Loading Dashboard...</p>

  return (
    <PrivateRoute>
      <div className="min-h-screen p-8 bg-gray-100">
        <div className="max-w-5xl mx-auto bg-white rounded shadow p-8 space-y-8">
          <h1 className="text-3xl font-bold text-center">Dashboard</h1>

          {/* Profile Info */}
          {userData && (
            <div className="border p-4 rounded bg-gray-50 space-y-2">
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>Plan:</strong> {userData.plan}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={() => router.push("/blank")}
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Blank Template
            </button>
            <button
              onClick={() => router.push("/pricing")}
              className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Upgrade Plan
            </button>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
            <button
              onClick={handleSaveBlank}
              className="px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
            >
              Save Blank Template
            </button>
          </div>

          {/* Saved Templates */}
          {userData && userData.savedTemplates && userData.savedTemplates.length > 0 ? (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Saved Templates</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {userData.savedTemplates.map((t) => (
                  <div key={t.templateId} className="border rounded p-4 bg-gray-50">
                    <h3 className="font-semibold">{t.title}</h3>
                    <p className="text-sm text-gray-500">{new Date(t.savedAt.seconds ? t.savedAt.seconds * 1000 : t.savedAt).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="mt-8 text-gray-600 text-center">You have not saved any templates yet.</p>
          )}
        </div>
      </div>
    </PrivateRoute>
  )
}
