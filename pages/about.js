export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded shadow p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center">About SafiBuilds</h1>
        <p className="text-gray-700 text-lg text-center">
          SafiBuilds is a modern all-in-one website building platform that empowers individuals and businesses to create beautiful, responsive websites easily.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Profile Picture */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/your-photo.jpg" // <-- replace with your image path
              alt="M Abbas Safi"
              className="rounded-full w-40 h-40 object-cover shadow-lg"
            />
          </div>

          {/* Mission & Vision */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-gray-700">
                To provide an intuitive platform where anyone can build professional websites effortlessly, with or without coding experience.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="text-gray-700">
                To become the leading website-building solution globally, enabling creativity and digital growth for all users.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">© 2025 SafiBuilds. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
