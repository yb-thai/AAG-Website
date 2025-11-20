// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServiceSection";
import HowItWorksSection from "../components/home/HowItWorkSection";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* Optional sections if you want them back */}
      {/* <ServicesSection />
      <HowItWorksSection /> */}

      {/* Invisible anchors with offset for smooth scroll */}
      <div id="about" className="scroll-anchor"></div>
      <About />

      <div id="contact" className="scroll-anchor"></div>
      <Contact />
    </>
  );
};

export default Home;
