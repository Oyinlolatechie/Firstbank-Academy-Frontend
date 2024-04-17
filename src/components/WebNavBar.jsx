import firstBankLogo from "../assets/firstbank.svg";
import searchIcon from "../assets/search.svg";
import Button from "./ui/Button";

const WebNavBar = () => {
  return (
    <div className="hidden md:block">
      <div className="w-screen border-b-2 border-[#0000003B] flex justify-between md:px-[50px] lg:px-[100px] h-[100px] place-items-center">
        <div className="md:w-[105px]">
          <img className="w-full" src={firstBankLogo} alt="firstbank logo" />
        </div>
        <ul className="flex md:w-[50%] lg:w-[35%] h-fit justify-between font-medium text-primary">
          <li>
            <button
              onClick={() => {
                const homeRef = document.querySelector("#hero");
                homeRef?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const aboutRef = document.querySelector("#aboutUs");
                aboutRef?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const trackRef = document.querySelector("#tracks");
                trackRef.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Tracks
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const homeRef = document.querySelector("#gallery");
                homeRef?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Gallery
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const faqRef = document.querySelector("#faq");
                faqRef.scrollIntoView({ behavior: "smooth" });
              }}
            >
              FAQs
            </button>
          </li>
        </ul>

        <div className="flex">
          <div className="md:hidden lg:flex border-[1px] border-[#002855B2] rounded-[20px] w-[234px] h-[40px] px-2 mr-[43px]">
            <div className="w-[26px] pt-[10px] pr-2">
              <img className="w-full" src={searchIcon} alt="search icon" />
            </div>
            <form action="/search" method="GET">
              <input
                className="h-full w-[90%] italic border-none leading-10 tracking-wider px-2"
                type="search"
                name="navbar_search"
                placeholder="Search..."
                id=""
              />
            </form>
          </div>
          <Button btnText={"Login"} type={"navBtn"} />
        </div>
      </div>
    </div>
  );
};

export default WebNavBar;
