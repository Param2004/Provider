import Navbar from "../../components/layout/AuthNav";
import Footer from "../../components/layout/Footer";
import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CS from "../../components/CallScheduler";
import Student from "../../data/Student";


const CounsellorPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
    setIsSubmitted(false);
  };

  const closePopup = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Simulate a delay before closing the popup
    setTimeout(() => {
      setIsOpen(false);
    }, 1500);
  };



  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Top Counsellors</h1>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
            Filter by Location
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Counsellor Cards */}
        <div className="grid gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-lg border border-gray-300 p-6">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="ABC consultancy"
                    className="h-20 w-20 rounded-lg"
                  />
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-bold">ABC consultancy</h2>
                        <p className="text-sm text-gray-600">Top 10 at collegeconnect | Region : Delhi, NCR</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="font-medium mb-2">About</h3>
                      <p className="text-sm text-gray-600">
                        Alumni are former students of a college or university who have graduated and moved on to their
                        professional or personal pursuits. They play a vital role in supporting current students by
                        sharing experiences, offering mentorship, and providing networking opportunities. Alumni often
                        act as ambassadors for their institution, contributing to its growth and reputation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
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
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">4.5</span>
                    <span className="text-gray-600">/5</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-gray-300 pt-4">
                <div>
                  <span className="text-indigo-600 font-medium">Counselling Fee</span>
                  <span className="ml-2">- Rs 500 / 2 hr</span>
                </div>
                <button onClick={openPopup} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Schedule a Call
                </button>
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h2 className="text-lg font-semibold mb-4 text-center">
                {isSubmitted ? "Success!" : "Fill the Form"}
              </h2>

              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <CheckCircle size={50} className="text-green-500" />
                  <p className="text-green-600 mt-2">Submitted Successfully!</p>
                </motion.div>
              ) : (
                <CS />
              )}

              {!isSubmitted && (
                <button
                  onClick={closePopup}
                  className="mt-4 text-red-500 underline hover:text-red-700"
                >
                  Close
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default CounsellorPage








// import { useState } from "react"
// import Navbar from "../../components/layout/AuthNav"

// const Staff = () => {
//   const [activeTab, setActiveTab] = useState("Upcoming")

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation Bar */}
//       <Navbar />

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 py-6">
//         {/* Profile Section */}
//         <section className="space-y-6">
//           <h1 className="text-2xl font-semibold">Profile</h1>

//           <div className="space-y-4">
//             {/* Profile Header */}
//             <div className="flex items-start gap-4">
//               <img src="/placeholder.svg?height=96&width=96" alt="Large Profile" className="w-24 h-24 rounded-full" />
//               <div>
//                 <div className="flex items-center gap-2">
//                   <h2 className="text-2xl font-semibold">Aditya Dev</h2>
//                   <button className="p-1 hover:bg-gray-100 rounded-full">
//                     <svg
//                       className="h-4 w-4 text-gray-600"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//                 <p className="text-gray-600">Aspirant</p>
//               </div>
//             </div>

//             {/* Achievements Section */}
//             <div className="space-y-2">
//               <h3 className="text-lg font-semibold">Achievements</h3>
//               <p className="text-gray-600 max-w-3xl">
//                 Alumni are former students of a college or university who have graduated and moved on to their
//                 professional or personal pursuits. They play a vital role in supporting current students by sharing
//                 experiences, offering mentorship, and providing networking opportunities. Alumni often act as
//                 ambassadors for their institution, contributing to its growth and reputation.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Tabs Section */}
//         <section className="mt-8">
//           <div className="border-b border-gray-200">
//             <div className="flex gap-8">
//               {["Upcoming", "Saved", "Saved Colleges"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`py-2 px-1 text-gray-600 border-b-2 transition-colors ${
//                     activeTab === tab
//                       ? "border-[#5751e1] text-[#5751e1] font-medium"
//                       : "border-transparent hover:border-gray-300"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Meeting Card */}
//           <div className="mt-6">
//             <div className="max-w-md border border-gray-200 rounded-lg p-6 space-y-4">
//               <div className="flex items-center gap-3">
//                 <img src="/placeholder.svg?height=40&width=40" alt="Deva" className="w-10 h-10 rounded-full" />
//                 <span className="text-lg font-medium">Deva</span>
//               </div>

//               <div className="space-y-1">
//                 <div className="flex gap-2">
//                   <span className="text-gray-600">Date :</span>
//                   <span>15 Jan 2025</span>
//                 </div>
//                 <div className="flex gap-2">
//                   <span className="text-gray-600">Time :</span>
//                   <span>10:00 PM</span>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <button className="flex-1 bg-[#5751e1] hover:bg-[#2c26b0] text-white py-2 px-4 rounded-md transition-colors">
//                   Start Meeting
//                 </button>
//                 <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
//                   <svg
//                     className="h-4 w-4 text-gray-600"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }

// export default Staff;