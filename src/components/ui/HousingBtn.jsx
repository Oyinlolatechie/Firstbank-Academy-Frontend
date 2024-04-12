/* eslint-disable react/prop-types */
const HousingBtn = ({
  text,
  border,

  template,
}) => {
  const buttonTemplate = {
    primary: "bg-[#F0BD2D] w-[104px] h-[36px] rounded-[24px] text-[#003B65]",
    secondary:
      "bg-[#FFFFFF] border-[#003B65] w-[104px] h-[36px] rounded-[24px] text-[#003B65]",
  };

  return (
    <button className={` ${buttonTemplate[template]} border-${border}`}>
      {text}
    </button>
  );
};

export default HousingBtn;
