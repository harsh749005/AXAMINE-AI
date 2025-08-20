import React from "react";
import { motion } from "framer-motion";
function SpecialityCard({ img, alt, content, title, fNum }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="col-lg-6"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className="specialty-card">
        <div className="specialty-content">
          <div className="specialty-meta">
            <span className="specialty-label">{title}</span>
          </div>
          <h3> feature {fNum}</h3>
          <p>{content}</p>
          <div className="specialty-features"></div>
          <a href="department-details.html" className="specialty-link">
            Explore more <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className="specialty-visual">
          <img src={img} alt={alt} className="img-fluid" />
          <div className="visual-overlay">
            <i className="bi bi-heart-pulse"></i>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SpecialityCard;
