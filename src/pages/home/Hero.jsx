import React from "react";
import { IoCallOutline } from "react-icons/io5";
import bgImage from "../../assets/bg-image.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center max-w-9xl h-[600px] px-4 md:px-10 mt-0 md:mt-2">
      {/* Left Content */}
      <div className="space-y-3 w-full md:w-1/2">
        <h1 className="text-2xl md:text-5xl text-primary font-bold text-center">
          Protected Together
        </h1>
        <p className="text-gray-700 text-xs md:text-md text-start">
          Pellentesque fringilla nisi eros, quis vulputate diam rutrum et.
          Mauris in erat auctor, scelerisque nisi in, laoreet risus. Phasellus
          venenatis tellus eget turpis vestibulum tempor. In tempor tincidunt
          porttitor
        </p>
        <p className="text-gray-800 font-semibold text-center text-xs md:text-md">
          Emergency Hotline 24/7
        </p>
        <div className="flex flex-col md:flex-row space-x-3 text-center space-y-4">
          <button className="font-semibold btn btn-outline text-primary md:px-6 md:py-8 text-xs md:text-xl rounded-md shadow-sm w-36 h-10 md:w-80 md:h-16">
            <span>
              <IoCallOutline />
            </span>
            <span>+880 123 - 456 - 789</span>
          </button>
          <button className="btn btn-primary w-36 h-10  md:w-72 md:h-16">
            Contact Us
          </button>
        </div>
      </div>
      {/* Right Content  */}
      <div className="flex justify-end w-full md:w-1/2">
        <img
          src={bgImage}
          alt=""
          className="w-[500px] mt-2 md:mt-5 drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
