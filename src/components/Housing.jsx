import HousingBtn from "./ui/HousingBtn";

const Housing = () => {
  return (
    <>
      <div className="text-center py-14">
        <h2 className="text-[48px] text-primary font-[700] leading-[48px] w-fit mx-auto">
          Housing & Accommodation
        </h2>
        <p className="text-[18px] leading-[28.8px] font-[400] mt-[16px]">
          Secure your ideal home today with our housing solutions available.
        </p>

        <div className="my-[43px] justify-between w-[464px]  mx-auto flex">
          <HousingBtn
            text={"All"}
            border={1}
            background={"#F0BD2D"}
            borderColor={"#003B65"}
            width={104}
            height={36}
            radius={24}
          />
          <HousingBtn
            text={"Hostels"}
            border={2}
            background={"#F8F9F9"}
            borderColor={"#003B65"}
            width={104}
            height={36}
            radius={24}
          />
          <HousingBtn
            text={"Lodges"}
            border={2}
            background={"#F8F9F9"}
            borderColor={"#003B65"}
            width={104}
            height={36}
            radius={24}
          />
          <HousingBtn
            text={"Hotel"}
            border={2}
            background={"#F8F9F9"}
            borderColor={"#003B65"}
            width={104}
            height={36}
            radius={24}
          />
        </div>

        <div>
          <div>
            <img src="" alt="" />
            <div>
              <span>
                <h3>White Brooks</h3>

                <span>
                  <img src="" alt="" />
                  <p>5mins</p>
                </span>
              </span>

              <p>2 Abebe Village Rd, Lagos.</p>

              <span>
                <p>Available Rooms</p>

                <span>
                  <p>05</p>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Housing;
