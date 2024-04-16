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
        className="md:max-h-[598px] w-screen overflow-hidden bg-primary my-[50px] md:my-[100px] py-[10px] md:flex place-items-center"
      >
        <div className="w-fit md:max-w-[730px] ml-5 md:ml-[30px] lg:ml-[98px] space-y-[24px] md:space-y-[32px]">
          <h2 className="text-[34px] md:text-[48px] font-bold text-[#FFFFFF] leading-[64px]">
            FirstBank Academy
          </h2>
          <p className="text-[14px] md:text-[16px] max-w-[700px] text-[#FFFFFF] leading-[26px] md:leading-[32px] font-normal">
            The FirstBank Technology Academy is an arm of the FirstBank
            Corporate University that was designed to drive upskilling, cross
            skilling, and hands-on learning of our tech talents. The Academy
            offers trainees the full spectrum of tech competencies such as
            Application Support and Development, cyber security and
            infrastructure, and Data science.
          </p>

          <Button btnText={"Read More"} type={"aboutBtn"} />
        </div>

        <div className="hidden w-max md:block lg:mt-[126px] lg:ml-[-60px] ">
          <img src={firstbank} alt="firstbank academy building" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
