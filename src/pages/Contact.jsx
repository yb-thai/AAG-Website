import React from "react";

const Contact = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="section-inner">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            We're here to help with your transportation needs.
          </p>

          <div className="contact-card">
            <div className="contact-row">
              <span className="contact-icon">🏢</span>
              <div>
                <strong>AAG Cabulance</strong> <br />
                <span>AAG Service Group LLC</span>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-icon">📍</span>
              <div>
                18416 38th Dr SE, Bothell, WA 98012
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-icon">✉️</span>
              <a href="mailto:info@aagcabulance.com" className="contact-link">
                info@aagcabulance.com
              </a>
            </div>

            <div className="contact-row">
              <span className="contact-icon">📞</span>
              <a href="tel:8772244884" className="contact-link">
                (877) 224-4884
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
