import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-blue-600 text-xl font-bold">
            Acode
          </a>

          {/* Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-lg font-semibold text-gray-700">
            {["Kelas", "Program", "Diskusi", "Event", "Blog"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-blue-600 transition duration-200"
              >
                {item}
              </a>
            ))}

            {/* Tombol Login dan Register */}
            <a
              href="/login"
              className="ml-2 rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 transition"
            >
              Login
            </a>
            <a
              href="/register"
              className="ml-2 rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700 transition"
            >
              Register
            </a>
          </nav>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-md bg-gray-100 p-2 text-gray-700 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            {["Kelas", "Program", "Diskusi", "Event", "Blog"].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                {item}
              </a>
            ))}

            {/* Tombol Login dan Register (Mobile) */}
            <div className="px-4 pt-2 flex flex-col gap-2">
              <a
                href="/login"
                className="hover:text-blue-600 bg-blue-600 rounded-md px-4 py-2 text-sm text-white hover:bg-blue-700 transition text-center"
              >
                Login
              </a>
              <a
                href="/register"
                className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700 transition text-center"
              >
                Register
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
