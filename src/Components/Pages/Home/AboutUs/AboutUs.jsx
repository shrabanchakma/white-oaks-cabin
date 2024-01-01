import DefaultButton from "../../../Shared/DefaultButton/DefaultButton";
import "./AboutUsStyles.css";
const AboutUs = () => {
  return (
    <div className="h-[670px] max-w-6xl mx-auto flex items-center">
      <div className="w-1/2">
        {/* about us details */}
        <h3 className="font-bold text-lg">ABOUT US</h3>
        <h1 className="font-bold text-4xl">
          COMFORTABLE <span className="text-[#dd3238]">CABINS</span>
        </h1>
        <p>
          At White Oaks Cabins, we believe that getting back to nature should be
          a comfortable and enjoyable process. Our cabins feature all the
          amenities you need for a comfortable stay while providing a rustic
          atmosphere that truly brings you in touch with nature. Whether you’re
          sipping your morning coffee on the porch or enjoying a picnic under
          the trees, our cabins are the perfect place to unwind and reconnect
          with your loved ones.
        </p>
        <DefaultButton text="OUR CABINS" />
      </div>
      <div className="z-10">
        {/* about us images */}

        <img
          className="border-[10px] border-white img-shadow relative  top-[70px] left-[70px] -z-20"
          src="https://static.wixstatic.com/media/446d92_913d0e977c8840589144a22895fb57d6~mv2.jpg/v1/fill/w_455,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/gondola-cable-car-mountains_edited.jpg"
          alt=""
        />

        <img
          className="border-[10px] border-white img-shadow -z-10 relative -top-[65px]"
          src="https://static.wixstatic.com/media/446d92_f74459badd62440d9a03cae712666579~mv2.jpg/v1/crop/x_0,y_29,w_1237,h_833/fill/w_336,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a0F4P00000RjCb6UAF_edited.jpg"
          alt=""
        />
        <img
          className="border-[10px] border-white img-shadow relative -top-[205px] left-[240px]"
          src="https://static.wixstatic.com/media/446d92_297a3381851e4d4badad152867923680~mv2.jpeg/v1/crop/x_0,y_73,w_1101,h_918/fill/w_215,h_176,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a0F4P00000RjDBuUAN1.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
