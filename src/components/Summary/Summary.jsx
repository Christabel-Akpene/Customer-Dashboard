import React from "react";
import "./Summary.css";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlinePerson } from "react-icons/md";
import { HiArrowSmallUp } from "react-icons/hi2";
import { TbGift } from "react-icons/tb";
import { LuPackage2 } from "react-icons/lu";
import { GoArrowDown } from "react-icons/go";

const Summary = () => {


  

  return (
    <>
      <div className="summary-container">
        <div className="customer">
          <div className="customer-left">
            <p>Customer</p>
          </div>
          <div className="customer-right">
            <MdOutlineFileDownload className="download" />
            <input type="date" />
            <button className="add">Add Customer + </button>
          </div>
        </div>

        <div className="summary">
          <div className="summary-details">
            <div className="title">
              <div className="title-left">
                <RiTeamLine className="icon" /> <p>Total Customer</p>
              </div>
              <div className="title-right">
                <div>...</div>
              </div>
            </div>
            <div className="details">
              <span>470</span>{" "}
              <span className="percentage">
                3.90% <HiArrowSmallUp />
              </span>
              {""}
              <span>from last week</span>
            </div>
          </div>
          <div className="summary-details">
            <div className="title">
              <div className="title-left">
                <LuPackage2
                  className="icon"
                  style={{ color: "#A45EE5", background: "#E39FF6" }}
                />{" "}
                <p>Basic Plan</p>
              </div>
              <div className="title-right">
                <div>...</div>
              </div>
            </div>
            <div className="details">
              <span>17</span>{" "}
              <span
                className="percentage"
                style={{ color: "#A45EE5", background: "#E39FF6" }}
              >
                3.90% <HiArrowSmallUp />
              </span>
              {""}
              <span>from last week</span>
            </div>
          </div>
          <div className="summary-details">
            <div className="title">
              <div className="title-left">
                <TbGift
                  className="icon"
                  style={{ color: "#F26B8A", background: "#FC94AF" }}
                />{" "}
                <p>Team Plan</p>
              </div>
              <div className="title-right">
                <div>...</div>
              </div>
            </div>
            <div className="details">
              <span>63</span>{" "}
              <span
                className="percentage"
                style={{ color: "#F26B8A", background: "#FC94AF" }}
              >
                3.90% <HiArrowSmallUp />
              </span>
              {""}
              <span>from last week</span>
            </div>
          </div>

          <div className="summary-details">
            <div className="title">
              <div className="title-left">
                <MdOutlinePerson
                  className="icon"
                  style={{ color: "#1E90FF", background: "#82EEFD" }}
                />{" "}
                <p>Premium Plan</p>
              </div>
              <div className="title-right">
                <div>...</div>
              </div>
            </div>
            <div className="details">
              <span>4</span>{" "}
              <span
                className="percentage"
                style={{ color: "#1E90FF", background: "#82EEFD" }}
              >
                3.90% <GoArrowDown />
              </span>
              {""}
              <span>from last week</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
