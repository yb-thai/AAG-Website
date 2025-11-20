
import React from "react";
import GallerySlider from "../components/about/GallerySlider";
import MobileGallerySlider from "../components/about/MobileGallerySlider";
import vanExterior from "../assets/images/photo-043.png";
import vanInterior from "../assets/images/photo-047.png";
import driverAssist from "../assets/images/photo-054.jpg";
import patientRide from "../assets/images/photo-057.jpg";

const About = () => {
  return (
    <div className="page">
      {/* Main About content */}
      <section id="about"className="section">
        <div className="section-inner about-layout">
          <div className="about-text">
            <h1 className="page-title">About AAG Cabulance</h1>
            <p className="page-subtitle">
              Family-owned and operated in the greater Seattle area, AAG
              Cabulance has been providing non-emergency medical transportation
              since 2009.
            </p>

            <p className="page-body">
              We specialize in safe, comfortable, and on-time transportation for
              patients who need a little extra support getting to and from
              appointments. Whether it’s a routine check-up, dialysis treatment,
              physical therapy, hospital discharge, or a personal trip to visit
              family, our drivers are trained to assist with care and respect.
            </p>

            <p className="page-body">
              Every trip is treated as more than just a ride. We know many of
              our passengers rely on us regularly, and we work hard to provide a
              consistent, friendly experience that families and care teams can
              trust.
            </p>

            <div className="about-pill-row">
              <div className="about-pill">
                Wheelchair & ambulatory transport
              </div>
              <div className="about-pill">
                Door-to-door assistance
              </div>
              <div className="about-pill">
                Serving Seattle & surrounding areas
              </div>
            </div>
          </div>

          <div className="about-sidecard">
            <h2 className="about-sidecard-title">Why families choose AAG</h2>
            <ul className="about-list">
              <li>Trained, professional drivers who understand medical needs.</li>
              <li>Clean, well-maintained vehicles with room for mobility aids.</li>
              <li>Reliable scheduling and clear communication with families and facilities.</li>
            </ul>

            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-value">15+</span>
                <span className="about-stat-label">Years serving our community</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-value">1000s</span>
                <span className="about-stat-label">Of safe trips completed</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-value">7 days</span>
                <span className="about-stat-label">Flexible scheduling options</span>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Photo Gallery */}
<section className="section section-alt">
  <div className="section-inner">
    <h2 className="section-title">Our vehicles &amp; service in action</h2>
    <p className="page-subtitle">
      A look at the type of vehicles we operate and the level of care our
      drivers provide on every trip.
    </p>

    {/* DESKTOP GRID */}
    <div className="desktop-only">
      <div className="gallery-grid gallery-grid--center">
        <figure className="gallery-item">
          <img src={vanExterior} alt="AAG cabulance vehicle parked curbside" />
          <figcaption>
            Clean, clearly marked vehicles for easy pickup.
          </figcaption>
        </figure>

        <figure className="gallery-item">
          <img src={vanInterior} alt="Interior of accessible cabulance van" />
          <figcaption>
            Spacious interiors for wheelchairs and mobility aids.
          </figcaption>
        </figure>

        <figure className="gallery-item">
          <img src={driverAssist} alt="Driver assisting passenger safely" />
          <figcaption>
            Trained drivers providing door-to-door assistance.
          </figcaption>
        </figure>

        <figure className="gallery-item">
          <img src={patientRide} alt="Passenger seated comfortably during ride" />
          <figcaption>
            Comfortable rides for medical and personal appointments.
          </figcaption>
        </figure>
      </div>
    </div>

    {/* MOBILE SLIDER */}
    <div className="mobile-only">
      <MobileGallerySlider
        items={[
          {
            src: vanExterior,
            alt: "AAG cabulance vehicle parked curbside",
            caption: "Clean, clearly marked vehicles for easy pickup.",
          },
          {
            src: vanInterior,
            alt: "Interior of accessible cabulance van",
            caption: "Spacious interiors for wheelchairs and mobility aids.",
          },
          {
            src: driverAssist,
            alt: "Driver assisting passenger safely",
            caption: "Trained drivers providing door-to-door assistance.",
          },
          {
            src: patientRide,
            alt: "Passenger seated comfortably during ride",
            caption:
              "Comfortable rides for medical and personal appointments.",
          },
        ]}
      />
    </div>
  </div>
</section>




    </div>
  );
};

export default About;
