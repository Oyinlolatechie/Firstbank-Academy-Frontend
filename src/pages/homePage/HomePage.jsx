import HeroBanner from "../../components/HeroBanner";
import AboutUs from "../../components/AboutUs";
import FAQ from "../../components/FAQ";
import TrackSection from "../../components/TrackSection";
import Attendance from "../../components/Attendance";
import Housing from "../../components/Housing";
import Gallery from "../../components/Gallery";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <TrackSection />
      <Attendance />
      <Housing />
      <Gallery />
      <FAQ />
    </>
  );
};

export default HomePage;
