import { useState, useRef } from "react"
import {
  Building,
  Calendar,
  MapPin,
  Phone,
  Video,
  MessageCircle,
  Link2,
  ChevronDown,
  Search,
  Download,
  MoreVertical,
  Share2,
  CheckCircle,
  Edit,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Copy,
  X,
  Camera,
} from "lucide-react";
import Navbar from "./AuthNav";
import Footer from "./Footer";

const Profile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=180&width=180")
  const [isHoveringImage, setIsHoveringImage] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current.click()
  }

  const copyProfileLink = () => {
    navigator.clipboard.writeText(window.location.href)
    // You could add a toast notification here
    setTimeout(() => setIsShareModalOpen(false), 500)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      {/* Navigation Bar */}
      {/* <nav className="flex items-center justify-between p-4 border-b border-gray-200 bg-white shadow-sm">
        <div className="flex items-center space-x-6">
          <div className="text-xl font-bold">
            <span>Unikon</span>
            <span className="text-teal-500">.ai</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>UniShorts</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>Find people</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <div className="absolute left-3 flex items-center justify-center h-6 w-6 rounded-full bg-gray-200">
              <span className="text-xs">AI</span>
            </div>
            <input
              type="text"
              placeholder="How to build a strong|"
              className="pl-12 pr-4 py-2 bg-gray-100 rounded-full w-80 focus:outline-none border border-gray-200"
            />
            <Search className="absolute right-3 h-4 w-4 text-gray-500" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </button>
        </div>
      </nav> */}

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          {/* Profile Header */}
          <div className="flex justify-between mb-6">
            <div></div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1">
                <div className="flex -space-x-2">
                  <div className="h-6 w-6 rounded-full bg-yellow-500"></div>
                  <div className="h-6 w-6 rounded-full bg-gray-400"></div>
                </div>
                <span className="text-sm">1.0k Konnections</span>
              </div>
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsShareModalOpen(true)}
              >
                <Share2 className="h-5 w-5" />
              </button>
              <div className="relative">
                <button
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <MoreVertical className="h-5 w-5" />
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10 overflow-hidden origin-top-right animate-in slide-in-from-top-2 duration-200">
                    <div className="py-1">
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Profile
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Profile Link
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors duration-150">
                        <X className="h-4 w-4 mr-2" />
                        Report Profile
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Profile Image and Rating */}
            <div className="flex flex-col items-center space-y-4">
              <div
                className="relative cursor-pointer group"
                onMouseEnter={() => setIsHoveringImage(true)}
                onMouseLeave={() => setIsHoveringImage(false)}
                onClick={triggerFileInput}
              >
                <img
                  src={profileImage || "/placeholder.svg"}
                  alt="Arjun Vaidya"
                  className="rounded-full w-[180px] h-[180px] object-cover border-4 border-gray-100 shadow-md transition-all duration-200"
                />
                <div
                  className={`absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center transition-opacity duration-200 ${isHoveringImage ? "opacity-100" : "opacity-0"}`}
                >
                  <Camera className="h-8 w-8 text-white" />
                  <span className="sr-only">Upload profile picture</span>
                </div>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-yellow-500 text-2xl font-bold">
                  <span className="mr-1">★</span>
                  <span>4.8</span>
                </div>
                <a href="#" className="text-sm text-gray-500 hover:underline">
                  44 reviews
                </a>
              </div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full py-2 px-4 w-full flex items-center justify-center transition-colors duration-200">
                <span className="mr-2">+</span> Add to network
              </button>
            </div>

            {/* Right Column - Profile Details */}
            <div className="flex-1 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-3xl font-bold">Arjun Vaidya</h1>
                  <div className="flex items-center gap-1 text-teal-500">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm">Unikon verified</span>
                  </div>
                </div>
                <p className="text-xl text-gray-600">Co-founder, V3 Ventures | Founder, Dr. Vaidya's</p>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Building className="h-5 w-5" />
                  <span>V3 Ventures</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>10+ Years</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>Mumbai</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg mb-2">I can help with:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm transition-colors duration-150">
                    Startup Mentoring
                  </span>
                  <span className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm transition-colors duration-150">
                    Fundraising Advisory
                  </span>
                  <span className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm transition-colors duration-150">
                    Investment Advising
                  </span>
                  <span className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm transition-colors duration-150">
                    Entrepreneurship
                  </span>
                  <span className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm transition-colors duration-150">
                    D2C
                  </span>
                </div>
              </div>

              <p className="text-gray-600">
                D2C, Ecommerce, Fundraising, Pitching Your Idea, Performance Marketing, Getting into VC/PE, Angel
                Investing
              </p>

              {/* Pricing Options */}
              <div className="grid grid-cols-3 gap-4 max-w-lg">
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-teal-100 flex items-center justify-center mb-2">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <span className="font-bold">₹3K</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <Video className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="font-bold">₹3.7K</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                    <MessageCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <span className="font-bold">₹400</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="col-span-2">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl mb-4">Next available at</h3>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-5 w-5" />
                  <span className="text-lg">3:30 PM - 21st Feb</span>
                </div>
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition-colors duration-200">
                  Book now <span className="ml-1">→</span>
                </button>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl mb-4">Social media links</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  <Link2 className="h-6 w-6 text-gray-500" />
                  <Facebook className="h-6 w-6 text-gray-500 hover:text-blue-600 transition-colors duration-200" />
                  <Instagram className="h-6 w-6 text-gray-500 hover:text-pink-600 transition-colors duration-200" />
                  <Linkedin className="h-6 w-6 text-gray-500 hover:text-blue-700 transition-colors duration-200" />
                  <Twitter className="h-6 w-6 text-gray-500 hover:text-blue-400 transition-colors duration-200" />
                  <Youtube className="h-6 w-6 text-gray-500 hover:text-red-600 transition-colors duration-200" />
                </div>
                <div className="text-gray-500 text-sm">JOINED ON Sep, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Share Modal */}
      {isShareModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-in fade-in duration-200">
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Share Profile</h3>
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-150"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <button className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-150">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Facebook className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-xs">Facebook</span>
              </button>

              <button className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-150">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Twitter className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-xs">Twitter</span>
              </button>

              <button className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-150">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Linkedin className="h-5 w-5 text-blue-700" />
                </div>
                <span className="text-xs">LinkedIn</span>
              </button>

              <button className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-150">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-xs">WhatsApp</span>
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                value={window.location.href}
                readOnly
                className="w-full p-3 pr-12 border border-gray-300 rounded-lg bg-gray-50"
              />
              <button
                onClick={copyProfileLink}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded hover:bg-gray-200 transition-colors duration-150"
              >
                <Copy className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Profile















// import { useState } from "react";
// import AuthNav from "./AuthNav";
// import { PhoneIcon, PencilIcon } from "@heroicons/react/outline";


// const Profile = () => {
//   const [isEditing, setIsEditing] = useState(false)
//   const [profile, setProfile] = useState({
//     name: "Jane Doe",
//     title: "Software Developer",
//     email: "jane.doe@example.com",
//     phone: "+1 (555) 123-4567",
//     location: "San Francisco, CA",
//     bio: "Passionate about creating intuitive and efficient web applications. Always eager to learn new technologies and solve complex problems.",
//     skills: ["React", "JavaScript", "Node.js", "Python", "SQL", "Git"],
//   })

//   const handleEdit = () => {
//     setIsEditing(!isEditing)
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setProfile((prevProfile) => ({
//       ...prevProfile,
//       [name]: value,
//     }))
//   }

//   const handleSkillChange = (e) => {
//     const skills = e.target.value.split(",").map((skill) => skill.trim())
//     setProfile((prevProfile) => ({
//       ...prevProfile,
//       skills,
//     }))
//   }

//   return (
//     <>
//     <AuthNav />
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="md:flex">
//           <div className="md:flex-shrink-0">
//             <img
//               className="h-48 w-full object-cover md:w-48"
//               src="/placeholder.svg?height=192&width=192"
//               alt="Profile"
//             />
//           </div>
//           <div className="p-8 w-full">
//             <div className="flex justify-between items-start">
//               <div>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="name"
//                     value={profile.name}
//                     onChange={handleChange}
//                     className="text-2xl font-bold text-gray-900 mb-1 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <h2 className="text-2xl font-bold text-gray-900 mb-1">{profile.name}</h2>
//                 )}
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="title"
//                     value={profile.title}
//                     onChange={handleChange}
//                     className="text-xl text-gray-600 mb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   <p className="text-xl text-gray-600 mb-2">{profile.title}</p>
//                 )}
//               </div>
//               <button
//                 onClick={handleEdit}
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
//               >
//                 <PencilIcon className="h-5 w-5 mr-2" />
//                 {isEditing ? "Save" : "Edit"}
//               </button>
//             </div>
//             <div className="mt-4 space-y-3">
//               <div className="flex items-center text-gray-600">
//                 {/* <EnvelopeIcon className="h-5 w-5 mr-2" /> */}
//                 {isEditing ? (
//                   <input
//                     type="email"
//                     name="email"
//                     value={profile.email}
//                     onChange={handleChange}
//                     className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   profile.email
//                 )}
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <PhoneIcon className="h-5 w-5 mr-2" />
//                 {isEditing ? (
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={profile.phone}
//                     onChange={handleChange}
//                     className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   profile.phone
//                 )}
//               </div>
//               <div className="flex items-center text-gray-600">
//                 {/* <MapPinIcon className="h-5 w-5 mr-2" /> */}
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="location"
//                     value={profile.location}
//                     onChange={handleChange}
//                     className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
//                   />
//                 ) : (
//                   profile.location
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="px-8 py-6 bg-gray-50">
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">Bio</h3>
//           {isEditing ? (
//             <textarea
//               name="bio"
//               value={profile.bio}
//               onChange={handleChange}
//               className="w-full h-32 p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           ) : (
//             <p className="text-gray-600">{profile.bio}</p>
//           )}
//         </div>
//         <div className="px-8 py-6">
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">Skills</h3>
//           {isEditing ? (
//             <input
//               type="text"
//               value={profile.skills.join(", ")}
//               onChange={handleSkillChange}
//               className="w-full p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               placeholder="Enter skills separated by commas"
//             />
//           ) : (
//             <div className="flex flex-wrap gap-2">
//               {profile.skills.map((skill, index) => (
//                 <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Profile