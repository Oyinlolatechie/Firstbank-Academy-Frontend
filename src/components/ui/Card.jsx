// eslint-disable-next-line react/prop-types
const Card = ({ picture, trackName, aboutTrack }) => {
  return (
    <>
      <div className="bg-primary w-[266px] h-[376px] rounded-[8px] p my-16">
        <div className="h-full">
          <img src={picture} alt="" />
          <div className="pt-5 px-[14px]">
            <h3 className="text-[20px] text-[#FFFFFF] font-[500] leading-[32px]">
              {trackName}
            </h3>
            <p className="text-[14px] text-[#FFFFFF] leading-[22.4px] font-[400] tracking-[1%] pt-1 ">
              {aboutTrack}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
