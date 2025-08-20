import React from "react";
import HomeAboutPic from "../../assets/health/facilities-9.webp";
import {motion} from "framer-motion";
function HomeAbout() {
  return (
    <section id="home-about" className="home-about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">

          <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
            className="col-lg-6 mb-5 mb-lg-0"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="about-content">
              <h2 className="section-heading">AI-integrated Diagnostic</h2>
              <p className="lead-text">
                Axamine supports Language Models (LLMs) by making information
                more accessible to the general public. LLMs can explain medical
                terms, provide health-related advice, and answer medical
                questions for people looking for credible information. This
                accessibility increases health literacy in the general
                community, allowing people to make educated health decisions.
                Axamine‘s enhanced diagnostic capabilities for healthcare
                providers, together with LLMs‘ support for public health
                education, form a complete strategy to improving healthcare
                results and promoting overall wellbeing.
              </p>

              <div className="stats-grid">
                <div className="stat-item">
                  <div
                    className="stat-number purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="15000"
                    data-purecounter-duration="1"
                  ></div>
                  <div className="stat-label">Patients Served</div>
                </div>
                <div className="stat-item">
                  <div
                    className="stat-number purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="25"
                    data-purecounter-duration="1"
                  ></div>
                  <div className="stat-label">Years of Excellence</div>
                </div>
                <div className="stat-item">
                  <div
                    className="stat-number purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="50"
                    data-purecounter-duration="1"
                  ></div>
                  <div className="stat-label">Medical Specialists</div>
                </div>
              </div>

              <div className="cta-section">
                <a href="about.html" className="btn-primary">
                  Learn More About Us
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="about-visual">
              <div className="main-image">
                <img
                  src={HomeAboutPic}
                  alt="Modern medical facility"
                  className="img-fluid"
                />
              </div>
              <div className="floating-card">
                <div className="card-content">
                  <div className="icon">
                    <i className="bi bi-heart-pulse"></i>
                  </div>
                  <div className="card-text">
                    <h4>24/7 Emergency Care</h4>
                    <p>Always here when you need us most</p>
                  </div>
                </div>
              </div>
              <div className="experience-badge">
                <div className="badge-content">
                  <span className="years">5+</span>
                  <span className="text">Years of Trusted Care</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
