import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth"
import { app } from "../firebase" // your Firebase config

export default function Dashboard() {
  const auth = getAuth(app)
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "User",
          email: currentUser.email,
          plan: "Free", // placeholder; fetch real plan later from Firestore
        })
      } else {
        router.push("/login")
      }
    })
    return () => unsubscribe()
  }, [auth, router])

  const handleLogout = async () => {
    await signOut(auth)
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>

        {/* Profile Info */}
        {user && (
          <div className="bg-white p-6 rounded shadow space-y-2">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Plan:</strong> {user.plan}</p>
            <button
              onClick={() => router.push("/pricing")}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Upgrade Plan
            </button>
          </div>
        )}

        {/* Blank Template Quick Start */}
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-2xl font-semibold mb-4">Start from Blank Template</h2>
          <p className="mb-4">Click below to start building your website from a true blank canvas.</p>
          <button
            onClick={() => router.push("/blank")}
            className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Start Editing
          </button>
        </div>

        {/* Saved Templates Placeholder */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Your Saved Websites</h2>
          <p className="text-gray-600">You have no saved websites yet.</p>
          {/* Later: Display user's saved websites from Firestore */}
        </div>

        {/* Logout Button */}
        <div className="text-center">
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
