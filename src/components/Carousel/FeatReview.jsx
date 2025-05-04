import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ironMan from "../../assets/iron-man.webp";
import superMan from "../../assets/superman.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import FeatureReview from "../../pages/home/FeatureReview";

const FeatReview = () => {
  const slide = [
    {
      name: "Sanjida Rahman",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quos saepe quas et alias similique ea minima dolore iure, ad error doloribus accusantium, quod voluptatum? Deserunt, distinctio nesciunt. Nam sed accusamus explicabo laboriosam eum enim quod fugit corporis, magnam voluptas architecto blanditiis, eaque vel recusandae itaque dolorum officia nemo iste?",
      image: superMan,
    },
    {
      name: "Iron Man",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quos saepe quas et alias similique ea minima dolore iure, ad error doloribus accusantium, quod voluptatum? Deserunt, distinctio nesciunt. Nam sed accusamus explicabo laboriosam eum enim quod fugit corporis, magnam voluptas architecto blanditiis, eaque vel recusandae itaque dolorum officia nemo iste?",
      image: ironMan,
    },
    {
      name: "Spider Man",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quos saepe quas et alias similique ea minima dolore iure, ad error doloribus accusantium, quod voluptatum? Deserunt, distinctio nesciunt. Nam sed accusamus explicabo laboriosam eum enim quod fugit corporis, magnam voluptas architecto blanditiis, eaque vel recusandae itaque dolorum officia nemo iste?",
      image:
        "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slide.map((item, index) => (
          <SwiperSlide key={index}>
            <FeatureReview
              name={item.name}
              review={item.review}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeatReview;
