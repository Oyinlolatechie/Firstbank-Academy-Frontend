import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";

import LeftArrow from "../assets/Left-arrow.svg";
import RightArrow from "../assets/Right-arrow.svg";
import Gallery1 from "../assets/Gallery1.png";
import Gallery2 from "../assets/Gallery2.png";
import Gallery3 from "../assets/Gallery3.png";
import Gallery4 from "../assets/Gallery4.png";

const Gallery = () => {
  const galleryRef = useRef(null);
  return (
    <>
      <div
        ref={galleryRef}
        id="gallery"
        className="w-[956px] mx-auto flex flex-col justify-center items-center space-y-6 my-20"
      >
        <h2 className="font-bold text-center text-5xl text-[#182233]">
          Gallery
        </h2>

        <p className="text-center text-lg font-normal text-[#000000AD]">
          Explore the captivating world of art at the academy.
        </p>

        <div className="w-full text-center mx-auto">
          <Swiper
            navigation={true}
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper h-[357px]"
          >
            {/* <button onClick={() => swiper.slidePrev()} className="">
                <img src={LeftArrow} />
            </button> */}
            <SwiperSlide>
              <img src={Gallery3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gallery2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gallery3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gallery2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gallery3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gallery2} />
            </SwiperSlide>
            {/* <button onClick={() => swiper.slideNext()} className="swiper-button-next">
                <img src={RightArrow} />
            </button> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Gallery;
