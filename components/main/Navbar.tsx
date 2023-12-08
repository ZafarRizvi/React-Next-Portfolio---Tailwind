import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#030014] backdrop:blur-md z-50 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            className="cursor-pointer hover:animate-spin"
            src="/NavLogo.png"
            alt="Logo"
            height={70}
            width={70}
          />
          {/* hidden md:block */}
          <span className="font-bold ml-[10px] text-gray-300">
            SMZR | DevFolio
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 hidden md:block md:mt-5">
          <div className="flex items-center justify-between mr-[-15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-gray-400">
              About Me
            </a>
            <a href="#tech" className="cursor-pointer hover:text-gray-400">
              My Tech
            </a>
            <a href="#projects" className="cursor-pointer hover:text-gray-400">
              Projects
            </a>
            <a
              href="#experience"
              className="cursor-pointer hover:text-gray-400"
            >
              Experience
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
