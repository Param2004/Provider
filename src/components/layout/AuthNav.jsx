import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/assets/images/logo.png"
                alt="College Connect Logo"
                className="h-6 w-auto"
              />
              <span className="text-[#000000] text-lg font-medium">collegeconnect</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex flex-1 mx-8">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search Alumni"
                className="w-full bg-[#f6f7f9] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <div className="absolute inset-y-0 right-0 flex items-center mr-10">
                <svg className="h-5 w-5 text-[#757575]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="h-5 w-5 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 hover:bg-gray-100 rounded-full py-1 px-2"
              >
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    alt="User avatar"
                    className="h-8 w-8 rounded-full"
                    onError={(e) => {
                      e.target.style.display = "none"
                      e.target.parentElement.innerHTML = "AD"
                    }}
                  />
                </div>
                <span className="text-sm font-medium">Aditya Dev</span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                  <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </a>
                  <a href="#meetings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Upcoming meetings
                  </a>
                  <a href="#logout" className="block px-4 py-2 text-sm text-[#ff4747] hover:bg-gray-100">
                    Log Out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Search Bar */}
      <div className="sm:hidden max-w-2xl mx-8">
        <div className="relative">
          <input
            type="search"
            placeholder="Search Alumni"
            className="w-full bg-[#f6f7f9] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <div className="absolute inset-y-0 right-0 flex items-center mr-10">
            <svg className="h-5 w-5 text-[#757575]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  )
}