import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact request:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="page">
      <section id="contact" className="section">
        <div className="section-inner">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            We're here to help with your transportation needs.
          </p>

          <div className="contact-layout">
            {/* Left: Contact details card */}
            <div className="contact-card">
              {/* Company */}
              <div className="contact-row">
                <span className="contact-icon">🏢</span>
                <div>
                  <strong>AAG Cabulance</strong> <br />
                  <span>AAG Service Group LLC</span>
                </div>
              </div>

              {/* Address with Google Maps link */}
              <div className="contact-row">
                <span className="contact-icon">📍</span>
                <a
                  href="https://www.google.com/maps?q=18416+38th+Dr+SE,+Bothell,+WA+98012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link map-link"
                >
                  18416 38th Dr SE, Bothell, WA 98012
                </a>
              </div>

              {/* Email */}
              <div className="contact-row">
                <span className="contact-icon">✉️</span>
                <a
                  href="mailto:info@aagcabulance.com"
                  className="contact-link"
                >
                  info@aagcabulance.com
                </a>
              </div>

              {/* Phone */}
              <div className="contact-row">
                <span className="contact-icon">📞</span>
                <a
                  href="tel:+18772244884"
                  className="contact-link"
                  onClick={() => {
                    window.location.href = "tel:+18772244884";
                  }}
                >
                  (877) 224-4884
                </a>

              </div>
            </div>

            {/* Right: callback form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2 className="contact-form-title">Request a call back</h2>
              <p className="contact-form-subtitle">
                Leave your details and we’ll reach out to confirm transportation
                options and scheduling.
              </p>

              <div className="contact-field">
                <label className="contact-label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="contact-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="contact-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="email">
                  Email (optional)
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="contact-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="message">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="contact-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share any details about your transportation needs."
                />
              </div>

              <button type="submit" className="btn btn-primary contact-submit">
                Submit Request
              </button>

              {submitted && (
                <p className="contact-success">
                  Thank you! We’ve received your request and will contact you as
                  soon as possible.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
