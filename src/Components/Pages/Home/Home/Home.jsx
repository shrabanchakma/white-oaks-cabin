import Navbar from "../../../Shared/Navbar/Navbar";
import TopBar from "../../../Shared/TopBar/TopBar";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Banner />
      <AboutUs />
    </div>
  );
};

export default Home;
