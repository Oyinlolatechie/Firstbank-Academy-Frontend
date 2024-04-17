import { useRef } from "react";
import heroVector from "../assets/heroVector.png";
import Button from "./ui/Button";

const HeroBanner = () => {
  const heroRef = useRef(null);
  return (
    <>
      <div
        ref={heroRef}
        id="hero"
        className="w-screen flex px-[20px] md:px-[30px] lg:px-[120px] py-[20px] sm:pt-[60px] justify-between"
      >
        <div className=" w-[560px]">
          <h2 className="text-[56px] text-h2bg font-medium leading-[72px] py-[10px]">
            Welcome to <br className="lg:block hidden" />
            FirstBank Technology Academy
          </h2>
          <p className="text-base text-pbg leading-[32px] pb-[24px]">
            FirstBank Technology Academy, in the Corporate University, fosters
            tech skills, cross-skilling, and hands-on learning, ensuring a
            continuous pipeline of passionate talent in Nigeria.
          </p>
          <Button btnText={"Explore"} type={"heroBtn"} />
        </div>

        <div className="hidden sm:block">
          <img src={heroVector} alt="vector of diverse shapes" />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
