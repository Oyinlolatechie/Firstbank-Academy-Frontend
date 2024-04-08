import HeroBanner from "../../components/HeroBanner";
import AboutUs from "../../components/AboutUs";
import FAQ from "../../components/FAQ";
import TrackSection from "../../components/TrackSection";
import Attendance from "../../components/Attendance";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <TrackSection />
      <Attendance />
      <FAQ />
    </>
  );
};

export default HomePage;
