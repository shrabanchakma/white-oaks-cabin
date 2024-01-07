import { useEffect, useState } from "react";
import scribble from "../../../../assets/PaintScribble/paint-scribble.svg";
import scribbleFlipped from "../../../../assets/PaintScribble/paint-scribble-flipped.svg";
import icon from "../../../../assets/icons/icon-inverted.png";
import "./ServicesStyle.css";
import DefaultButton from "../../../Shared/DefaultButton/DefaultButton";
const Services = () => {
  const [cabins, setCabins] = useState([]);
  useEffect(() => {
    fetch("./cabins.json")
      .then((res) => res.json(res))
      .then((data) => {
        const remainingCabins = data.slice(0, 3);
        const modifiedData = remainingCabins.map((cabin) => ({
          ...cabin,
          details: {
            "image01-description01": cabin.details[
              "image01-description01"
            ].slice(0, cabin.details["image01-description01"].length / 3),
          },
        }));
        setCabins(modifiedData);
      });
  }, []);
  return (
    <>
      <img src={scribble} alt="" />
      <div className="h-[900px] bg-[#ff4b4b]">
        <div className="text-white text-center pt-[50px]">
          <h3 className=" font-semibold text-[16px]">SERVICES</h3>
          <h1 className="text-[40px] font-bold">AVAILABLE CABINS</h1>
          <div className="w-full flex justify-center ">
            <img className="" src={icon} alt="" />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-3 w-3/5 mx-auto">
          {cabins.map((cabin) => (
            <div
              key={cabin.id}
              className="card w-[350px] h-full bg-base-100 shadow-xl rounded-none hover:cursor-pointer hover:scale-105 ease-in-out duration-500"
            >
              <figure className=" border-[6px] border-white img-shadow">
                <img
                  src={cabin.image01}
                  alt="cabin"
                  className="min-h-[250px] w-[338px]  object-cover"
                />
              </figure>

              <div className="card-body items-center text-center p-1">
                <h2 className="font-bold text-2xl text-[#ff4b4b] mt-5">
                  {cabin.title}
                </h2>
                <p>{cabin.details["image01-description01"]}</p>
                <p className="font-bold text-2xl text-[#ff4b4b]">
                  $147 Avg. / night
                </p>
                <div className="card-actions pb-4 ">
                  <DefaultButton text="BOOK NOW" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-[32px]">
          <button className="secondary-btn uppercase ">
            view all of our available cabins
          </button>
        </div>
        <img src={scribbleFlipped} alt="" />
      </div>
    </>
  );
};

export default Services;
