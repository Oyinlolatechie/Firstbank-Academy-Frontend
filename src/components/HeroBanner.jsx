import heroVector from "../assets/heroVector.svg";

const HeroBanner = () => {
  return (
    <>
      <div className="flex px-[107px] py-[60px] justify-between">
        <div className=" w-[560px]">
          <h2 className="text-[56px] text-h2bg font-medium leading-[72px] py-[10px]">
            Welcome to <br />
            FirstBank Technology Academy
          </h2>
          <p className="text-base text-pbg leading-[32px] pb-[24px]">
            FirstBank Technology Academy, in the Corporate University, fosters
            tech skills, cross-skilling, and hands-on learning, ensuring a
            continuous pipeline of passionate talent in Nigeria.
          </p>
          <button className=" bg-btnbg w-[133px] h-[40px] rounded-[20px]">
            Explore
          </button>
        </div>

        <div>
          <img src={heroVector} alt="vector of diverse shapes" />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
