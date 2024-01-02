import DefaultButton from "../../../Shared/DefaultButton/DefaultButton";
import Waves from "../../../Shared/Waves/Waves";

const Banner = () => {
  return (
    <div
      className="hero h-[800px] relative"
      style={{
        backgroundImage:
          "url(https://static.wixstatic.com/media/446d92_50b2f8aa794b47c0b2f4ddd5e4f75811~mv2.jpg/v1/fill/w_1903,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/446d92_50b2f8aa794b47c0b2f4ddd5e4f75811~mv2.jpg)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content h-full">
        <div className="flex flex-col items-center justify-center space-y-3 mb-40  h-full text-white">
          <div>
            {/* text */}
            <h3 className="text-2xl font-bold tracking-widest mb-1 ">
              WELCOME TO
            </h3>
            <h1 className="text-[53px] font-bold ">
              COMFORTABLE AND COZY CABINS
            </h1>
            <p className="w-[960px] mt-2 font-medium">
              Looking for a getaway in the woods? White Oaks Cabins offers the
              perfect escape. Our secluded cabins allow you to disconnect from
              the city and reconnect with nature. Come and unwind in the beauty
              of the great outdoors.
            </p>
          </div>
          <div className="flex items-end justify-evenly h-1/5 w-1/2">
            {/* button */}
            <div className="mb-5  space-x-10">
              <DefaultButton text="OUR CABINS" />
              <DefaultButton text="CONTACT US" />
            </div>
          </div>
        </div>
      </div>
      <Waves />
    </div>
  );
};

export default Banner;
