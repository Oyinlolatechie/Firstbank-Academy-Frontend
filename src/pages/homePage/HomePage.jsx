import HeroBanner from "../../components/HeroBanner";
import AboutUs from "../../components/AboutUs";
import FAQ from "../../components/FAQ";
import TrackSection from "../../components/TrackSection";
import Attendance from "../../components/Attendance";
import Housing from "../../components/Housing";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <TrackSection />
      <Attendance />
      <Housing />
      <FAQ />
    </>
  );
};

export default HomePage;
