import Navbar from "../../../Shared/Navbar/Navbar";
import TopBar from "../../../Shared/TopBar/TopBar";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Banner />
      <AboutUs />
      <Services />
    </div>
  );
};

export default Home;
