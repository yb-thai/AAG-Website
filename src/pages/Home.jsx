// src/pages/Home.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServiceSection";
import HowItWorksSection from "../components/home/HowItWorkSection";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (sectionId) {
      // small timeout to ensure DOM is rendered
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [location]);

  return (
    <>
      {/* HERO */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* Optional sections */}
      {/* <ServicesSection />
      <HowItWorksSection /> */}

      <div id="about" className="scroll-anchor"></div>
      <About />

      <div id="contact" className="scroll-anchor"></div>
      <Contact />
    </>
  );
};

export default Home;
