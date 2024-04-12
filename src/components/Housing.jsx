import HousingBtn from "./ui/HousingBtn";
import HousingCard from "./ui/HousingCard";
import hotelImage1 from "../assets/hotel-image-01.png";
import hotelImage2 from "../assets/hotel-image-02.png";
import hotelImage3 from "../assets/hotel-image-03.png";
import walkingIcon from "../assets/walking-vector.svg";
import star from "../assets/star-vector.svg";

const Housing = () => {
  return (
    <>
      <div className="border-2 border-amber-500 text-center py-14">
        <h2 className="text-[48px] text-primary font-[700] leading-[48px] w-fit mx-auto">
          Housing & Accommodation
        </h2>
        <p className="text-[18px] leading-[28.8px] font-[400] mt-[16px]">
          Secure your ideal home today with our housing solutions available.
        </p>

        {/* <div className="my-[43px] justify-between w-[464px]  mx-auto flex">
          <HousingBtn text={"All"} border={1} template={"primary"} />
          <HousingBtn text={"Hostels"} border={2} template={"secondary"} />
          <HousingBtn text={"Lodges"} border={2} template={"secondary"} />
          <HousingBtn text={"Hotel"} border={2} template={"secondary"} />
        </div> */}

        <div className="flex justify-between w-[1107px] pt-10 mx-auto">
          <HousingCard
            cardImage={hotelImage1}
            star={star}
            walkingIcon={walkingIcon}
            hotelName="WHITE BROOKS"
            address="2 Abebe Village Rd, Lagos."
            time="5mins"
            availableRooms="Available Rooms"
            availableNumber="05"
            textColor={"green"}
            bgColor={"bgGreen"}
          />
          <HousingCard
            cardImage={hotelImage2}
            star={star}
            walkingIcon={walkingIcon}
            hotelName="WHITE BROOKS"
            address="2 Abebe Village Rd, Lagos."
            time="5mins"
            availableRooms="Available Rooms"
            availableNumber="20"
            textColor={"yellow"}
            bgColor={"bgYellow"}
          />
          <HousingCard
            cardImage={hotelImage3}
            star={star}
            walkingIcon={walkingIcon}
            hotelName={"WHITE BROOKS"}
            address={"2 Abebe Village Rd, Lagos."}
            time={"5mins"}
            availableRooms={"Available Rooms"}
            availableNumber={"01"}
            textColor={"red"}
            bgColor={"bgRed"}
          />
        </div>
      </div>
    </>
  );
};

export default Housing;
