import phone from "../assets/smart-Phone.png";
import playstore from "../assets/playstore.svg";

const Attendance = () => {
  return (
    <>
      <div className="bg-[#FFFFFF]">
        <h2 className="font-[700] text-[48px] text-primary w-[398px] leading-[57.6px] mt-[53px] mx-auto">
          Get the Academy Attendance App
        </h2>

        <p className="font-[400] text-[16px] leading-[32px] w-[895px] mt-[32px] mb-[56px] mx-auto text-center">
          Efficient attendance tracking system with advanced biometric
          (Fingerprint) technology. This innovative system eliminates <br /> the
          need for physical tickets, offering a seamless dining experience, and
          empowers students <br /> to track attendance, fostering success and
          personal well-being.
        </p>

        <div className="w-fit mx-auto">
          <img src={phone} alt="mockup of three phone images" />
        </div>

        <div className="flex justify-center py-14">
          <button className="bg-[#F0BD2D] font-[600] text-[14px] w-[307px] h-[40px] rounded-[20px] flex justify-center items-center mr-4">
            <span>
              <img src={playstore} alt="" />
            </span>
            Download on Google Play Store
          </button>
          <button className="border-2 border-[#0000008F] text-[#000000] w-[231px] h-[40px] rounded-[20px] ">
            Download on Apple Store
          </button>
        </div>
      </div>
    </>
  );
};

export default Attendance;
