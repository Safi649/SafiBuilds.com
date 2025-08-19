import { useEffect } from "react"

export default function Blank() {

  useEffect(() => {
    // Optional: focus on canvas or init editor later
  }, [])

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Blank Canvas</h1>
      <p className="mb-6 text-gray-600 text-center max-w-xl">
        This is your true blank canvas. Start building your website from scratch! No pre-filled content, full freedom.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Start Editing
      </button>
    </div>
  )
}
