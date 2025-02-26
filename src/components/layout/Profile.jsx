import { useState } from "react";
import AuthNav from "./AuthNav";
import { PhoneIcon, PencilIcon } from "@heroicons/react/outline";


const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Jane Doe",
    title: "Software Developer",
    email: "jane.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Passionate about creating intuitive and efficient web applications. Always eager to learn new technologies and solve complex problems.",
    skills: ["React", "JavaScript", "Node.js", "Python", "SQL", "Git"],
  })

  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }))
  }

  const handleSkillChange = (e) => {
    const skills = e.target.value.split(",").map((skill) => skill.trim())
    setProfile((prevProfile) => ({
      ...prevProfile,
      skills,
    }))
  }

  return (
    <>
    <AuthNav />
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="/placeholder.svg?height=192&width=192"
              alt="Profile"
            />
          </div>
          <div className="p-8 w-full">
            <div className="flex justify-between items-start">
              <div>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="text-2xl font-bold text-gray-900 mb-1 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{profile.name}</h2>
                )}
                {isEditing ? (
                  <input
                    type="text"
                    name="title"
                    value={profile.title}
                    onChange={handleChange}
                    className="text-xl text-gray-600 mb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <p className="text-xl text-gray-600 mb-2">{profile.title}</p>
                )}
              </div>
              <button
                onClick={handleEdit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
              >
                <PencilIcon className="h-5 w-5 mr-2" />
                {isEditing ? "Save" : "Edit"}
              </button>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center text-gray-600">
                {/* <EnvelopeIcon className="h-5 w-5 mr-2" /> */}
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  profile.email
                )}
              </div>
              <div className="flex items-center text-gray-600">
                <PhoneIcon className="h-5 w-5 mr-2" />
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  profile.phone
                )}
              </div>
              <div className="flex items-center text-gray-600">
                {/* <MapPinIcon className="h-5 w-5 mr-2" /> */}
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                    className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  profile.location
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 py-6 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Bio</h3>
          {isEditing ? (
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="w-full h-32 p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          ) : (
            <p className="text-gray-600">{profile.bio}</p>
          )}
        </div>
        <div className="px-8 py-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Skills</h3>
          {isEditing ? (
            <input
              type="text"
              value={profile.skills.join(", ")}
              onChange={handleSkillChange}
              className="w-full p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter skills separated by commas"
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile