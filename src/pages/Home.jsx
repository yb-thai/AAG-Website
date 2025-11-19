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
      <div id="hero">
        <HeroSection />
      </div>
{/*<ServicesSection />
      <HowItWorksSection /> */}
      

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
