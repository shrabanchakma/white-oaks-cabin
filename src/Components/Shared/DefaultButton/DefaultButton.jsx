import { Link } from "react-router-dom";
import "./DefaultButtonStyle.css";
const DefaultButton = ({ text }) => {
  return (
    <button className="btn-bg text-white font-normal bg-[#dd3238] border-none rounded-3xl defaultButtonStyle">
      <Link to={"/our-cabins"}>{text}</Link>
    </button>
  );
};

export default DefaultButton;
