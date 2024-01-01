import "./TopBarStyles.css";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { SiFacebook } from "react-icons/si";
const TopBar = () => {
  return (
    <div className="h-[46px] bg-color">
      <div className="max-w-[1137px] mx-auto flex items-center justify-between h-full">
        <ul className="flex items-center justify-between  h-full w-2/5 ">
          <li className="flex items-center gap-2 text-white">
            <span className="bg-white rounded-full p-[3px] base-color">
              <HiOutlineEnvelope />
            </span>
            info@whiteoakscabins.org
          </li>
          <li className="flex items-center gap-2 text-white mr-8 tracking-wide">
            <span className="bg-white rounded-full p-[3px] base-color">
              <BsTelephone />
            </span>
            765.265.1839
          </li>
        </ul>
        <ul className="pr-[18px]">
          <li className="flex items-center text-white text-lg">
            FOLLOW US
            <span className="p-1 text-white text-2xl">
              <SiFacebook />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
