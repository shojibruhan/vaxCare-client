import React from "react";
import { FaHeadSideCough } from "react-icons/fa";
import { FaMosquito } from "react-icons/fa6";
import { GiAntibody, GiDna2, GiTestTubes } from "react-icons/gi";
import { MdCoronavirus } from "react-icons/md";

const HomeFeatures = () => {
  const features = [
    {
      icon: <GiDna2 className="text-5xl text-primary" />,
      title: "Clinical Biochemistry",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio architecto beatae omnis laborum placeat fugit nesciunt similique soluta aspernatur sunt. Perferendis architecto maiores alias accusamus saepe pariatur, accusantium laboriosam suscipit?",
    },
    {
      icon: <MdCoronavirus className="text-5xl text-primary" />,
      title: "Corrona Virus Care Product Mix",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio architecto beatae omnis laborum placeat fugit nesciunt similique soluta aspernatur sunt. Perferendis architecto maiores alias accusamus saepe pariatur, accusantium laboriosam suscipit?",
    },
    {
      icon: <GiTestTubes className="text-5xl text-primary" />,
      title: "Rigourus Testing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio architecto beatae omnis laborum placeat fugit nesciunt similique soluta aspernatur sunt. Perferendis architecto maiores alias accusamus saepe pariatur, accusantium laboriosam suscipit?",
    },
    {
      icon: <GiAntibody className="text-5xl text-primary" />,
      title: "Antibody Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio architecto beatae omnis laborum placeat fugit nesciunt similique soluta aspernatur sunt. Perferendis architecto maiores alias accusamus saepe pariatur, accusantium laboriosam suscipit?",
    },
    {
      icon: <FaHeadSideCough className="text-5xl text-primary" />,
      title: "RT-PCT & Combination Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio architecto beatae omnis laborum placeat fugit nesciunt similique soluta aspernatur sunt. Perferendis architecto maiores alias accusamus saepe pariatur, accusantium laboriosam suscipit?",
    },
    {
      icon: <FaMosquito className="text-5xl text-primary" />,
      title: "CBC Test",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio architecto beatae omnis laborum placeat fugit nesciunt similique soluta aspernatur sunt. Perferendis architecto maiores alias accusamus saepe pariatur, accusantium laboriosam suscipit?",
    },
  ];
  return (
    <section className="px-10 py-8 text-black mt-12 mb-24">
      <h1 className="text-5xl font-semibold text-center font-serif mb-10">
        World Leader in Testing
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-3 py-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2 bg-white rounded-md shadow-2xl px-2 py-5"
          >
            {feature.icon}
            <h3 className="font-semibold text-2xl">{feature.title}</h3>
            <p className="text-sm text-base-200 py-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFeatures;
