import React from "react";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <section className="hero section">
      <div className="section-inner hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">
            Reliable Non-Emergency Medical Transportation,
            <span className="hero-highlight"> Booked in Seconds.</span>
          </h1>
          <p className="hero-subtitle">
            provide reliable, safe and comfortable Non-Emergency Medical Transportation services for individuals who need assistance getting to and from medical appointments.
          </p>

           <p className="hero-phone">
    Call us directly: <a href="tel:2065551234">(206) 555-1234</a>
  </p>
          <div className="hero-actions">
            <Button to="/booking">Book a Ride</Button>
            <Button to="/about" variant="outline">
              Learn More
            </Button>
          </div>
          <p className="hero-note">
            Serving <strong>Seattle</strong> and surrounding areas.
          </p>
        </div>
        <div className="hero-card">
          <p className="hero-card-title">Next trip coming up?</p>
          <p className="hero-card-body">
            Pick your date, time, and group size. We’ll handle the rest.
          </p>
          <Button to="/booking">Check Availability</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
