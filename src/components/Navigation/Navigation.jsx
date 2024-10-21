import React from "react";
import "./Navigation.css";
import flag from "../../assets/flag.png";
import { RiArrowDropDownLine } from "react-icons/ri";


const Navigation = () => {

  

  return (
    <>
      <div className="nav-container" >
        <nav id="nav"  >
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Statistics</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Customer</a>
            </li>
            <li>
              <a href="#">Review</a>
            </li>
            <li>
              <a href="#"> Settings</a>
            </li>
          </ul>
        </nav>

        <div className="country">
          <img src={flag} alt="Flag" width={20} height={15} />
          <p>GHA</p>
          <RiArrowDropDownLine className="dropdown" />
        </div>

      </div>
    </>
  );
};

export default Navigation;
