import React, { JSX } from "react";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import ScrollToHashElement from "../../utils/ScrollToHash";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <ScrollToHashElement />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
