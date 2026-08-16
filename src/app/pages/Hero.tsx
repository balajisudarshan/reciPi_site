import Image from "next/image";
import React from "react";
import phone from "@/assets/phone.png";
import { FaAndroid, FaArrowCircleRight } from "react-icons/fa";
import HeadingBadge from "../components/HeadingBadge";
const Hero = () => {
  return (
    <main>
      <div className="pt-30 sm:px-20 text-center sm:text-start px-10 flex flex-col sm:flex-row items-center justify-betw  een gap-10 sm:gap-30">
        <div className="flex-2">
          <HeadingBadge text="Cook Smarter Live Better" />
          <h1 className="text-7xl font-bold tracking-tight">
            Cook Smarter
            <br />
            <span className="text-[#ff6b00]">Eat Better</span>
          </h1>
          <p className="text-md font-light my-5 text-gray-500 ">
            Discover thousand of recipes , personalised recommendations and easy
            cooking . Assistant curated collections and beautiful cooking
            experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center justify-center sm:justify-start">
            <button className="bg-[#e85200] flex items-center text-white p-2 px-5 rounded-4xl cursor-pointer hover:bg-[#d04a00] transition-colors w-fit sm:w-auto">
              Download Apk
              <FaAndroid className="ml-2" />
            </button>
            <button className="bg-[#fff] flex items-center text-black border-1 border-gray-400 p-2 px-5 rounded-4xl cursor-pointer hover:bg-[#f2f2f2] transition-colors w-fit sm:w-auto">
              Explore Features
              <FaArrowCircleRight className="ml-2" />
            </button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={phone}
            alt="Phone"
            width={280}
            height={580}
            quality={100}
            className="animate-float"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
