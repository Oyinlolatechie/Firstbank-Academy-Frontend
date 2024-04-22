import React, { useRef } from "react";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "../index.css";

import LeftArrow from "../assets/Left-arrow.svg";
import RightArrow from "../assets/Right-arrow.svg";
import Gallery1 from "../assets/Gallery1.png";
import Gallery2 from "../assets/Gallery2.png";
import Gallery3 from "../assets/Gallery3.png";
import Gallery4 from "../assets/Gallery4.png";
import FBTA1 from "../assets/FBTA_SPORT_DAY2-28.png"
import FBTA2 from "../assets/FBTA_SPORT_DAY2-30.png"
import FBTA3 from "../assets/FBTA_SPORT_DAY4-23 2.png"
import FBTA4 from "../assets/FBTA_SPORT_DAY4-11.png"

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const galleryRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        ref={galleryRef}
        id="gallery"
        className="text-center mx-auto items-center py-14"
      >
        <h2 className="font-bold w-fit text-[42px] md:text-5xl text-primary mx-auto">
          Gallery
        </h2>

        <p className="font-normal text-[18px] pl-8 md:text-lg text-[#000000AD] my-5">
          Explore the captivating world of art at the academy.
        </p>

        <div className="max-w-[1226px] pt-10 pl-8 md:mx-auto mx-auto">
            <Slider {...settings}>
                <img src={FBTA1} className="px-2 size-80" />
                <img src={FBTA2} className="px-2 size-80" />
                <img src={FBTA3} className="px-2 size-80" />
                <img src={FBTA4} className="px-2 size-80" />
            </Slider>
        </div>
      </div>
    </>
  );
};

export default Gallery;
