import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import FAQs from "../../components/college/FAQs"
import Data from "../../data/faqData";


export default function CollegeDetails(){
    const { id } = useParams();
    const [showMore, setShowMore] = useState(false);
    const college = Data.find((c) => c.id.toString() === id);

    if (!college) return <p>College not found</p>;
    const toggleShowMore = () => setShowMore(!showMore);


    return (
        <>
          <Navbar />
          <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8">
              <div className="flex items-start justify-between mb-8">
                <div className="flex justify-center items-center sm:flex-row flex-col gap-4">
                  <img
                    src={college.imgLink}
                    alt="Sharda University"
                    className="w-[240px] h-[240px] rounded-lg object-cover"
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


              <section className="flex flex-col justify-between items-center mt-10">

              <div className="my-4">
                <h4 className="font-bold text-xl text-gray-800 my-4">Fee Structure (2023-2024):</h4>
                {/* <h6 className="text-gray-700 my-2">For more Details, Download Brochure</h6> */}
                
                {college.FeeMatrix ? (
                  <div style={{ overflowX: 'auto' }}>
                  <table>
                    <thead>
                      <tr>
                        <th className="text-gray-600">
                          Courses
                        </th>
                        <th className="text-gray-600">
                          Fees
                        </th>
                        <th className="text-gray-600">
                          Total Seats
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(college.FeeMatrix).map(([course, details]) => (
                        <tr key={course}>
                          <td className="border border-gray-300 px-5 sm:px-20 py-2">
                            <p style={{wordWrap: 'break-word'}}>{course}</p>
                          </td>
                          <td className="border border-gray-300 px-5 sm:px-20 py-2">
                            {details.fees}
                          </td>
                          <td className="border border-gray-300 px-5 sm:px-20 py-2">
                          {details.seats}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                ) : (
                  <p>No fee structure available</p>
                )}
              </div>

              <div className="my-4">
                <button className="bg-indigo-600 rounded py-2 px-6 cursor-pointer text-white" onClick={toggleShowMore}>
                  {showMore ? "Show less" : "Know more"}
                </button>
              </div>
              </section>


              <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${showMore ? 'opacity-100 py-8' : 'max-h-0 opacity-0 py-0'}`}
              >
                {showMore && (
                  <section className="flex flex-col justify-center items-center mt-8">

                    <div>
                      <h4 className="font-bold text-xl text-gray-800">Frequently asked questions:</h4>
                      <div>
                        {college.faqs ? (
                          college.faqs.map((item, i) => <FAQs key={item.id} i={i} item={item} />)
                        ) : "No FAQs Found!"}
                      </div>
                    </div>


                    <div className="m-20">
                      {college.mapLink ? (
                      <div>{college.mapLink}</div>
                      ) : "No Map Found !"}
                    </div>
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
          <Footer />
        </>
    )
}