// import FilterColleges from "../../components/college/FilterColleges";
// import faqData from "../../data/faqData";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer"
// import { useState } from 'react';
// import { Phone, MessageCircle, ArrowUp } from "lucide-react"
// import { Link } from "react-router-dom";

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