import PrivateRoute from "../components/PrivateRoute"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { auth, db } from "../firebase"
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore"

function BlankTemplateContent() {
  const router = useRouter()
  const [elements, setElements] = useState([])
  const [user, setUser] = useState(null)

  // Fetch saved canvas
  useEffect(() => {
    const fetchUser = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid))
        if (userDoc.exists()) {
          setUser(userDoc.data())
          // Load saved blank template elements if any
          const saved = userDoc.data().blankTemplate || []
          setElements(saved)
        }
      }
    }
    fetchUser()
  }, [])

  // Add element
  const addElement = (type) => {
    const newElement = { id: Date.now(), type, content: "" }
    setElements([...elements, newElement])
  }

  // Update element content
  const updateElement = (id, content) => {
    setElements(elements.map(el => el.id === id ? { ...el, content } : el))
  }

  // Save canvas to Firestore
  const saveCanvas = async () => {
    if (!user) return
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      blankTemplate: elements
    })
    alert("Canvas saved successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded shadow p-8">
        <h1 className="text-3xl font-bold mb-6">Blank Website Canvas</h1>

        <div className="flex gap-2 mb-6">
          <button onClick={() => addElement("text")} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Add Text</button>
          <button onClick={() => addElement("image")} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Add Image</button>
          <button onClick={() => addElement("button")} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">Add Button</button>
          <button onClick={saveCanvas} className="ml-auto px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Save Canvas</button>
        </div>

        <div className="border-2 border-dashed border-gray-300 min-h-[500px] p-4 flex flex-col gap-4">
          {elements.map((el) => (
            <div key={el.id}>
              {el.type === "text" && (
                <input
                  type="text"
                  placeholder="Enter text"
                  value={el.content}
                  onChange={(e) => updateElement(el.id, e.target.value)}
                  className="w-full px-2 py-1 border rounded"
                />
              )}
              {el.type === "image" && (
                <input
                  type="text"
                  placeholder="Image URL"
                  value={el.content}
                  onChange={(e) => updateElement(el.id, e.target.value)}
                  className="w-full px-2 py-1 border rounded"
                />
              )}
              {el.type === "button" && (
                <input
                  type="text"
                  placeholder="Button Text"
                  value={el.content}
                  onChange={(e) => updateElement(el.id, e.target.value)}
                  className="w-full px-2 py-1 border rounded"
                />
              )}
            </div>
          ))}
        </div>

        <button onClick={() => router.push("/dashboard")} className="mt-6 px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition">
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
