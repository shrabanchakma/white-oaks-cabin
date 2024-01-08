import LightGallery from "lightgallery/react/Lightgallery.es5";
import wave from "../../../../assets/Waves/wave01.svg";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { useEffect, useState } from "react";
import DefaultHeading from "../../../Shared/DefaultHeading/DefaultHeading";
const CabinGallery = () => {
  const [cabinImages, setCabinImages] = useState([]);

  useEffect(() => {
    fetch("./CabinGallery.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].images.length);
        setCabinImages(data[0].images);
      });
  }, []);

  const generateImages = () => {
    return cabinImages?.map((image, idx) => (
      <div
        key={idx}
        href={image}
        className="group border-white border-[5px] overflow-hidden relative"
      >
        <img
          className="w-[280px] h-[267px] object-cover ease-in-out duration-500  scale-100 group-hover:scale-110 "
          src={image}
        ></img>
        <div className="transition-opacity bg-black absolute inset-0 opacity-0  group-hover:opacity-20 backdrop-blur-md "></div>
      </div>
    ));
  };

  return (
    <>
      <img src={wave} alt="" />
      <div className="min-h-[1903px] bg-[#FF4B4B]" speed={500}>
        <DefaultHeading
          heading="photo gallery"
          subHeading="our cabins"
          isInverted={true}
        />
        <LightGallery
          elementClassNames={
            "mt-[75px] grid grid-cols-4 gap-[15px] w-3/5 mx-auto"
          }
          plugins={[lgThumbnail, lgZoom]}
        >
          {generateImages()}
        </LightGallery>
      </div>
    </>
  );
};

export default CabinGallery;
