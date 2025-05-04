import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const FeatureReview = ({ name, review, image }) => {
  return (
    <div className="flex flex-col md:flex-row justify-around">
      <div className="mx-auto items-center md:items-end mt-14 md:mt-5 md:-mr-20">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-28 rounded-full ring-2 ring-offset-2">
            <img src={image} />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-10 w-1/2 mx-auto">
        <div className="text-3xl text-blue-200">
          <FaQuoteLeft />
        </div>
        <div className="text-cyan-500 text-xs md:text-sm items-center  ml-10">
          {review}
        </div>
        <div className="text-gray-400 text-xs ml-16">- {name}</div>
        <div className="text-3xl text-blue-200 flex justify-end">
          <FaQuoteRight />
        </div>
      </div>
    </div>
  );
};

export default FeatureReview;
