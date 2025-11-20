import React from "react";
import Button from "../common/Button";
import phoneIcon from "../../assets/icons/phone.png";


const HeroSection = () => {
  return (
    <section id="hero" className="hero section">
      <div className="section-inner hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">
  <span className="hero-line">Seattle's Best Non-Emergency Medical Transportation</span>
  <span className="hero-highlight hero-line">
    we are open 7-days a week 24/7 including Holidays!
  </span>
</h1>


          <p className="hero-subtitle">
            We provide reliable, safe, and comfortable Non-Emergency Medical
            Transportation services for individuals who need assistance getting
            to and from medical appointments.
          </p>

          <div className="hero-actions">
            <Button to="/booking">Book a Ride</Button>

            {/* REPLACED "Learn More" WITH CALL FOR BOOKING */}
            <a href="tel:8772244884" className="btn btn-primary hero-call-btn">
  <img src={phoneIcon} alt="Phone" className="call-icon" />
   (877) 224-4884
</a>
          </div>

          <p className="hero-note">
            Serving <strong>Seattle</strong> and surrounding areas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
