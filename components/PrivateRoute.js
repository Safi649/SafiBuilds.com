// 📁 components/PrivateRoute.js
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"

export default function PrivateRoute({ children }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true)
      } else {
        router.push("/login")
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [router])

  if (loading) return <p className="text-center mt-16">Loading...</p>
  return authenticated ? children : null
}
