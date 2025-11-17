// src/components/home/ServicesSection.jsx
import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Pickup and Drop-off",
      desc: "On-time rides to and from pickup location to destination",
    },
    {
      title: "Early Morning & Late Night",
      desc: "Pre-scheduled rides so you never worry about finding a car.",
    },
  ];

  return (
    <section className="section">
      <div className="section-inner">
        <h2 className="section-title">What We Offer</h2>
        <div className="cards-grid">
          {services.map((s) => (
            <article key={s.title} className="card">
              <h3 className="card-title">{s.title}</h3>
              <p className="card-text">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
