/* eslint-disable react/prop-types */
import { GiCancel } from "react-icons/gi";

const MobileMenu = ({ closePanel }) => {
  return (
    <div className="md:hidden">
      <div className="fixed inset-0 top-0 left-0 h-screen w-full backdrop-blur-sm"></div>
      <div className="fixed inset-0 top-0 left-0 w-full bg-primary opacity-80 h-full z-20 ">
        <div className="w-full flex justify-end p-8">
          <GiCancel size="2.8em" color="white" onClick={closePanel} />
        </div>
        <ul className="flex flex-col w-full text-center text-2xl text-[white]">
          <li className=" mt-20 mb-6 border-b">
            <button
              onClick={() => {
                const homeRef = document.querySelector("#hero");
                homeRef?.scrollIntoView({ behavior: "smooth" });
                closePanel();
              }}
            >
              Home
            </button>
          </li>
          <li className="mb-6 border-b">
            <button
              onClick={() => {
                const aboutRef = document.querySelector("#aboutUs");
                aboutRef?.scrollIntoView({ behavior: "smooth" });
                closePanel();
              }}
            >
              About Us
            </button>
          </li>
          <li className="mb-6 border-b">
            <button
              onClick={() => {
                const trackRef = document.querySelector("#tracks");
                trackRef.scrollIntoView({ behavior: "smooth" });
                closePanel();
              }}
            >
              Tracks
            </button>
          </li>
          <li className="mb-6 border-b">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="mb-6 border-b">
            <button
              onClick={() => {
                const faqRef = document.querySelector("#faq");
                faqRef.scrollIntoView({ behavior: "smooth" });
                closePanel();
              }}
            >
              FAQs
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
