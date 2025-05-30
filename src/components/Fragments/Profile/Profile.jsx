// src/Profile/Profile.jsx
import { useState, useEffect } from "react";

export default function Profile() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind 'md'
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  if (isMobile) {
    return (
      <div className="flex flex-col gap-2">
        <a
          href="/account"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          My Profile
        </a>
        <a
          href="/settings"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Settings
        </a>
        <button
          onClick={handleLogout}
          className="text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
      >
        <img
          src="/images/profile2.png"
          alt="Profile"
          className="h-10 w-10 object-cover"
        />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-md z-50">
          <div className="p-2">
            <a
              href="/account"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              My Profile
            </a>
            <a
              href="/settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
          </div>
          <div className="p-2 border-t border-gray-100">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
