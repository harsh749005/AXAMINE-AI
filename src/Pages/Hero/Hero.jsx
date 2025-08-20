import React from "react";
import heroPic from "../../assets/health/staff-7.webp";
import { motion } from "framer-motion";
import CountUp from "../../Components/ReactBits/Count/CountUp";
import { SlCalender } from "react-icons/sl";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-lg-6"
          >
            <div className="hero-content">
              <div
                className="trust-badges mb-4"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="badge-item">
                  <i className="bi bi-shield-check"></i>
                  <span>Accredited</span>
                </div>
                <div className="badge-item">
                  <i className="bi bi-clock"></i>
                  <span>24/7 Emergency</span>
                </div>
                <div className="badge-item">
                  <i className="bi bi-star-fill"></i>
                  <span>4.9/5 Rating</span>
                </div>
              </div>

              <h1 data-aos="fade-right" data-aos-delay="300">
                Excellence in <span className="highlight">Healthcare</span> With{" "}
                <br />
                AI- integrated Diagnostic
              </h1>

              <p
                className="hero-description"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Axamine, an AI-powered diagnostic system, revolutionizes
                healthcare by empowering professionals to make precise diagnoses
                efficiently. Its AI systems process complicated medical data
                quickly and accurately, decreasing errors and enhancing
                treatment decisions.
              </p>

              <div
                className="hero-stats mb-4"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <div className="stat-item">
                  <h3>
                    {/* <span
                      data-purecounter-start="0"
                      data-purecounter-end="15"
                      data-purecounter-duration="2"
                      className="purecounter"
                    ></span> */}
                    <CountUp
                      from={0}
                      to={15}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>
                    {/* <span
                      data-purecounter-start="0"
                      data-purecounter-end="5000"
                      data-purecounter-duration="2"
                      className="purecounter"
                    ></span> */}
                    <CountUp
                      from={0}
                      to={5000}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </h3>
                  <p>Patients Treated</p>
                </div>
                <div className="stat-item">
                  <h3>
                    {/* <span
                      data-purecounter-start="0"
                      data-purecounter-end="50"
                      data-purecounter-duration="2"
                      className="purecounter"
                    ></span> */}
                    <CountUp
                      from={0}
                      to={50}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </h3>
                  <p>Medical Experts</p>
                </div>
              </div>

              <div
                className="hero-actions"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <a href="appointment.html" className="btn btn-primary">
                  Book Appointment
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  className="btn btn-outline glightbox"
                >
                  <IoPlayCircleOutline size={24} style={{marginRight: "8px"}}/>
                  {/* <i className="bi bi-play-circle me-2"></i> */}
                  Watch Our Story
                </a>
              </div>

              <div
                className="emergency-contact"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                <div className="emergency-info"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="col-lg-6"
          >
            <div
              className="hero-visual"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="main-image">
                <img
                  src={heroPic}
                  alt="Modern Healthcare Facility"
                  className="img-fluid"
                />
                <div className="floating-card appointment-card">
                  <div className="card-icon">
                    <SlCalender size={24} />
                    {/* <i className="bi bi-calendar-check"></i> */}
                  </div>
                  <div className="card-content">
                    <h6>Next Available</h6>
                    <p></p>
                    <small>CEO - Henil</small>
                  </div>
                </div>
                <div className="floating-card rating-card">
                  <div className="card-content">
                    <div className="rating-stars">
                      {/* <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i> */}
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <h6>4.9/5</h6>
                    <small></small>
                  </div>
                </div>
              </div>
              <div className="background-elements">
                <div className="element element-1"></div>
                <div className="element element-2"></div>
                <div className="element element-3"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
