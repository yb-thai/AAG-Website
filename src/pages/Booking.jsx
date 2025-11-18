import React from "react";
import CalendlyEmbed from "../components/booking/CalendlyEmbed";

const Booking = () => {
  return (
    <div className="page booking-page">
      <section className="section">
        <div className="section-inner">
          <h1 className="page-title">Book Your Ride</h1>
          <p className="page-subtitle">
            Choose your time, and provide pickup details. Your ride will be confirmed within your email.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <CalendlyEmbed />
        </div>
      </section>
    </div>
  );
};

export default Booking;
