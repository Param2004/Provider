import FilterColleges from "../../components/college/FilterColleges";
import faqData from "../../data/faqData";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer"
import { useState } from 'react';
import { Phone, MessageCircle, ArrowUp } from "lucide-react"
import { Link } from "react-router-dom";

const CollegePredictor = () => {
  const [isGridView, setIsGridView] = useState(true);

  const FloatingActions = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  
    return (
      <div className="fixed bottom-4 right-4 flex flex-col gap-2">
        <button
          onClick={() => window.open("https://wa.me/your-number", "_blank")}
          className="p-3 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
        </button>
        <button
          onClick={() => window.open("tel:your-number")}
          className="p-3 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors"
        >
          <Phone className="h-5 w-5" />
        </button>
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      {/* Results Section */}

      <FloatingActions />
      <Footer />
    </>
  );
};

export default CollegePredictor;