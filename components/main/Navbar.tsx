import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#030014] backdrop:blur-md z-50 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="#home" className="h-auto w-auto flex flex-row items-center">
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
        </Link>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 hidden md:block md:mt-5">
          <div className="flex items-center justify-between mr-[-15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link
              href="#about-me"
              className="cursor-pointer hover:text-purple-500"
            >
              About Me
            </Link>
            <Link href="#tech" className="cursor-pointer hover:text-purple-500">
              My Tech
            </Link>
            <Link
              href="#projects"
              className="cursor-pointer hover:text-purple-500"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="cursor-pointer hover:text-purple-500"
            >
              Experience
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
