import firstBankLogo from "../assets/firstbank.svg";
import searchIcon from "../assets/search.svg";

const NavBar = () => {
  return (
    <>
      <div className="h-[61px] bg-[#003B65]"></div>

      <div className="w-full flex px-[100px] h-[100px] place-items-center">
        <div className="w-[105px] mr-[110px]">
          <img className="w-full" src={firstBankLogo} alt="firstbank logo" />
        </div>
        <ul className="flex w-[30%] h-fit justify-between mr-[298px] font-medium text-[#003B65]">
          <li>Home</li>
          <li>About Us</li>
          <li>Tracks</li>
          <li>Gallery</li>
          <li>FAQs</li>
        </ul>

        <div className="flex">
          <div className="flex border-[1px] border-[#002855B2] rounded-[20px] w-[234px] h-[40px] px-2 mr-[43px]">
            <div className="w-[26px] pt-[10px] pr-2">
              <img className="w-full" src={searchIcon} alt="" />
            </div>
            <form action="/search" method="GET">
              <input
                className="h-full w-[90%] italic border-none"
                type="search"
                name="navbar_search"
                placeholder="Search..."
                id=""
              />
            </form>
          </div>

          <button className="w-[95px] h-[40px] bg-[#F0BC26] rounded-[20px] font-[600] text-[#003B65]">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
