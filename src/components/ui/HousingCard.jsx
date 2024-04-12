/* eslint-disable react/prop-types */
const HousingCard = ({
  cardImage,
  star,
  walkingIcon,
  hotelName,
  address,
  time,
  availableRooms,
  availableNumber,
  textColor,
  bgColor,
}) => {
  const cardTheme = {
    green: "text-[#F0BD2D]",
    yellow: "text-[#23B031]",
    red: "text-[#D11111]",
    bgGreen: "bg-[#F0BD2D26]",
    bgYellow: "bg-[#23B03126]",
    bgRed: "bg-[#D1111126]",
  };
  return (
    <>
      <div className="w-[313px] h-[344px] bg-[#FFFFFF] shadow-lg">
        <div className="w-[313px] h-[217px] rounded-[8px] relative">
          <img src={cardImage} alt="card's image" />

          <span className="absolute flex z-10 top-8 right-6 w-[58px] h-[28px] rounded-[14px] bg-[#FFFFFF]">
            <img className="w-[16px] mx-1" src={star} alt="" />
            <p className="font-[700] text-[17px]">4.5</p>
          </span>
        </div>

        <div>
          <span className="flex justify-between text-[18px] text-[#003B65] font-[500] pt-[15px] px-[24px]">
            <h3 className=" leading-[32px]">{hotelName}</h3>

            <span className="flex">
              <img src={walkingIcon} alt="" />
              <p className="ml-2 pt-1">{time}</p>
            </span>
          </span>

          <p className="text-[12px] text-start pl-[24px] leading-[12.76px] text-[#000000] opacity-[40%]">
            {address}
          </p>

          <span
            className={`flex justify-between px-[24px] py-[23px] font-[600] ${cardTheme[textColor]}`}
          >
            <p> {availableRooms} </p>

            <span
              className={`w-[34px] h-[32px] rounded-[2px] ${cardTheme[bgColor]} align-middle pt-1`}
            >
              <p>{availableNumber}</p>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default HousingCard;
