import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import Project from "../Components/Project";
import ContactForm from "../Components/ContactForm";
import FooterSec from "../Components/FooterSec";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Project />
      <ContactForm />
    </>
  );
};

export default Home;
