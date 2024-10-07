import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10"
        src={"/hero2.png"}
        alt={"hero bg"}
        width={1000}
        height={600}
      />
      <Navbar />

      <div className="container h-[calc(100vh-3px)]  sm:h-[calc(100vh-30px)] grid items-center">
        <div className="space-y-4 bg-[#ffffff98] w-fit p-4 ">
          <p className="font-medium uppercase ">Wide options of choice</p>
          <h2 className="text-4xl sm:text-6xl font-bold">
            Delicious <span className="text-accent">Food</span>
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px]">
            Delicious food color, aroma and taste. <br /> What are you waiting
            for?
          </p>

          <button className="bg-accent text-white px-6 py-2 rounded-3xl  text-[14px] sm:text-[16px]  hover:duration-[0.3s] ease-in hover:bg-[#3a3a35]">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
