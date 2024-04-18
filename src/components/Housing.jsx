import { useEffect } from "react";
import HousingCard from "./ui/HousingCard";
import hotelImage1 from "../assets/hotel-image-01.png";
import hotelImage2 from "../assets/hotel-image-02.png";
import hotelImage3 from "../assets/hotel-image-03.png";
import walkingIcon from "../assets/walking-vector.svg";
import star from "../assets/star-vector.svg";

import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Housing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      <div className="text-center py-14 ">
        <h2 className=" text-[42px] md:text-[48px] text-primary font-[700] leading-[48px] w-fit mx-auto">
          Housing & Accommodation
        </h2>
        <p className="text-[18px] leading-[28.8px] font-[400] mt-[16px]">
          Secure your ideal home today with our housing solutions available.
        </p>

        {/* <div className="w-screen pt-10 pl-10 md:pl-24 mx-auto">
          <Slider {...settings}>
            <HousingCard
              cardImage={hotelImage1}
              star={star}
              walkingIcon={walkingIcon}
              hotelName="WHITE BROOKS"
              address="2 Abebe Village Rd, Lagos."
              time="5mins"
              availableRooms="Available Rooms"
              availableNumber="05"
              textColor={"green"}
              bgColor={"bgGreen"}
            />
            <HousingCard
              cardImage={hotelImage2}
              star={star}
              walkingIcon={walkingIcon}
              hotelName="WHITE BROOKS"
              address="2 Abebe Village Rd, Lagos."
              time="5mins"
              availableRooms="Available Rooms"
              availableNumber="20"
              textColor={"yellow"}
              bgColor={"bgYellow"}
            />
            <HousingCard
              cardImage={hotelImage3}
              star={star}
              walkingIcon={walkingIcon}
              hotelName={"WHITE BROOKS"}
              address={"2 Abebe Village Rd, Lagos."}
              time={"5mins"}
              availableRooms={"Available Rooms"}
              availableNumber={"01"}
              textColor={"red"}
              bgColor={"bgRed"}
            />
          </Slider>
        </div> */}
      </div>
    </>
  );
};

export default Housing;
