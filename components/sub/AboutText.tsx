"use client";
import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const AboutText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box px-[7px] mb-2 border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[20px] p-1 pr-2">About Me</h1>
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[14px] mb-4 text-gray-500 text-center text-justify-center px-5"
      >
        “If you are not going to tell the world who you are, the world is not
        going to tell you, how great you are.”
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Hey there, My name is Zafar Rizvi
      </motion.div>
    </div>
  );
};

export default AboutText;
