import React from "react";

const ServiceList = ({ image }) => {
  return (
    <>
      <div className="flex flex-row bg-none px-20 py-10 items-center justify-center">
        <img src={image} alt="" className="w-5xl h-36" />
      </div>
    </>
  );
};

export default ServiceList;
