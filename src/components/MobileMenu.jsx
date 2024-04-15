const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <div className="fixed inset-0 top-0 left-0 h-screen w-full backdrop-blur-sm"></div>
      <div className="fixed inset-0 top-0 left-0 w-full bg-primary opacity-80 h-full z-20">
        <ul className="flex flex-col w-full text-center text-2xl text-[white]">
          <li className=" mt-20 mb-6 border-b">
            <button
              onClick={() => {
                const homeRef = document.querySelector("#hero");
                homeRef?.scrollIntoView({ behavior: "smooth" });
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
