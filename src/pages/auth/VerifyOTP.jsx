import React, { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function VerifyOTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

    if (element.value && element.nextElementSibling) {
      element.nextElementSibling.focus()
    }
  }

  return (
    <>
    <header className="p-4 flex items-center gap-2">
      <Link to="/forgot-password">
        <button className="text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-6 w-6" />
        </button>
      </Link>
      <div className="flex items-center gap-2">
        <img src="/public/images/logo.png" alt="College Connect Logo" className="w-6 h-6 object-contain" />
        <span className="text-lg font-medium">CollegeConnect</span>
      </div>
    </header>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 space-y-8">

        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-black">Enter OTP</h1>
            <p className="text-gray-600">we have sent an OTP to the entered Contact Number</p>
          </div>

          <div className="flex justify-center">
            <img
              src="/public/images/otp.png"
              alt="Security Illustration"
              className="w-3/4 h-auto object-contain"
            />
          </div>

          <div className="flex justify-center gap-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target, index)}
                className={`w-14 h-14 text-center text-2xl font-bold rounded-lg border-2 
                  ${digit ? "border-indigo-600 bg-indigo-600 text-white" : "border-gray-300 bg-gray-100"}
                  focus:border-indigo-600 focus:outline-none transition-colors`}
              />
            ))}
          </div>

          <button className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
            Didn't receive OTP?
          </button>
        </div>
      </div>
    </div>
    </>
  )
}