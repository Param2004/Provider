import Navbar from "../../components/layout/Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import faqData from "../../data/faqData";


export default function CollegeDetails(){
    const { id } = useParams();
    const [showMore, setShowMore] = useState(false);
    const college = faqData.find((c) => c.id.toString() === id);

    if (!college) return <p>College not found</p>;
    const toggleShowMore = () => setShowMore(!showMore);


    return (
        <>
          <Navbar />
          <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8">
              <div className="flex items-start justify-between mb-8">
                <div className="flex gap-4">
                  <img
                    src={college.imgLink}
                    alt="Sharda University"
                    className="w-[120px] h-[120px] rounded-lg object-cover"
                  />
                  <div>
                    <h1 className="text-2xl font-bold mb-1">{college.title}</h1>
                    <p className="text-gray-600 mb-4">{college.location}
                    </p>
                  </div>
                </div>
              </div>
              {/* About Section */}
              <section className="">
                <h2 className="text-xl font-bold mb-4">About</h2>
                <p className="text-gray-600">
                  {college.description}
                </p>
              </section>


              <section className="flex justify-between items-center">
              <div className="">
                <table className="table-fixed mt-12">
                    <tr className="">
                      <th className="text-indigo-600 border border-gray-600 p-2 text-left">Course</th>
                      <td className="border border-gray-600 text-gray-700 p-2">B.Tech.</td>
                      <td className="border border-gray-600 text-gray-700 p-2">M.Tech.</td>
                      <td className="border border-gray-600 text-gray-700 p-2">BBA</td>
                      <td className="border border-gray-600 text-gray-700 p-2">MBA</td>
                      <td className="border border-gray-600 text-gray-700 p-2">BCA</td>
                      <td className="border border-gray-600 text-gray-700 p-2">MCA</td>
                      <td className="border border-gray-600 text-gray-700 p-2">PGDM</td>
                    </tr>
                    <tr className="">
                      <th className="text-indigo-600 border border-gray-600 p-2 text-left">Seats</th>
                      <td className="border border-gray-600 text-gray-700 p-2">320</td>
                      <td className="border border-gray-600 text-gray-700 p-2">120</td>
                      <td className="border border-gray-600 text-gray-700 p-2">180</td>
                      <td className="border border-gray-600 text-gray-700 p-2">60</td>
                      <td className="border border-gray-600 text-gray-700 p-2">120</td>
                      <td className="border border-gray-600 text-gray-700 p-2">120</td>
                      <td className="border border-gray-600 text-gray-700 p-2">180</td>
                    </tr>
                    <tr className="">
                      <th className="text-indigo-600 border border-gray-600 p-2 text-left">Fees( in lakhs )</th>
                      <td className="border border-gray-600 text-gray-700 p-2">2.20</td>
                      <td className="border border-gray-600 text-gray-700 p-2">2-3</td>
                      <td className="border border-gray-600 text-gray-700 p-2">1.5</td>
                      <td className="border border-gray-600 text-gray-700 p-2">2.5</td>
                      <td className="border border-gray-600 text-gray-700 p-2">1.2</td>
                      <td className="border border-gray-600 text-gray-700 p-2">1.5</td>
                      <td className="border border-gray-600 text-gray-700 p-2">2-3</td>
                    </tr>
                </table>
              </div>
              <div className="">
                <button className="bg-indigo-600 rounded py-2 px-6 cursor-pointer text-white" onClick={toggleShowMore}>
                  {showMore ? "Show less" : "Know more"}
                </button>
              </div>
              </section>


              <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${showMore ? 'max-h-96 opacity-100 py-8' : 'max-h-0 opacity-0 py-0'}`}
              >
                {showMore && (
                  <section className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Additional Information</h2>
                    <p className="text-gray-600">
                      This is some additional content about the college. You can add more details here like faculty highlights, campus facilities, or student life.
                    </p>
                  </section>
                )}
              </div>




              {/* Alumni Section */}
              <section className="my-12">
                <h2 className="text-xl font-bold mb-6">Alumni</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={`alumni-${i}`} className="border border-gray-300 rounded-lg p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                          <img src="/placeholder-avatar.jpg" alt="Alumni" className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-medium">Aditya Dev</h3>
                          <p className="text-sm text-gray-600">Works at Microsoft | 2015</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-medium mb-1">About</h4>
                        <p className="text-sm text-gray-600">
                          Alumni are former students of a college or university who have graduated and moved on to their
                          professional or personal pursuits.
                        </p>
                      </div>
                      <button className="w-full py-2 px-4 bg-[#5751e1] hover:bg-[#2c26b0] text-white rounded-md transition-colors">
                        Schedule a Call
                      </button>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Faculty Section */}
              <section className="mb-12">
                <h2 className="text-xl font-bold mb-6">Faculty</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={`faculty-${i}`} className="border border-gray-300 rounded-lg p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                          <img src="/placeholder-avatar.jpg" alt="Faculty" className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-medium">Aditya Dev</h3>
                          <p className="text-sm text-gray-600">Department: AIML</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-medium mb-1">About</h4>
                        <p className="text-sm text-gray-600">
                          Alumni are former students of a college or university who have graduated and moved on to their
                          professional or personal pursuits.
                        </p>
                      </div>
                      <button className="w-full py-2 px-4 bg-[#5751e1] hover:bg-[#2c26b0] text-white rounded-md transition-colors">
                        Schedule a Call
                      </button>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Students Section */}
              <section className="mb-12">
                <h2 className="text-xl font-bold mb-6">Students</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={`student-${i}`} className="border border-gray-300 rounded-lg p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                          <img src="/placeholder-avatar.jpg" alt="Student" className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-medium">Aditya Dev</h3>
                          <p className="text-sm text-gray-600">Branch: AIML</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-medium mb-1">About</h4>
                        <p className="text-sm text-gray-600">
                          Alumni are former students of a college or university who have graduated and moved on to their
                          professional or personal pursuits.
                        </p>
                      </div>
                      <button className="w-full py-2 px-4 bg-[#5751e1] hover:bg-[#2c26b0] text-white rounded-md transition-colors">
                        Schedule a Call
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </>
    )
}