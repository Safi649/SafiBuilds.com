// 📁 firebase.js
import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZFgNm5m6H4sMICbJDRlOrFyfzCjZXgas",
  authDomain: "safibuilds-com.firebaseapp.com",
  projectId: "safibuilds-com",
  storageBucket: "safibuilds-com.firebasestorage.app",
  messagingSenderId: "65042522437",
  appId: "1:65042522437:web:a19502b9a284ea2938de2c",
  measurementId: "G-V5BNSK5BMY"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
const db = getFirestore(app)
const analytics = getAnalytics(app)

export { app, auth, db, analytics }
