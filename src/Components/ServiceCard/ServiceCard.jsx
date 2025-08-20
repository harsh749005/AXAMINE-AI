import React from "react";
import { motion } from "framer-motion";
function ServiceCard({ img, title, alt }) {
  return (
    <div className="col-lg-3 col-md-6">
      <div

        className="specialty-card"
      >
        <div className="specialty-image">
          <img src={img} alt={alt} className="img-fluid" loading="lazy" />
        </div>
        <div className="specialty-content">
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
