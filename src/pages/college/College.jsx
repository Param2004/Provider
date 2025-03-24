import FilterColleges from "../../components/college/FilterColleges";
import CollegeData from "../../data/CData";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer"
import { useState } from 'react';
import { LayoutGrid, List} from "lucide-react"
import CollegeCard from "../../components/college/CollegeCard";

const Property = () => {
  const [filteredData, setFilteredData] = useState(CollegeData);

  const handleResetData = () => {
    setFilteredData(CollegeData);
  };

  const handleFilterChange = (filteredData) => {
    setFilteredData(filteredData);
  };
  const [colActiv, setColActiv] = useState(false);


  return (
    <>
      <Navbar />
      <FilterColleges data={CollegeData} onFilterChange={handleFilterChange} onReset={handleResetData} />
      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <p className="text-gray-600 mb-4 sm:mb-0">
            Showing <span className="text-indigo-600 font-medium">{filteredData.length}</span> colleges
          </p>
          <div className="flex items-center space-x-4">
            {/* <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="relevance">Sort by Relevance</option>
              <option value="rating">Sort by Rating</option>
              <option value="fees">Sort by Fees</option>
            </select> */}
            <div className="hidden sm:flex space-x-2">
              <button
                onClick={() => setColActiv(false)}
                className={`p-2 rounded-lg ${
                  !colActiv ? "bg-indigo-600 text-white" : "bg-white text-gray-600 border border-gray-300"
                }`}
              >
                <LayoutGrid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setColActiv(true)}
                className={`p-2 rounded-lg ${
                  colActiv ? "bg-indigo-600 text-white" : "bg-white text-gray-600 border border-gray-300"
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* College Grid/List */}
        <main className="container mx-auto px-4 py-8">
        <div className={`grid grid-cols-1 md:${colActiv ? "grid-cols-1" : "grid-cols-2"} lg:${colActiv ? "grid-cols-2" : "grid-cols-3"} gap-6`}>
          {filteredData.map((college) => (
            <CollegeCard key={college.id} college={college} colActiv={colActiv} />
          ))}
        </div>
      </main>
      </div>
      <Footer />
    </>
  );
};

export default Property;