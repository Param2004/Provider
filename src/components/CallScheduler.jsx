import { useState } from "react"
import { FaPhone, FaVideo, FaClock, FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa"

function CallScheduler() {
  // State for selections
  const [callType, setCallType] = useState("video") // 'audio' or 'video'
  const [duration, setDuration] = useState("30") // '15', '30', '45', or '60'
  const [selectedDate, setSelectedDate] = useState("today")

  // Sample data for dates
  const dates = [
    { id: "today", label: "Today", slots: 10 },
    { id: "tomorrow", label: "Tomorrow", slots: 17 },
    { id: "sun", label: "Sun, 23 Feb", slots: 17 },
    { id: "mon", label: "Mon, 24 Feb", slots: 17 },
    { id: "tue", label: "Tue, 25 Feb", slots: 17 },
    { id: "wed", label: "Wed, 26 Feb", slots: 17 },
  ]

  // Sample night slots
  const nightSlots = ["9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM"]

  return (
    <div className="bg-gray-50 text-gray-800 p-4 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-4">
        <div className="space-y-4">
          {/* Select mode to connect */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Select mode to connect</h2>
            <div className="flex gap-6">
              {/* Audio call option */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className={`w-5 h-5 rounded-full border ${callType === "audio" ? "border-teal-500" : "border-gray-300"} cursor-pointer flex items-center justify-center`}
                    onClick={() => setCallType("audio")}
                  >
                    {callType === "audio" && <div className="w-3 h-3 rounded-full bg-teal-500"></div>}
                  </div>
                  {callType === "audio" && (
                    <div className="absolute -top-1 -right-1 bg-teal-500 rounded-full w-5 h-5 flex items-center justify-center">
                      <FaCheck className="w-2 h-2 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCallType("audio")}>
                  <div className="bg-teal-500 w-10 h-10 rounded-full flex items-center justify-center">
                    <FaPhone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">Audio call</span>
                </div>
              </div>

              {/* Video call option */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className={`w-5 h-5 rounded-full border ${callType === "video" ? "border-blue-500" : "border-gray-300"} cursor-pointer flex items-center justify-center`}
                    onClick={() => setCallType("video")}
                  >
                    {callType === "video" && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                  </div>
                  {callType === "video" && (
                    <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
                      <FaCheck className="w-2 h-2 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCallType("video")}>
                  <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
                    <FaVideo className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">Video call</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6"></div>

          {/* Select your option */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Select your option</h2>
            <div className="flex flex-wrap gap-4">
              {/* 15 Min option */}
              <div className="relative flex items-center gap-2">
                <div className="relative">
                  <div
                    className={`w-5 h-5 rounded-full border ${duration === "15" ? "border-blue-500" : "border-gray-300"} cursor-pointer flex items-center justify-center`}
                    onClick={() => setDuration("15")}
                  >
                    {duration === "15" && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                  </div>
                  {duration === "15" && (
                    <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
                      <FaCheck className="w-2 h-2 text-white" />
                    </div>
                  )}
                </div>
                <div
                  className={`${duration === "15" ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"} border rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer`}
                  onClick={() => setDuration("15")}
                >
                  <FaClock className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">15 Min</span>
                  {/* <span className="text-amber-600">(₹999)</span> */}
                </div>
              </div>

              {/* 30 Min option */}
              <div className="relative flex items-center gap-2">
                <div className="relative">
                  <div
                    className={`w-5 h-5 rounded-full border ${duration === "30" ? "border-blue-500" : "border-gray-300"} cursor-pointer flex items-center justify-center`}
                    onClick={() => setDuration("30")}
                  >
                    {duration === "30" && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                  </div>
                  {duration === "30" && (
                    <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
                      <FaCheck className="w-2 h-2 text-white" />
                    </div>
                  )}
                </div>
                <div
                  className={`${duration === "30" ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"} border rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer`}
                  onClick={() => setDuration("30")}
                >
                  <FaClock className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">30 Min</span>
                  {/* <span className="text-amber-600">(₹1.9k)</span> */}
                </div>
              </div>

              {/* 45 Min option */}
              <div className="relative flex items-center gap-2">
                <div className="relative">
                  <div
                    className={`w-5 h-5 rounded-full border ${duration === "45" ? "border-blue-500" : "border-gray-300"} cursor-pointer flex items-center justify-center`}
                    onClick={() => setDuration("45")}
                  >
                    {duration === "45" && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                  </div>
                  {duration === "45" && (
                    <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
                      <FaCheck className="w-2 h-2 text-white" />
                    </div>
                  )}
                </div>
                <div
                  className={`${duration === "45" ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"} border rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer`}
                  onClick={() => setDuration("45")}
                >
                  <FaClock className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">45 Min</span>
                  {/* <span className="text-amber-600">(₹2.9k)</span> */}
                </div>
              </div>

              {/* 60 Min option */}
              <div className="relative flex items-center gap-2">
                <div className="relative">
                  <div
                    className={`w-5 h-5 rounded-full border ${duration === "60" ? "border-blue-500" : "border-gray-300"} cursor-pointer flex items-center justify-center`}
                    onClick={() => setDuration("60")}
                  >
                    {duration === "60" && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                  </div>
                  {duration === "60" && (
                    <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
                      <FaCheck className="w-2 h-2 text-white" />
                    </div>
                  )}
                </div>
                <div
                  className={`${duration === "60" ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"} border rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer`}
                  onClick={() => setDuration("60")}
                >
                  <FaClock className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">60 Min</span>
                  {/* <span className="text-amber-600">(₹3.9k)</span> */}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6"></div>

          {/* Select date */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Select date</h2>
            <div className="relative">
              <div className="flex overflow-x-auto pb-2 gap-4">
                <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-1 z-10 shadow-md rounded-full">
                  <FaChevronLeft className="w-4 h-4 text-gray-600" />
                </button>

                {dates.map((date) => (
                  <div
                    key={date.id}
                    className={`flex-shrink-0 text-center min-w-[120px] p-3 rounded-lg cursor-pointer ${selectedDate === date.id ? "bg-blue-50 border border-blue-200" : ""}`}
                    onClick={() => setSelectedDate(date.id)}
                  >
                    <div className="font-medium">{date.label}</div>
                    <div className="text-sm text-blue-500">{date.slots} slots available</div>
                  </div>
                ))}

                <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-1 z-10 shadow-md rounded-full">
                  <FaChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Night slots */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Night slots <span className="text-gray-500 text-sm">(4 slots)</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nightSlots.map((slot, index) => (
                <div
                  key={index}
                  className="h-12 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200"
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors">
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallScheduler
