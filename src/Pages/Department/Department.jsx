import React from "react";
import { DepHighligh, SpecialityCard } from "../../Components/compIndex";
import depImg1 from "../../assets/health/cardiology-2.webp";
import depImg2 from "../../assets/health/neurology-4.webp";
import { motion } from "framer-motion";
function Department() {
  return (
    <section id="featured-departments" className="featured-departments section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Departments</h2>
        <p> </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-5">
          <SpecialityCard
            title={"SPECIALIZED CARE"}
            content={
              "AI systems can analyze vast amounts of data quickly and accurately, leading to more precise and reliable diagnoses. They can detect patterns and anomalies that may not be obvious to human clinicians"
            }
            img={depImg1}
            fNum={1}
          />
          <SpecialityCard
            title={"expert care"}
            content={
              "AI systems can process patient data and medical records much faster than humans, reducing the time needed for diagnosis. This efficiency can lead to faster treatment decisions and improved patient outcomes"
            }
            fNum={2}
            img={depImg2}
          />
          <DepHighligh
            title={"Accuray"}
            content={
              "AI systems can analyze vast amounts of data quickly and accurately, leading to more precise and reliable diagnoses. They can detect patterns and anomalies that may not be obvious to human clinicians"
            }
          />
          <DepHighligh
            title={"Efficiency"}
            content={
              "AI systems can process patient data and medical records much faster than humans, reducing the time needed for diagnosis. This efficiency can lead to faster treatment decisions and improved patient outcomes"
            }
          />
          <DepHighligh
            title={"Scalability"}
            content={
              "AI systems can be scaled to handle large volumes of data and can be deployed across different healthcare settings, from clinics to hospitals, improving access to quality healthcare"
            }
          />
          <DepHighligh
            title={"Consistency"}
            content={
              "AI systems provide consistent results based on predefined algorithms, reducing the variability often seen in human diagnoses. This consistency can help standardize healthcare practices and improve overall quality of care"
            }
          />
          <DepHighligh
            title={"Early Detection"}
            content={
              "AI systems can identify subtle signs and patterns that may indicate early stages of diseases or conditions, enabling early intervention and treatment. This can significantly improve prognosis and patient survival rates"
            }
          />
          <DepHighligh
            title={"Decision Support"}
            content={
              ">AI systems can provide valuable decision support to healthcare professionals by suggesting potential diagnoses based on data analysis. This can complement clinicians expertise and lead to more informed treatment plans"
            }
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "linear" }}
          // viewport={{ once: true, amount: 0.6 }}
          className="emergency-banner"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="emergency-content">
                <h3>Emergency Services Available 24/7</h3>
                <p>
                  promised to never leave u alone when u need the ai the most
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="tel:+15551234567" className="emergency-btn">
                <i className="bi bi-telephone-fill"></i>
                Call Emergency : number
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Department;
