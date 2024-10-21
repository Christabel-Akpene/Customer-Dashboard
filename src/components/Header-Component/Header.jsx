import React from "react";
import "./Header.css";
import { IoIosNotifications } from "react-icons/io";
import pic from "../../assets/profile-pic.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Header = () => {

   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

   const openSidebar = () => {
     setOpenSidebarToggle(true);
   };

   const closeSidebar = () =>{
    setOpenSidebarToggle(false)
   }

  //  {openSidebarToggle && console.log("I clicked you.")}


 
   

  const [showDropdown, setShowDropdown] = useState(false);

  const show = ()=>{
      setShowDropdown(!showDropdown);
  }

 

  return (
    <>
      <div className="header-container">
        <div className="left">
          <div className="description">
            <h4>O</h4>
            <div className="work">
              <p>ORGANIZED</p>
              <p>ManageAnything</p>
            </div>
          </div>

          <div className="input-field">
            {/* <FaSearch className="icon" /> */}
            <input type="text" placeholder="Search" disabled />
          </div>
        </div>
        <div className="right">
          <div className="notification">
            <IoIosNotifications className="notification-icon" />
            <span></span>
          </div>
          <img src={pic} alt="" width={50} height={50} />

          <div className="openDropdown">
            <IoMdArrowDropdown className="dropdown-icon" onClick={show} />
            {showDropdown ? (
              <ul className="menu">
                <li>
                  <a href="#">View Profile</a>
                </li>
                <li>
                  <a href="#">Logout</a>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
        <MdMenu className="close" onClick={openSidebar} />
        {openSidebarToggle && (
          <nav className="sidebar">
            <IoMdClose onClick={closeSidebar}  className="close-icon" />

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
        )}
      </div>
    </>
  );
};

export default Header;
