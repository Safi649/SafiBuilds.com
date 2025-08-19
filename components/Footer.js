import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-white text-xl font-bold">SafiBuilds</h3>
          <p className="mt-2 text-gray-400">
            Build beautiful websites from templates or a blank canvas.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Pages</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/templates" className="hover:text-white">Templates</Link></li>
            <li><Link href="/blank" className="hover:text-white">Blank Template</Link></li>
            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Account</h4>
          <ul className="space-y-2">
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
            <li><Link href="/register" className="hover:text-white">Register</Link></li>
            <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-950 text-gray-500 text-center py-4 text-sm">
        © {new Date().getFullYear()} SafiBuilds. All rights reserved.
      </div>
    </footer>
  );
}
