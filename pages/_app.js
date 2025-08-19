// 📁 pages/_app.js
import '@/styles/globals.css'   // ✅ Import Tailwind styles

// This is the custom App component in Next.js
// It wraps all pages with global providers, styles, etc.
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* You can add global components like Navbar/Footer here if needed */}
      <Component {...pageProps} />
    </>
  )
}
