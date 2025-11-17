// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServiceSection";
import FleetSection from "../components/home/FleetSection";
import HowItWorksSection from "../components/home/HowItWorkSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
     {/* <FleetSection />  */} 
      <HowItWorksSection />
    </>
  );
};

export default Home;
