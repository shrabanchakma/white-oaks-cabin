import DefaultButton from "../../../Shared/DefaultButton/DefaultButton";

const Banner = () => {
  return (
    <div
      className="hero h-[900px] relative"
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
      <svg
        className="absolute bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="0.2"
          d="M0,224L26.7,208C53.3,192,107,160,160,160C213.3,160,267,192,320,197.3C373.3,203,427,181,480,192C533.3,203,587,245,640,245.3C693.3,245,747,203,800,202.7C853.3,203,907,245,960,240C1013.3,235,1067,181,1120,154.7C1173.3,128,1227,128,1280,154.7C1333.3,181,1387,235,1413,261.3L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <svg
        className=" absolute -bottom-14"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,32L40,74.7C80,117,160,203,240,224C320,245,400,203,480,208C560,213,640,267,720,256C800,245,880,171,960,160C1040,149,1120,203,1200,213.3C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Banner;
