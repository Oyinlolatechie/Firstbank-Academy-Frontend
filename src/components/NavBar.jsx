import firstBankLogo from "../assets/firstbank.svg";
import searchIcon from "../assets/search.svg";
import Button from "../components/ui/Button";

const NavBar = () => {
  const aboutRef = document.querySelector("#aboutUs");
  const homeRef = document.querySelector("#hero");
  const trackRef = document.querySelector("#tracks");
  const faqRef = document.querySelector("#faq");
  return (
    <>
      <div className="h-[61px] bg-primary"></div>

      <div className="w-full border-b-2 border-[#0000003B] bg-[#FFFFFF] flex px-[100px] h-[100px] place-items-center">
        <div className="w-[105px] mr-[110px]">
          <img className="w-full" src={firstBankLogo} alt="firstbank logo" />
        </div>
        <ul className="flex w-[30%] h-fit justify-between mr-[298px] font-medium text-primary">
          <li>
            <button
              onClick={() => {
                homeRef.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                aboutRef.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                trackRef.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Tracks
            </button>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <button
              onClick={() => {
                faqRef.scrollIntoView({ behavior: "smooth" });
              }}
            >
              FAQs
            </button>
          </li>
        </ul>

        <div className="flex">
          <div className="flex border-[1px] border-[#002855B2] rounded-[20px] w-[234px] h-[40px] px-2 mr-[43px]">
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
    </>
  );
};

export default NavBar;
