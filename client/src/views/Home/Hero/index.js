import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Hero.scss";

import {Autoplay, Pagination, Navigation } from "swiper";

const hallstatt = "https://i.imgur.com/Yszno5e.jpg";
const hvitserkur = "https://i.imgur.com/ZBzbir7.jpg";
const jacksonville = "https://i.imgur.com/xpeJkkR.jpg";
const moraineLake = "https://i.imgur.com/0NAc45h.jpg";

export default function App() {
  return (
    <>
     <div className="overlay">
            <h1 className="title">welcomeeee <span>to</span> <span>sri lanka</span></h1>
            <h5 className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae ultrices sem, eget condimentum erat. Praesent vitae neque lacus.
            </h5>
          </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        pagination={{
            dynamicBullets: true,
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper">
        <SwiperSlide className="swiper-slide">
            <img src={hallstatt} alt="slide 1"/>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
            <img src={hvitserkur} alt="slide 1"/>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
            <img src={jacksonville} alt="slide 1"/>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
            <img src={moraineLake} alt="slide 1"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
