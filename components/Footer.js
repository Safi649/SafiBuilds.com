export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">SafiBuilds</h2>
          <p className="text-gray-300">All-in-one website building platform.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <p className="text-gray-300">Email: safi65225@gmail.com</p>
          <p className="text-gray-300">Phone: +923489085366</p>
          <p className="text-gray-300">Location: Swabi, KPK, Pakistan</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Links</h2>
          <ul className="text-gray-300 space-y-1">
            <li>Home</li>
            <li>Templates</li>
            <li>Blank Template</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-900 text-gray-400 text-center py-4">
        © 2025 SafiBuilds. All rights reserved.
      </div>
    </footer>
  )
}
