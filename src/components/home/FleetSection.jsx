// src/components/home/FleetSection.jsx
import React from "react";

const FleetSection = () => {
  const fleet = [
    {
      name: "Sedan",
      detail: "1–3 passengers · Light luggage",
    },
    {
      name: "SUV",
      detail: "3–5 passengers · 4–6 bags",
    },
    {
      name: "Van",
      detail: "6–10 passengers · Group trips",
    },
  ];

  return (
    <section className="section section-alt">
      <div className="section-inner">
        <h2 className="section-title">Fleet Options</h2>
        <div className="cards-grid">
          {fleet.map((item) => (
            <article key={item.name} className="card card-outline">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-text">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
