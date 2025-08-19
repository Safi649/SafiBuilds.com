import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Templates", href: "/templates" },
    { name: "Blank Template", href: "/blank" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const isActive = (href) =>
    router.pathname === href ||
    (href !== "/" && router.pathname.startsWith(href));

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <nav className="bg-white/90 backdrop-blur shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-blue-600">
          SafiBuilds
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className={`transition font-medium ${
                isActive(l.href) ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {l.name}
            </Link>
          ))}

          {/* Right-side auth actions */}
          {user ? (
            <>
              <Link
                href="/dashboard"
                className={`transition font-semibold px-3 py-1.5 rounded-lg ${
                  isActive("/dashboard")
                    ? "text-blue-700 bg-blue-100"
                    : "text-blue-600 hover:bg-blue-50"
                }`}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="ml-1 px-3 py-1.5 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className={`transition font-semibold ${
                  isActive("/login") ? "text-blue-700" : "text-blue-600 hover:text-blue-700"
                }`}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 text-gray-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          ☰
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-2 py-2 rounded-md ${
                  isActive(l.href)
                    ? "bg-blue-50 text-blue-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {l.name}
              </Link>
            ))}

            <div className="h-px my-2 bg-gray-200" />

            {user ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className={`block px-2 py-2 rounded-md ${
                    isActive("/dashboard")
                      ? "bg-blue-50 text-blue-700 font-semibold"
                      : "text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setOpen(false);
                    handleLogout();
                  }}
                  className="w-full text-left px-2 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className={`block px-2 py-2 rounded-md ${
                    isActive("/login")
                      ? "bg-blue-50 text-blue-700 font-semibold"
                      : "text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
