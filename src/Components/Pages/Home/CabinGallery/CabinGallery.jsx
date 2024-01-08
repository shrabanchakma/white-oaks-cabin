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
      <div key={idx} href={image}>
        <img
          className="w-[280px] h-[267px] object-cover  border-white border-[5px]"
          src={image}
        ></img>
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
