import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccount from '../pages/auth/SignUp';
// import Preferences from '../pages/Preferences';
// import VerifyEmail from '../pages/VerifyEmail';
import VerifyOTP from '../pages/auth/VerifyOTP';
import Login from '../pages/auth/SignIn';
import Profile from '../pages/Profile';
import EditProfile from '../components/layout/EditProfile';
import LandingPage from '../pages/LandingPage';
import AboutUs from '../pages/AboutUs';
import College from '../pages/college/College';
// import CollegeLP from '../pages/CollegeLP';
import ForgotPassword from '../pages/auth/ForgotPassword';
import Counsellor from '../pages/counsellor/Counsellor';
import Alumni from '../pages/alumni/Alumni';
import Student from '../pages/student/Student';
import Faculty from '../pages/faculty/Faculty';
import CollegeDetails from '../pages/college/CollegeDetails';
import CollegePredictor from '../pages/college/CollegePredictor';
import Staff from '../pages/college/CollegeStaff';
import ScrollToTop from '../components/ScrollToTop'

// import ResetEmail from '../pages/ResetEmail';
export default function Endpoints() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/register" element={<CreateAccount />} />
        {/* <Route path="/preferences" element={<Preferences />} /> */}
        {/* <Route path="/verify-email" element={<VerifyEmail />} /> */}
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/colleges" element={<College />} />
        {/* <Route path="/college-home" element={<CollegeLP />} /> */}
        <Route path="/counsellor" element={<Counsellor />} />
        <Route path="/student" element={<Student />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/college/:id" element={<CollegeDetails />} />
        <Route path="/college-predictor" element={<CollegePredictor />} />
        {/* <Route path="/reset-email" element={<ResetEmail />} /> */}
      </Routes>
    </Router>
  );
};