import FooLinks from "./FooLinks";
import {motion} from "framer-motion";
function Footer() {
  return (
    <footer id="footer" className="footer-16 footer position-relative">
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "linear" }}
        className="container"
      >
        <div className="footer-main" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-start">
            <div className="col-lg-5">
              <div className="brand-section">
                <a
                  href="index.html"
                  className="logo d-flex align-items-center mb-4"
                >
                  <span className="sitename">Axamine ai</span>
                </a>
                <p className="brand-description">
                  Axamine AI is an advanced diagnostic system that
                  revolutionizes healthcare by combining artificial intelligence
                  with clinical expertise. It processes complex medical data in
                  real time, enabling faster and more accurate diagnoses while
                  minimizing human error.{" "}
                </p>
                <div className="contact-info mt-5">
                  <div className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>
                      123 Creative Boulevard, Design District, NY 10012
                    </span>
                  </div>
                  <div className="contact-item"></div>
                  <div className="contact-item">
                    <i className="bi bi-envelope"></i>
                    <span>axamineai@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="footer-nav-wrapper">
                <div className="row">
                  <FooLinks
                    title="Studio"
                    l1="Our Journey"
                    l2="Core Features"
                    l3="Terms & Conditions"
                    l4="Expert Consultation"
                    l5="Recognitions & Awards"
                    href1="#"
                    href2="#"
                    href3="#"
                    href4="#"
                    href5="#"
                  />
                  <FooLinks
                    title="Services"
                    l1="About Axamine"
                    l2="AI Diagnostic Features"
                    l3="Healthcare Solutions"
                    l4="Research & Innovation"
                    l5="Contact & Support"
                    href1="#"
                    href2="#"
                    href3="#"
                    href4="#"
                    href5="#"
                  />

                  <FooLinks
                    title="Resources"
                    l1="Patient Resources"
                    l2="For Clinicians"
                    l3="Technology Overview"
                    l4="Security & Compliance"
                    l5="Request a Demo"
                    href1="#"
                    href2="#"
                    href3="#"
                    href4="#"
                    href5="#"
                  />

                  <FooLinks
                    title="Connect"
                    l1="Request a Demo"
                    l2="Book a Consultation"
                    l3="Subscribe to Updates"
                    l4="Follow Us"
                    l5="Become a Partner"
                    href1="#"
                    href2="#"
                    href3="#"
                    href4="#"
                    href5="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "linear" }}
        className="footer-bottom"
      >
        <div className="container">
          <div className="bottom-content" data-aos="fade-up" data-aos-delay="300">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright">
                  <p>
                    © <span className="sitename">axamine ai</span>. All rights
                    reserved.
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="legal-links">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                  <a href="#">Cookie Policy</a>
                  <div className="credits"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
