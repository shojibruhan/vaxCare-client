import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import One from "../../assets/HomeCarosoul/01.png";
import Two from "../../assets/HomeCarosoul/02.png";
import Three from "../../assets/HomeCarosoul/03.png";
import Four from "../../assets/HomeCarosoul/04.png";
import Five from "../../assets/HomeCarosoul/05.png";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
import ServiceList from "../../pages/home/ServiceList";
const ServiceCarousel = () => {
  const slide = [
    {
      image: One,
    },
    {
      image: Two,
    },
    {
      image: Three,
    },
    {
      image: Four,
    },
    {
      image: Five,
    },
  ];
  return (
    <>
      {/* <Swiper
        spaceBetween={30}
        slidesPerView={3}
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
            <ServiceList image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper> */}
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: false,
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {slide.map((item, index) => (
            <SwiperSlide key={index}>
              <ServiceList image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </>
  );
};

export default ServiceCarousel;
