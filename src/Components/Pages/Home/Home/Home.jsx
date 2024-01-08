import Navbar from "../../../Shared/Navbar/Navbar";
import TopBar from "../../../Shared/TopBar/TopBar";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import CabinGallery from "../CabinGallery/CabinGallery";
import FeatureSectionOne from "../FeatureSectionOne/FeatureSectionOne";
import FeatureSectionTwo from "../FeatureSectionTwo/FeatureSectionTwo";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Banner />
      <AboutUs />
      <Services />
      <FeatureSectionOne />
      <CabinGallery />
      <FeatureSectionTwo />
    </div>
  );
};

export default Home;
