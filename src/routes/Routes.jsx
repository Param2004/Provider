import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccount from '../pages/auth/SignUp';
// import Preferences from '../pages/Preferences';
// import VerifyEmail from '../pages/VerifyEmail';
import VerifyOTP from '../pages/auth/VerifyOTP';
import Login from '../pages/auth/SignIn';
import Profile from '../components/layout/Profile';
import LandingPage from '../pages/LandingPage';
import AboutUs from '../pages/AboutUs';
import College from '../pages/college/College';
import Counsellor from '../pages/counsellor/Counsellor';
import ForgotPassword from '../pages/auth/ForgotPassword';
import CollegeDetails from '../pages/college/collegeDetail';
// import ResetEmail from '../pages/ResetEmail';
export default function Endpoints() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<CreateAccount />} />
        {/* <Route path="/preferences" element={<Preferences />} /> */}
        {/* <Route path="/verify-email" element={<VerifyEmail />} /> */}
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/college" element={<College />} />
        <Route path="/counsellor" element={<Counsellor />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/college/:id" element={<CollegeDetails />} />
        {/* <Route path="/reset-email" element={<ResetEmail />} /> */}
      </Routes>
    </Router>
  );
};