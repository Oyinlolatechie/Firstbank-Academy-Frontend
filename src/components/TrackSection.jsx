import { useRef, useEffect } from "react";
import Button from "./ui/Button";
import Card from "./ui/Card";
import data from "../assets/data-analysis.png";
import cyber from "../assets/cyber.png";
import software from "../assets/software-engineering.png";
import infra from "../assets/infrastructure.png";

import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrackSection = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

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
          slidesToShow: 3,
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
      <div ref={trackRef} id="tracks" className="px-3 ">
        <h2 className="text-[34px] md:text-[48px] leading-10 md:leading-[67.2px] text-center font-bold max-w-[700px] mx-auto text-primary">
          Learn in-demand skills from the Academy
        </h2>
        <p className="text-center pt-5 md:pt-[32px] md:text-[20px] md:leading-[28.8px] tracking-[1px] text-[#000000AD]">
          Acquire sought-after skills at the Academy for an incredible journey.
        </p>

        <div className=" pl-12 md:pl-0 lg:pl-20">
          <Slider {...settings}>
            <Card
              picture={data}
              trackName={"Data Analysis"}
              aboutTrack={
                " Review data to identify key insights into a business customers."
              }
            />
            <Card
              picture={cyber}
              trackName={"Cyber Security"}
              aboutTrack={
                "Protect data, thwart breaches, encrypt, cyber hygiene crucial."
              }
            />
            <Card
              picture={software}
              trackName={"Software Development"}
              aboutTrack={
                "Build what works and while at it, iterate quickly and efficiently."
              }
            />
            <Card
              picture={infra}
              trackName={"Infrastructure"}
              aboutTrack={
                "Build an underlying system that provides support and organization."
              }
            />
          </Slider>
        </div>

        <p className="text-center text-[18px] text-[#000000AD] mx-auto font-[400] leading-[32px] md:px-[12%]">
          FirstBank Technology Academy, an avant-garde arm of the Corporate
          University, pioneers advanced training in Data Analysis, Cyber
          Security, and Software Development, cultivating exceptional technology
          talent across Nigeria. Click below to learn more.
        </p>

        <div className=" mt-[32px] mb-[68px] text-center">
          <Button btnText={"Learn More"} type={"trackBtn"} />
        </div>
      </div>
    </>
  );
};

export default TrackSection;
