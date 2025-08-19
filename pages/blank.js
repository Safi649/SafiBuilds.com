import PrivateRoute from "../components/PrivateRoute"
import { useRouter } from "next/router"

function BlankTemplateContent() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded shadow p-8">
        <h1 className="text-3xl font-bold mb-6">Blank Website Canvas</h1>
        <p className="mb-6 text-gray-700">Start building your website manually from a true blank canvas.</p>

        {/* Placeholder for future website editor */}
        <div className="border-2 border-dashed border-gray-300 h-[500px] flex items-center justify-center text-gray-400">
          Your editable website canvas will appear here
        </div>

        <button onClick={() => router.push("/dashboard")} className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Back to Dashboard
        </button>
      </div>
    </div>
  )
}

export default function BlankTemplatePage() {
  return (
    <PrivateRoute>
      <BlankTemplateContent />
    </PrivateRoute>
  )
}
