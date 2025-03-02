import { MapPin, ArrowRight } from "lucide-react"


const CollegeCard = ({ college, colActiv }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-48 w-full">
        <img src={college.imgLink} alt={college.name} className="w-full h-full" />
      </div>
      <div className="p-6">
        <h2 className="text-xl line-clamp-1 font-bold text-[#1a237e] mb-2">{college.title}</h2>
        <div className="flex items-center gap-1 text-gray-600 mb-4">
          <MapPin className="h-4 w-4" />
          <span>{college.location}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{college.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-600">Established</p>
            <p className="text-lg font-semibold text-indigo-600">{college.established}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Area</p>
            <p className="text-lg font-semibold text-indigo-600">{college.area}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">NAAC Grade</p>
            <p className="text-lg text-indigo-600 font-semibold">{college.naacGrade}</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Details <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default CollegeCard;













// import {Link} from "react-router-dom";
// import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
// // import "../globals.scss";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import { HiArrowNarrowRight } from "react-icons/hi";


// function truncateText(text, maxLength) {
//   if (text.length <= maxLength) {
//     return text;
//   } else {
//     return text.slice(0, maxLength) + '...';
//   }
// }

// const CollegeCard = ({ item, colActiv }) => {
//   // const router = useRouter();
//   const navigateToCollegeDetails = () => {
//     // Pass the 'attributes' data to the query parameters
//     // router.push({
//     //   pathname: `/college/${item.id}`, // Specify the target page
//     // });
//   };
//   // const {
//   //   attributes
//   // } = singleData;
//   return (
//     <div
//       className={`property__grid__area__wrapper__inner ${
//         colActiv ? " " : "col-xl-4 col-md-6"
//       }`}
//     >
//       <div
//         className={`property__list__wrapper ${
//           colActiv ? " " : "property__grid"
//         }`}
//       >
//         <div className="row d-flex align-items-center">
//           <div
//             className={`property__grid__area__wrapper__inner__two ${
//               colActiv ? "col-xl-5" : " "
//             }`}
//           >
//             <div className="property__item__image column__space--secondary">
//               <div className="img__effect">
//                 <a onClick={navigateToCollegeDetails}>
//                   <img src={item.imgLink} className="h-20" alt="los" />                </a>
//               </div>
//             </div>
//           </div>
//           <div
//             className={`property__grid__area__wrapper__inner__three ${
//               colActiv ? "col-xl-7" : ""
//             }`}
//           >
//             <div className="property__item__content">
//               <div className="item__head">
//                 <div className="item__head__left">
//                 <Link className="text-decoration-none" to="/property/{id}">
//                   <h4 style={{fontSize:'26px'}}>{truncateText(item.title,21)}</h4>
//                   </Link>
//                   <p>
//                     <i>
//                       <FaMapMarkerAlt />
//                     </i>{item.location}
                    
//                   </p>
//                 {/* </div>
//                 <div className="item__head__right">
//                   <div className="countdown__wrapper">
//                     <p className="secondary">
//                       <i>
//                         <FaClock />
//                       </i>{" "}
//                       Updated At
//                     </p>
//                     <h6>{item.updatedAt}</h6>
//                   </div> */}
//                 </div>
//               </div>
//               <div className="progress__type progress__type--two">
//                 {/* <div className="progress">
//                   <div
//                     className="progress-bar"
//                     role="progressbar"
//                     aria-valuenow="25"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                   ></div>
//                 </div> */}
//                 <div className="project__info">
//                   <p className="project__has">
//                     <span className="project__has__investors">
//                     {!colActiv ? truncateText(item.description, 147) : item.description}
//                     </span>
//                   </p>
//                 </div>
//               </div>
//               <div className="item__info">
//                 <div className="item__info__single">
//                 <p className="secondary">
//                     Course Offered
//                   </p>
//                   <h5>{item.courses}</h5>
//                 </div>
//                 <div className="item__info__single">
//                   <p className="secondary">Avg. Placements</p>
//                   <h5>5LPA</h5>
//                 </div>
//                 <div className="item__info__single">
//                   <p className="secondary">College Code</p>
//                   <h5>{item.code}</h5>
//                 </div>
//                 <div className="item__info__single">
//                   <p className="secondary">Published On</p>
//                   <h5>{item.published}</h5>
//                 </div>
//               </div>
//               <div className="item__footer">
//                 {/* <div className="item__security">
//                   <div className="item__security__content">
//                     <p className="secondary">Price</p>
//                     <h5>{}</h5>
//                   </div>
//                 </div> */}
//                 <div className="item__cta__group">
//                   <a style={{cursor:'pointer'}} onClick={navigateToCollegeDetails} className="button button--effect">
//                     Details <HiArrowNarrowRight className="fs-4" />
//                   </a>
//                   {/* <Link
//                     href={detailsLink}
//                     className="button button--secondary button--effect"
//                   >
//                     Details
//                   </Link> */}
//                 </div>
//               </div>
//               <div className="invest__cta__wrapper">
//                 <div className="countdown__wrapper">
//                   <p className="secondary">
//                     Avg. Placements
//                   </p>
//                   <h6>5LPA</h6>
//                 </div>
//                 <div className="invest__cta">
//                   <a style={{cursor:'pointer'}} onClick={navigateToCollegeDetails} className="button text-decoration-none text-white button--effect">
//                     Details <HiArrowNarrowRight className="fs-4" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CollegeCard;