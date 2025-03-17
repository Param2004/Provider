import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer"

const CollegePredictor = () => {

  return (
    <>
      <Navbar />
      {/* Results Section */}
      <iframe src="https://rank-predicter.vercel.app/" width="100%" className="mt-5 md:mt-10 h-300 md:h-240"></iframe>
      <Footer />
    </>
  );
};

export default CollegePredictor;