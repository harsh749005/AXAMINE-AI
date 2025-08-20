import facilitiesImg from "../../assets/health/facilities-9.webp";
import { FeatureCard } from "../../Components/compIndex";
import { motion } from "framer-motion";
function Action() {
  return (
    <section
      id="call-to-action"
      className="call-to-action section light-background"
    >
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="hero-content">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="content-wrapper"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h1>Excellence in Medical Care, Every Day</h1>
                <p>
                  Axamine empowers doctors with real-time, AI-driven diagnostic
                  precision. It streamlines workflows, reducing errors and
                  saving critical time. With seamless integration and predictive
                  insights, care becomes smarter. Every day, Axamine ensures
                  faster, safer, and more accurate treatment decisions.
                </p>
                <div className="cta-wrapper">
                  <a href="appointment.html" className="primary-cta"></a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="col-lg-6"
            >
              <div
                className="image-container"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <img
                  src={facilitiesImg}
                  alt="Medical Excellence"
                  className="img-fluid"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="features-section">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="row g-0"
          >
            <FeatureCard
              title="Advanced Technology"
              icon="bi-shield-check"
              content="Axamine leverages next-gen AI to deliver fast, accurate medical diagnoses. Its intelligent system evolves with data, enhancing care with every use."
            />

            <FeatureCard
              title="24/7 Availability"
              icon="bi-clock"
              content="Axamine provides uninterrupted diagnostic support anytime, anywhere. Ensuring timely care and critical insights around the clock."
            />
            <FeatureCard
              title="Expert Team"
              icon="bi-people"
              content="Built by medical and AI experts committed to precision and innovation. Our team ensures Axamine stays ahead in delivering trusted healthcare solutions."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Action;
