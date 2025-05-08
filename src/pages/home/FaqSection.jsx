import React from "react";
import Faqimage from "../../assets/faq.jpg";
import FAQ from "../../components/faq/FAQ";

const FaqSection = () => {
  return (
    <div className="container flex flex-col md:flex-row px-2 py-6 justify-between ">
      <div className="w-1/2 ml-20">
        <img src={Faqimage} alt="" />
      </div>
      <div className="w-full flex flex-col items-end mr-10">
        <FAQ />
      </div>
    </div>
  );
};

export default FaqSection;
