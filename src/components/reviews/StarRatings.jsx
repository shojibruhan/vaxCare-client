import React from "react";
import { FaStar } from "react-icons/fa";

const StarRatings = ({ onChange, ratings }) => {
  return (
    <div className="flex space-x-1 my-2">
      {[...Array(5)].map((_, i) => {
        const value = i + 1;
        return (
          <FaStar
            key={value}
            size={24}
            onClick={() => onChange(value)}
            className={`hover:text-yellow-300 ${
              value <= ratings ? "text-green-500" : "text-gray-100"
            } transition-colors duration-200 cursor-pointer`}
          />
        );
      })}
    </div>
  );
};

export default StarRatings;
