import DefaultButton from "../../../Shared/DefaultButton/DefaultButton";

const Banner = () => {
  return (
    <div
      className="hero h-[800px]"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content h-full">
        <div className="flex flex-col items-center justify-center space-y-3 mb-40  h-full">
          <div className="">
            {/* text */}
            <h3 className="text-2xl font-bold tracking-widest mb-1">
              WELCOME TO
            </h3>
            <h1 className="text-[53px] font-bold">
              COMFORTABLE AND COZY CABINS
            </h1>
            <p className="w-[960px] mt-2 font-medium">
              Looking for a getaway in the woods? White Oaks Cabins offers the
              perfect escape. Our secluded cabins allow you to disconnect from
              the city and reconnect with nature. Come and unwind in the beauty
              of the great outdoors.
            </p>
          </div>
          <div className="flex items-end justify-evenly border  h-1/5 w-1/2">
            {/* button */}
            <div className="mb-5  space-x-10">
              <DefaultButton text="OUR CABINS" />
              <DefaultButton text="CONTACT US" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
