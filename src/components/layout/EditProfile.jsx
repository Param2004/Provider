import { useState } from "react";
import Navbar from "./AuthNav";
import Footer from "./Footer";

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
)

const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
)

const MessageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

const ShoppingBagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)

const LockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

function EditProfile() {
  const [accordionState, setAccordionState] = useState({
    "basic-info": false,
    "about-me": true,
    "my-expertise": false,
    "my-prices": false,
  })

  const toggleAccordion = (section) => {
    setAccordionState((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 flex gap-8">
        {/* Left Column - Profile */}
        <div className="w-1/3">
          <div className="flex flex-col items-center mb-6">
            <div className="h-36 w-36 mb-4 border-2 border-gray-200 rounded-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-08%20at%2008.34.06_57cefe34.jpg-F4QD1U8ukVmQp9N2PNXhT1fMngo7xO.jpeg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="text-xl mb-4">suprit arya</div>

            <div className="flex gap-4">
              <button className="border border-gray-300 rounded-md px-3 py-1 bg-white hover:bg-gray-50">
                Edit image
              </button>
              <button className="border border-gray-300 rounded-md px-3 py-1 bg-white hover:bg-gray-50">
                Upload Video
              </button>
            </div>
          </div>

          {/* Profile Completion */}
          <div className="bg-white rounded-lg p-4 mb-6 shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="font-medium">Your profile completion score</div>
                <div className="text-amber-600 text-sm">4 actions pending</div>
              </div>
              <div className="relative h-16 w-16">
                <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full border-4 border-teal-500 border-r-transparent border-b-transparent rotate-45"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center font-bold">70%</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-xs text-green-600">
                  ✓
                </div>
                <span className="text-sm">Full name</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-xs text-red-600">
                  !
                </div>
                <span className="text-sm">Profile picture</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-xs text-green-600">
                  ✓
                </div>
                <span className="text-sm">Organization</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-xs text-red-600">
                  !
                </div>
                <span className="text-sm">Email</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-xs text-green-600">
                  ✓
                </div>
                <span className="text-sm">Bio</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-xs text-red-600">
                  !
                </div>
                <span className="text-sm">Work experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-xs text-green-600">
                  ✓
                </div>
                <span className="text-sm">Designation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-xs text-red-600">
                  !
                </div>
                <span className="text-sm">Social profiles</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-xs text-red-600">
                  !
                </div>
                <span className="text-sm">Profile video</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-xs text-green-600">
                  ✓
                </div>
                <span className="text-sm">My expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-xs text-red-600">
                  !
                </div>
                <span className="text-sm">Phone number</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-xs text-red-600">
                  !
                </div>
                <span className="text-sm">Set availability</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-2/3">
          <div className="space-y-4">
            {/* Basic Info */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div
                className="px-4 py-3 flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion("basic-info")}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-1 rounded">
                    <EditIcon />
                  </div>
                  <span className="text-lg font-medium">Basic info</span>
                </div>
                <ChevronDownIcon
                  className={`transform transition-transform ${accordionState["basic-info"] ? "rotate-180" : ""}`}
                />
              </div>

              {accordionState["basic-info"] && (
                <div className="px-4 pb-4">{/* Basic info content would go here */}</div>
              )}
            </div>

            {/* About Me */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div
                className="px-4 py-3 flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion("about-me")}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-1 rounded">
                    <UserIcon />
                  </div>
                  <span className="text-lg font-medium">About me</span>
                </div>
                <ChevronDownIcon
                  className={`transform transition-transform ${accordionState["about-me"] ? "rotate-180" : ""}`}
                />
              </div>

              {accordionState["about-me"] && (
                <div className="px-4 pb-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-2">What is your total work experience?</label>
                        <input
                          type="text"
                          defaultValue="1"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2">Where are you based?</label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="e.g. New Delhi, Bangalore, Mumbai, Guwahati etc."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white pr-10"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <SearchIcon />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between">
                        <label className="block text-sm mb-2">What is your current organisation?</label>
                        <span className="text-xs text-gray-500">Max 110 chars</span>
                      </div>
                      <input
                        type="text"
                        defaultValue="Provider App"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between">
                        <label className="block text-sm mb-2">How would you describe yourself?</label>
                        <span className="text-xs text-gray-500">Max 280 chars</span>
                      </div>
                      <textarea
                        defaultValue="I can help with technology & operations"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* My Expertise */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div
                className="px-4 py-3 flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion("my-expertise")}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-1 rounded">
                    <EditIcon />
                  </div>
                  <span className="text-lg font-medium">My expertise</span>
                </div>
                <ChevronDownIcon
                  className={`transform transition-transform ${accordionState["my-expertise"] ? "rotate-180" : ""}`}
                />
              </div>

              {accordionState["my-expertise"] && (
                <div className="px-4 pb-4">{/* My expertise content would go here */}</div>
              )}
            </div>

            {/* My Prices */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div
                className="px-4 py-3 flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion("my-prices")}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-1 rounded">
                    <LockIcon />
                  </div>
                  <span className="text-lg font-medium">My prices</span>
                </div>
                <ChevronDownIcon
                  className={`transform transition-transform ${accordionState["my-prices"] ? "rotate-180" : ""}`}
                />
              </div>

              {accordionState["my-prices"] && <div className="px-4 pb-4">{/* My prices content would go here */}</div>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EditProfile;