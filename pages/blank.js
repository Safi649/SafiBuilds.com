import { useState } from "react"
import PrivateRoute from "../components/PrivateRoute"
import { auth, db } from "../firebase"
import { doc, updateDoc, arrayUnion } from "firebase/firestore"

export default function BlankTemplatePage() {
  const [saving, setSaving] = useState(false)

  const handleSaveBlank = async () => {
    if (!auth.currentUser) return

    setSaving(true)
    try {
      const blankTemplate = {
        templateId: `blank-${new Date().getTime()}`,
        title: "Blank Template",
        savedAt: new Date(),
      }

      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        savedTemplates: arrayUnion(blankTemplate),
      })

      alert("Blank template saved successfully!")
    } catch (error) {
      console.error(error)
      alert("Error saving template. Please try again.")
    }
    setSaving(false)
  }

  return (
    <PrivateRoute>
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Blank Template</h1>
        <div className="w-full max-w-5xl h-[600px] bg-white border rounded shadow flex items-center justify-center">
          <p className="text-gray-400 text-xl">Your blank white canvas</p>
        </div>
        <button
          onClick={handleSaveBlank}
          disabled={saving}
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          {saving ? "Saving..." : "Save Blank Template"}
        </button>
      </div>
    </PrivateRoute>
  )
}
