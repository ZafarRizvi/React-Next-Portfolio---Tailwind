"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const About = () => {
  return (
    // w-screen h-screen flex flex-col items-center justify-center
    // flex flex-col items-center justify-center gap-3 h-auto relative overflow-hidden pb-80 py-20 md:bg-[#2e226a]
    <div className="flex flex-col items-center rounded-full gap-3 self-center w-[95vw] h-[88vh] relative overflow-hidden pb-80 py-10 md:bg-[#2e226a]">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[20px] p-1 pr-2">About Me</h1>
      </motion.div>
    </div>
  );
};

export default About;
