import React, { use } from "react";
import AboutText from "../sub/AboutText";
import AboutData from "../sub/AboutData";

const About = () => {
  return (
    <div
      id="#about-me"
      className="flex flex-col items-center md:rounded-3xl gap-3 self-center md:w-[90vw] w-screen sm:h-[88vh] h-auto relative overflow-hidden pb-80 py-10 bg-[#2A0E61]"
    >
      <AboutText />
      <AboutData />
    </div>
  );
};

export default About;
