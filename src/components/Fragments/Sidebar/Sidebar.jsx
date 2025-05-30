import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  UsersIcon,
  DocumentTextIcon,
  CogIcon,
  ChartBarIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Dashboard", icon: HomeIcon, path: "/courses" },
    { name: "Team", icon: UsersIcon, path: "/team" },
    { name: "Projects", icon: DocumentTextIcon, path: "/projects" },
    { name: "Reports", icon: ChartBarIcon, path: "/reports" },
    { name: "Settings", icon: CogIcon, path: "/settings" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 ease-in-out 
        w-64 bg-white shadow-lg z-40`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center justify-center h-16 px-4 border-b"
          >
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                L
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-800">
                Logo
              </span>
            </div>
          </Link>

          {/* Menu Items */}
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setActiveItem(item.name);
                  // Tutup sidebar di mobile saat memilih menu
                  if (window.innerWidth < 768) {
                    setIsOpen(false);
                  }
                }}
                className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                  activeItem === item.name
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="ml-3">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="px-4 py-4 border-t">
            <button
              onClick={() => {
                // Tambahkan logika logout di sini
                console.log("Logout clicked");
              }}
              className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="ml-3"><a href="/courses">Logout</a></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
