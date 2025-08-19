import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { auth } from '../firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDZFgNm5m6H4sMICbJDRlOrFyfzCjZXgas",
  authDomain: "safibuilds-com.firebaseapp.com",
  projectId: "safibuilds-com",
  storageBucket: "safibuilds-com.firebasestorage.app",
  messagingSenderId: "65042522437",
  appId: "1:65042522437:web:a19502b9a284ea2938de2c",
  measurementId: "G-V5BNSK5BMY"
};

// Initialize Firebase App
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

let analytics;
if (typeof window !== "undefined") {
  // Only initialize Analytics on the client
  import("firebase/analytics").then((module) => {
    analytics = module.getAnalytics(app);
  });
}

export { app, auth, db, analytics };
