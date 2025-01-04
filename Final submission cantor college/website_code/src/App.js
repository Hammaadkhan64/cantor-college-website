import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import HowToFindUs from "./pages/HowToFindUs/HowToFindUs";
import ComputingCourses from "./pages/ComputingCourses/ComputingCourses";
import DesignCourses from "./pages/DesignCourses/DesignCourses";
import Facilities from "./pages/Facilities/Facilities";
import LearningResources from "./pages/LearningResources/LearningResources";
import InformationForStaff from "./pages/InformationForStaff/InformationForStaff";
import InformationForStudents from "./pages/InformationForStudents/InformationForStudents";
import WorkingWithBusiness from "./pages/WorkingWithBusiness/WorkingWithBusiness";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('nav') === null) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/" className="title">
            CantorCollege
          </Link>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <form className="search-form">
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input" 
            />
            <button type="submit" className="search-button"></button>
          </form>

          <ul className={menuOpen ? "open" : ""}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li>
              <div 
                className="dropdown" 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)} 
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span className="dropdown-trigger">Pages</span>
                <ul className={dropdownOpen ? "dropdown-menu open" : "dropdown-menu"}>
                  <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                  <li><Link to="/how-to-find-us" onClick={() => setMenuOpen(false)}>How to Find Us</Link></li>
                  <li><Link to="/computing-courses" onClick={() => setMenuOpen(false)}>Computing Courses</Link></li>
                  <li><Link to="/design-courses" onClick={() => setMenuOpen(false)}>Design Courses</Link></li>
                  <li><Link to="/facilities" onClick={() => setMenuOpen(false)}>Facilities</Link></li>
                  <li><Link to="/learning-resources" onClick={() => setMenuOpen(false)}>Learning Resources</Link></li>
                  <li><Link to="/information-for-staff" onClick={() => setMenuOpen(false)}>Information for Staff</Link></li>
                  <li><Link to="/information-for-students" onClick={() => setMenuOpen(false)}>Information for Students</Link></li>
                  <li><Link to="/working-with-business" onClick={() => setMenuOpen(false)}>Working with Business</Link></li>
                  <li><Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/how-to-find-us" element={<HowToFindUs />} />
          <Route path="/computing-courses" element={<ComputingCourses />} />
          <Route path="/design-courses" element={<DesignCourses />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/learning-resources" element={<LearningResources />} />
          <Route path="/information-for-staff" element={<InformationForStaff />} />
          <Route path="/information-for-students" element={<InformationForStudents />} />
          <Route path="/working-with-business" element={<WorkingWithBusiness />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>

        <footer>
          <div className="contact-info">
            <p><strong>Contact Us:</strong></p>
            <p>Tel: (01321) 2340 235</p>
            <p>Fax: (01321) 2340 236</p>
            <p>Email: <a href="mailto:info@cantorcollege.ac.uk">info@cantorcollege.ac.uk</a></p>
          </div>
          <div className="find-us-info">
            <p><strong>How to Find Us:</strong></p>
            <p>Cantor College</p>
            <p>Main Street</p>
            <p>Sheffield</p>
            <p>SC4 2BB</p>
          </div>

          <div className="map-image">
            <img src="/images/872SHUSpaceCitymap.jpg" alt="Map Location" />
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;