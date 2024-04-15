import { useState } from "react";
import firstBankLogo from "../assets/firstbank.svg";
import WebMenu from "./WebMenu";
import MobileMenu from "./MobileMenu";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="h-[61px] bg-primary"></div>
      <WebMenu />
      <div className="md:hidden flex justify-between w-full border-b-2 border-[#0000003B] bg-[#FFFFFF] px-[20px] h-[60px] place-items-center ">
        <div className="w-[100px] mr-[10px]">
          <img className="w-full" src={firstBankLogo} alt="firstbank logo" />
        </div>

        <IoMdMenu
          size="2em"
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        />
      </div>

      {isClicked && (
        <MobileMenu
          closePanel={() => {
            setIsClicked(!isClicked);
          }}
        />
      )}
    </>
  );
};

export default NavBar;
