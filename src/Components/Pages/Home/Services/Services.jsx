import { useEffect } from "react";
import scribble from "../../../../assets/PaintScribble/paint-scribble.svg";
import icon from "../../../../assets/icons/icon-inverted.png";
const Services = () => {
  useEffect(() => {
    fetch("./cabins.json")
      .then((res) => res.json(res))
      .then((data) => console.log(data.length));
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
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
