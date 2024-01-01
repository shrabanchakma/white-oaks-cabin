import { Link, NavLink } from "react-router-dom";
import DefaultButton from "../DefaultButton/DefaultButton";
import "./NavbarStyles.css";
const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-option-active" : "nav-option nav-option-hover"
          }
          to={"/"}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-option-active" : "nav-option nav-option-hover"
          }
          to={"/about-us"}
        >
          ABOUT US
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-option-active" : "nav-option nav-option-hover"
          }
          to={"/testimonials"}
        >
          TESTIMONIALS
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-option-active" : "nav-option nav-option-hover"
          }
          to={"/blog"}
        >
          BLOG
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-option-active" : "nav-option nav-option-hover"
          }
          to={"/contact-us"}
        >
          CONTACT US
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 max-w-6xl mx-auto border flex justify-between">
        <div className="flex items-baseline">
          {/* small screen */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl hover:bg-white ">
            <img
              className="w-[100px]"
              src="https://static.wixstatic.com/media/446d92_5ad9bddad4824d36a3d57ef511535607~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/White%20Oaks%20Cabins.png"
            />
          </a>
        </div>
        <div className=" hidden lg:flex border ">
          <ul className="menu menu-horizontal ml-[85px] mb-1 flex items-center">
            {navlinks}
          </ul>
        </div>
        <div className="mr-[14px] mb-2">
          <DefaultButton text={"OUR CABINS"} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
