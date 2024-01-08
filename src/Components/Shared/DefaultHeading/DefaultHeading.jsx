import icon from "../../../assets/icons/icon.png";
import iconInverted from "../../../assets/icons/icon-inverted.png";
const DefaultHeading = ({ heading, subHeading, isInverted }) => {
  return (
    <div className="text-white text-center pt-[50px] uppercase">
      <h3 className=" font-semibold text-[16px] ">{subHeading}</h3>
      <h1 className="text-[40px] font-bold">{heading}</h1>
      <div className="w-full flex justify-center ">
        {isInverted ? (
          <img className="" src={iconInverted} alt="" />
        ) : (
          <img className="" src={icon} alt="" />
        )}
      </div>
    </div>
  );
};

export default DefaultHeading;
