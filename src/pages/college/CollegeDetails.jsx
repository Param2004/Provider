import Navbar from "../../components/layout/Navbar";
import { useParams } from "react-router-dom";
import faqData from "../../data/faqData";


export default function CollegeDetails(){
    const { id } = useParams();
    const college = faqData.find((c) => c.id.toString() === id);

    if (!college) return <p>College not found</p>;


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
              <section className="mb-12">
                <h2 className="text-xl font-bold mb-4">About</h2>
                <p className="text-gray-600">
                  {college.description}
                </p>
              </section>
              {/* Alumni Section */}
              <section className="mb-12">
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