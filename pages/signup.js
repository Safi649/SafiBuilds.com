import { useState } from "react"
import { useRouter } from "next/router"
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../firebase" // <- updated firebase.js

export default function Signup() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(userCredential.user, { displayName: name })

      // Save user info to Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: name,
        email: email,
        plan: "Free",
        createdAt: new Date(),
        savedTemplates: [],
      })

      router.push("/dashboard")
    } catch (err) {
      setError(err.message)
    }
  }

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
      router.push("/dashboard")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleSignup} className="space-y-4">
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"/>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"/>
          <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Sign Up</button>
        </form>
        <button onClick={handleGoogleSignup} className="w-full mt-4 px-4 py-2 border rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition">
          Sign Up with Google
        </button>
        <p className="mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  )
}
