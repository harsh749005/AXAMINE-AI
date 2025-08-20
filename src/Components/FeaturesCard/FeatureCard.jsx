import React from "react";

function FeatureCard({ title, icon, content }) {
  return (
    <div className="col-lg-4">
      <div className="feature-block" data-aos="fade-up" data-aos-delay="200">
        <div className="feature-icon">
          <i className={`bi ${icon}`}></i>
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
