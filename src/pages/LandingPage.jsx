import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

export default function LandingPage() {
    return (
      <div>
      <Navbar />
        <section className="flex sm:justify-between items-center justify-center w-full mx-auto my-16 lg:px-16 md:px-8 px-4">
          <div className="flex flex-col justify-center items-center sm:items-start sm:max-w-[50%]">
            <h1 className="lg:text-5xl md:text-4xl text-2xl text-gray-800 sm:text-left text-center leading-18 font-bold mb-4">
              Seamless College and <br/>
              Career Guidance with <br/>
              <span className="text-indigo-600">
              CollegeConnect
              </span>
            </h1>
            <p className="text-xl text-center text-gray-500 mb-8">
              The platform connects colleges, alumni, faculty, students, and counselors.
            </p>
            {/* <button className="w-50 px-6 py-3 rounded cursor-pointer border-none font-semibold bg-indigo-600 transition duration-300 hover:-translate-y-0.5 text-white">
              Create Account
            </button> */}
          </div>
          <img 
            src="/assets/images/home_1.png" 
            alt="College Connect Meeting Illustration" 
            className="sm:max-w-[50%] hidden sm:block" 
          />
        </section>
  
        <section className="mx-auto my-16 lg:px-16 md:px-8 px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="sm:mr-20">
              <h2 className="inline lg:text-5xl md:text-4xl text-2xl font-bold text-indigo-600">Connect </h2>
              <span className="lg:text-5xl md:text-4xl text-2xl"> with</span>
            </div>
            {['Alumni', 'Faculty', 'Student', 'Counsellor'].map((item) => (
              <div key={item} className="text-xl text-gray-700 transition duration-300 hover:-translate-y-0.5 hover:text-indigo-600 active:text-indigo-600  cursor-pointer md:block hidden">
                {item}
              </div>
            ))}
          </div>
        </section>
  
        <section className="bg-[#f8f8ff] py-16">
          <div className="flex justify-between items-center mx-auto lg:px-16 md:px-8 px-4">
            <img 
              src="/assets/images/home_2.png" 
              alt="Alumni Grid Illustration" 
              className="rounded-xl lg:max-w-[60%] md:max-w-[50%] max-w-[40%]" 
            />
            <div className="lg:mx-30 md:mx-20 mx-4">
              <h2 className="lg:text-9xl md:text-6xl font-bold text-indigo-600 mb-4">Alumni</h2>
              <p className="lg:text-xl text-gray-500">
                Connect with the alumni of the colleges, and get real feedback about the college.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
}