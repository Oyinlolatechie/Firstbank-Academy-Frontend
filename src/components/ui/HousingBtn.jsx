/* eslint-disable react/prop-types */
const HousingBtn = ({
  text,
  border,
  borderColor,
  background,
  width,
  height,
  radius,
}) => {
  return (
    <button
      className={`w-[${width}px] h-[${height}px] rounded-[${radius}px] border-${border} border-[${borderColor}] bg-[${background}] text-[${borderColor}]`}
    >
      {text}
    </button>
  );
};

export default HousingBtn;
