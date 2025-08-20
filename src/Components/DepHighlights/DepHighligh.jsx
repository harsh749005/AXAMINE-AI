import React from "react";
import { motion } from "framer-motion";
function DepHighligh({ content, title }) {
  return (
    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "linear" }}
        viewport={{ once: true, amount: 0.5 }}
        className="department-highlight"
      >
        <div className="highlight-icon">
          <i className="bi bi-activity"></i>
        </div>
        <h4>{title}</h4>
        <p>{content}</p>

        <ul className="highlight-list"></ul>
        <a href="department-details.html" className="highlight-cta">
          Learn More
        </a>
      </motion.div>
    </div>
  );
}

export default DepHighligh;
