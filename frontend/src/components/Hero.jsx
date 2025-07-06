import React from 'react';
import hero_img from '../assets/hero_img.png'; // Adjust path as per your folder structure

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border border-gray-400 p-8">
      {/* Left Text Section */}
      <div className="text-[#414141] w-full sm:w-1/2 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 md:w-11 h-[2px] bg-[#414141]" />
          <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
        </div>

        <h1 className="prata-regular text-3xl lg:text-5xl leading-relaxed font-semibold">
          Latest Arrivals
        </h1>

        <div className="flex items-center gap-2">
          <p className="text-sm font-medium cursor-pointer">SHOP NOW</p>
          <div className="w-8 md:w-11 h-[1px] bg-[#414141]" />
        </div>
      </div>

      {/* Right Image Section */}
      <img
        className="w-full sm:w-1/2 object-cover"
        src={hero_img}
        alt="Model"
      />
    </div>
  );
};

export default Hero;
