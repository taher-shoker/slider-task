import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CardContainer from "../uitls/card-design";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

import "./swiper.css";
import { WarperContainer, Header, Title, PreButton } from "./style";
// import Swiper core and required modules
import SwiperCore, { Keyboard, Scrollbar } from "swiper/core";

// install Swiper modules
SwiperCore.use([Keyboard, Scrollbar]);

const SliderContainer = ({ sliders }) => {
  return (
    <>
      <WarperContainer>
        <Header>
          <Title>Nominees</Title>
          <PreButton>Participate</PreButton>
        </Header>
      </WarperContainer>
      <Swiper
        spaceBetween={32}
        centeredSlides={false}
        freeMode={true}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          1440: {
            slidesPerView: 3.35,
          },
          1280: {
            slidesPerView: 3.2,
          },
          768: {
            slidesPerView: 1.73,
          },
          375: {
            slidesPerView: 1.14,
            spaceBetween: 15,
          },
        }}
        scrollbar={true}
        className="mySwiper"
      >
        {sliders &&
          sliders.map((slide) => (
            <SwiperSlide key={slide.id}>
              <CardContainer item={slide} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
export default SliderContainer;
