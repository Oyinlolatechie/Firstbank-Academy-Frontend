/* eslint-disable react/prop-types */
const Button = ({ btnText }) => {
  return (
    <>
      <button className=" bg-btnbg w-[133px] h-[40px] rounded-[20px]">
        {btnText}
      </button>
    </>
  );
};

export default Button;
