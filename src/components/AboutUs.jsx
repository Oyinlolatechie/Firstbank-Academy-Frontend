import { useRef } from "react";
import Button from "./ui/Button";
import firstbank from "../assets/firstbank-building.png";

const AboutUs = () => {
  const aboutRef = useRef(null);
  return (
    <>
      <div
        ref={aboutRef}
        id="aboutUs"
        className="h-[598px] overflow-hidden bg-primary my-[100px] flex place-items-center"
      >
        <div className="w-[730px] ml-[98px] space-y-[32px]">
          <h2 className="text-[48px] font-bold text-[#FFFFFF] leading-[64px]">
            FirstBank Academy
          </h2>
          <p className="text-[16px] w-[700px] text-[#FFFFFF] leading-[32px] font-normal">
            The FirstBank Technology Academy is an arm of the FirstBank
            Corporate University that was designed to drive upskilling, cross
            skilling, and hands-on learning of our tech talents. The Academy
            offers trainees the full spectrum of tech competencies such as
            Application Support and Development, cyber security and
            infrastructure, and Data science.
          </p>

          <Button btnText={"Read More"} type={"aboutBtn"} />
        </div>

        <div className=" w-full  mt-[126px] ml-[-60px] ">
          <img src={firstbank} alt="firstbank academy building" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
