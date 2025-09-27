import React from "react";
import { logout } from "../../utils/authHelpers";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
function Header() {
  const { currentUser } = useAuth();
  console.log("User details : ",currentUser);
  return (
    <header id="header" className="header fixed-top">
      <div className="topbar d-flex align-items-center dark-background">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="aximineai@example.com">axamineai@gmail.com</a>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="#" className="twitter">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="branding d-flex align-items-cente">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <h1 className="sitename">Axamine AI </h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="#home-about" 
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   const element = document.getElementById('home-about');
                  //   if (element) {
                  //     element.scrollIntoView({ behavior: 'smooth' });
                  //   }
                  // }}
                >
                  About
                </a>
              </li>
              <li>
                <Link to="/departments">Departments</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/doctors">Doctors</Link>
              </li>
              <li className="dropdown">
                <Link to="#">
                  <span>More Pages</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="/department-details">Department Details</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Service Details</Link>
                  </li>
                  <li>
                    <Link to="/appointment">Appointment</Link>
                  </li>
                  <li>
                    <Link to="/testimonials">Testimonials</Link>
                  </li>
                  <li>
                    <Link to="/faq">Frequently Asked Questions</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/terms">Terms</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy</Link>
                  </li>
                  <li>
                    <Link to="/404">404</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#">
                  <span>Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="#">Dropdown 1</Link>
                  </li>
                  <li className="dropdown">
                    <Link to="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">Deep Dropdown 1</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Dropdown 2</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Dropdown 3</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Dropdown 4</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Dropdown 5</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Dropdown 2</Link>
                  </li>
                  <li>
                    <Link to="#">Dropdown 3</Link>
                  </li>
                  <li>
                    <Link to="#">Dropdown 4</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <p></p>
              </li>
              <li style={{cursor:"pointer"}} onClick={logout}>
                <Link>Logout</Link>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
