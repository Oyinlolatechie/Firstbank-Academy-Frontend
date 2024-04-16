/* eslint-disable react/prop-types */
const Button = ({ btnText, type }) => {
  const btnTemplate = {
    navBtn: "w-[95px] hover:bg-primary hover:text-[#F0BC26]",
    heroBtn: "w-[133px] hover:bg-primary hover:text-[#F0BC26]",
    aboutBtn: "w-[133px] hover:text-[#FFFFFF]",
    trackBtn: "w-[146px] hover:bg-primary hover:text-[#F0BC26]",
  };

  return (
    <>
      <button
        className={`${btnTemplate[type]} h-[40px] bg-btnbg  rounded-[20px] font-[600] text-primary  transition-colors duration-300 ease-in-out`}
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
