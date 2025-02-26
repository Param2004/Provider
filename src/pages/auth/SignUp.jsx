import { useState } from "react";
import { ChevronLeft, Eye, EyeOff, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="p-4 md:p-6">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700">
            <ChevronLeft className="h-5 w-5" />
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="College Connect Logo" className="h-6 w-6" />
              <span className="font-medium">CollegeConnect</span>
            </div>
          </Link>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-5xl rounded-2xl border border-indigo-900/10 bg-white p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left Side - Illustration */}
            <div className="flex items-center justify-center rounded-xl bg-slate-50 p-8">
              <img
                src="/images/register.png"
                alt="Create Account Illustration"
                className="w-full max-w-md"
              />
            </div>

            {/* Right Side - Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
                <p className="text-gray-500">Connect with colleges</p>
              </div>

              <form className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-900">
                    Enter your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="name"
                    className="w-full rounded-md border border-gray-200 px-3 py-2 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  />
                </div>

                {/* Mobile Input */}
                <div className="space-y-2">
                  <label htmlFor="mobile" className="text-sm font-medium text-gray-900">
                    Mobile
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

                {/* Email Input */}
                {/* <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      placeholder="email"
                      className="w-full rounded-md border border-gray-200 px-3 py-2 pr-10 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                    />
                    <User className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  </div>
                </div> */}

                {/* Password Input */}
                <div className="space-y-2">
                  <label htmlFor="password1" className="text-sm font-medium text-gray-900">
                    Enter Password
                  </label>
                  <div className="relative">
                    <input
                      id="password1"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full rounded-md border border-gray-200 px-3 py-2 pr-10 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">Must be at least 8 characters.</p>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label htmlFor="password2" className="text-sm font-medium text-gray-900">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="password2"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full rounded-md border border-gray-200 px-3 py-2 pr-10 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">Enter the Password again.</p>
                </div>

                {/* Submit Button */}
                {/* <Link to="/verify-otp"> */}
                  <button
                    type="submit"
                    className="w-full bg-[#2c26b0] hover:bg-[#2c26b0]/90 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
                  >
                    Register
                  </button>
                {/* </Link> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}