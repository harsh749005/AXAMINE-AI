import React from "react";
import { ServiceCard } from "../../Components/compIndex";
import nullImg from "../../assets/null.png";
import consultationImg from "../../assets/health/consultation-4.webp";
import { motion } from "framer-motion";
function Services() {
  return (
    <section id="featured-services" className="featured-services section">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "linear" }}
        viewport={{ once: true, amount: 0.5 }}
        className="container section-title"
        data-aos="fade-up"
      >
        <h2>Featured Services</h2>
        <p>
          AI-Powered Diagnosis – Delivers fast and precise diagnostic results
          using advanced machine learning algorithms.
        </p>
      </motion.div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          <div className="col-lg-8" data-aos="fade-right" data-aos-delay="200">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              // animate={{x:0,opacity:1}}
              transition={{ duration: 0.8, ease: "linear" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.56 }}
              className="featured-service-main"
            >
              <div className="service-image-wrapper">
                <img
                  src={consultationImg}
                  alt="Premier Healthcare Services"
                  className="img-fluid"
                  loading="lazy"
                />
                <div className="service-overlay">
                  <div className="service-badge">
                    <i className="bi bi-heart-pulse"></i>
                    <span>Emergency Care</span>
                  </div>
                </div>
              </div>
              <div className="service-details">
                <h2>Comprehensive Healthcare Excellence</h2>
                <p>
                  Axamine improves diagnostic workflows, saving healthcare
                  workers considerable time and ensuring patients receive timely
                  interventions. This efficiency and precision immediately
                  contribute to better patient care and results, making Axamine
                  an indispensable tool in healthcare settings
                </p>
                <a href="#" className="main-cta">
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-4" data-aos="fade-left" data-aos-delay="300">
            <div className="services-sidebar">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "linear" }}
                className="service-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="service-icon-wrapper">
                  <i className="bi bi-capsule"></i>
                </div>
                <div className="service-info">
                  <h4> Expert guidance </h4>
                  <a href="#" className="service-link"></a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "linear", delay: 1 }}
                className="service-item"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="service-icon-wrapper">
                  <i className="bi bi-bandaid"></i>
                </div>
                <div className="service-info">
                  <h4> Ai feedback on digonsis </h4>
                  <a href="#" className="service-link"></a>
                </div>
              </motion.div>

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="department-highlight">
                  <div className="highlight-icon">
                    <i className="bi bi-shield-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="specialties-grid"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="row align-items-center">
              <ServiceCard
                title={"Expert Care"}
                img={nullImg}
                alt={"Maternal Care"}
              />

              <ServiceCard
                title={"talk with AI for diagnosis"}
                img={nullImg}
                alt={"Vaccination"}
              />

              <ServiceCard
                title={"Emergency Care"}
                img={nullImg}
                alt={"Emergency Care"}
              />

              <ServiceCard
                title={"Advanced Technology"}
                img={nullImg}
                alt={"Advanced Technology"}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="700">
        <i className="bi bi-arrow-right"></i>
      </div>
    </section>
  );
}

export default Services;
