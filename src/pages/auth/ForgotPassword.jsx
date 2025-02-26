import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function ForgotPassword() {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="p-4 flex items-center gap-2">
      <Link to="/login">
        <button className="text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-6 w-6" />
        </button>
      </Link>
        <div className="flex items-center gap-2">
          <img src="/public/images/logo.png" alt="College Connect Logo" className="w-6 h-6 object-contain" />
          <span className="text-lg font-medium">CollegeConnect</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Illustration */}
            <div className="hidden md:block">
              <img
                src="/public/images/otp.png"
                alt="Login Illustration"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Side - Login Form */}
            <div className="max-w-md w-full mx-auto space-y-8">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">Forgot Password</h1>
                <p className="text-gray-600">Forgot your password ?</p>
              </div>

              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Enter Your Mobile Number
                    </label>
                    <div className="flex">
                      <div className="flex items-center gap-2 rounded-l-md border border-r-0 border-gray-200 bg-white px-3 text-gray-500">
                        +91
                      </div>
                      <input
                        id="mobile"
                        type="tel"
                        className="w-full rounded-r-md border border-gray-200 px-3 py-2 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                      />
                    </div>
                  </div>
                </div> 

                <Link to="/verify-otp">
                  <button
                    type="submit"
                    className="w-full bg-[#2c26b0] hover:bg-[#2c26b0]/90 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
                  >
                    Continue
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}