import React, { use } from "react";
import AboutText from "../sub/AboutText";

const About = () => {
  return (
    <div className="flex flex-col items-center rounded-3xl gap-3 self-center w-[90vw] h-[88vh] relative overflow-hidden pb-80 py-10 md:bg-[#2e226a]">
      <AboutText />
    </div>
  );
};

export default About;
