import { useRef } from "react";
import Button from "./ui/Button";
import Card from "./ui/Card";
import data from "../assets/data-analysis.png";
import cyber from "../assets/cyber.png";
import software from "../assets/software-engineering.png";
import infra from "../assets/infrastructure.png";

const TrackSection = () => {
  const trackRef = useRef(null);
  return (
    <>
      <div ref={trackRef} id="tracks" className="py-[100px] px-[12%]">
        <h2 className="text-[48px] text-center font-bold w-[700px] mx-auto text-primary">
          Learn in-demand skills from the Academy
        </h2>
        <p className="text-center pt-[32px] font-normal text-[20px] leading-[28.8px] tracking-[1%] text-[#000000AD]">
          Acquire sought-after skills at the Academy for an incredible journey.
        </p>

        <div className="flex justify-between ">
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
        </div>

        <p className="text-center text-[18px] text-[#000000AD] mx-auto font-[400] leading-[32px]">
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
