// src/components/layout/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} AAG Seattle's Best Non-Emergency Medical Transportation.</p>
        <p className="footer-sub">
          Reliable, safe and comfortable Non-Emergency Medical Transportation services for individuals who need assistance getting to and from medical appointments.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
