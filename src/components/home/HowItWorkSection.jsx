// src/components/home/HowItWorksSection.jsx
import React from "react";
import Button from "../common/Button";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "1. Pick a time",
      desc: "Choose your date, time, and pickup location directly in the online booking.",
    },
    {
      title: "2. Tell us your details",
      desc: "Flight info, group size, luggage—so we send the right vehicle.",
    },
    {
      title: "3. Get instant confirmation",
      desc: "You’ll receive a confirmation email with all your ride details.",
    },
  ];

  return (
    <section className="section">
      <div className="section-inner">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <article key={step.title} className="step-card">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-text">{step.desc}</p>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <Button to="/booking">Start Your Booking</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
