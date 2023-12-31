import { Link } from "react-router-dom";
import "./DefaultButtonStyle.css";
const DefaultButton = ({ text }) => {
  return (
    <button className="justColorRed">
      <Link to={"/our-cabins"} className="justColorRed">
        {text}
      </Link>
    </button>
  );
};

export default DefaultButton;
