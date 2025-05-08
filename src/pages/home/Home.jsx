import React from "react";
import FeatReview from "../../components/Carousel/FeatReview";
import ServiceCarousel from "../../components/Carousel/ServiceCarousel";
import HomeFeatures from "../features/HomeFeatures";
import Vaccines from "../Vaccines";
import FaqSection from "./FaqSection";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <HomeFeatures />
      {/* <FeatureReview /> */}
      <FeatReview />
      <div className="bg-blue-50 my-10 px-10 py-10">
        <ServiceCarousel />
      </div>
      <FaqSection />
      <Vaccines />
    </div>
  );
};

export default Home;
