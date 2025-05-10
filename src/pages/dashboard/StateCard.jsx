import React from "react";

const StateCard = ({ title, amount, prevdata, svg }) => {
  return (
    <>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
        {svg}

        <div className="p-4 text-right">
          <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
            {title}
          </p>
          <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
            {amount}
          </h4>
        </div>
        <div className="border-t border-blue-gray-50 p-4">
          <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
            <strong className="text-green-500">{prevdata}</strong>&nbsp;than
            last week
          </p>
        </div>
      </div>
    </>
  );
};

export default StateCard;
