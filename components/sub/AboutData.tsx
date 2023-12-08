"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const AboutData = () => {
  return (
    <motion.div className="flex sm:flex-row flex-col-reverse h-full w-full">
      <motion.div className="flex-1 flex-col h-full w-full flex items-center justify-center">
        <Image
          className="mt-10"
          src="/me.png"
          alt="My Pictures"
          width={400}
          height={400}
        />
      </motion.div>
      <motion.div className="flex-1 flex-col h-full w-full flex items-center justify-center p-10 text-justify text-gray-200">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A non
          reiciendis laudantium vitae maxime numquam. Perspiciatis molestiae
          beatae culpa non veritatis tempore quibusdam dolor facere velit quasi!
          Alias inventore ducimus rerum neque quos, minima nesciunt perspiciatis
          necessitatibus dolores assumenda maxime rem iste, sunt distinctio!
          Laborum, tempora, debitis illum sit libero, inventore ad reiciendis
          dolor fugiat soluta natus itaque est minima quasi rerum! Optio sequi
          aliquid animi. Aperiam obcaecati harum cum aspernatur expedita minus
          veniam facilis sit molestiae non quidem ipsam ab, odio maiores sunt
          voluptas deserunt nobis modi doloribus aut velit consectetur quibusdam
          necessitatibus neque.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutData;
