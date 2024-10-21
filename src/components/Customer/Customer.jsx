import React from "react";
import "./Customer.css";
import data from "../db/users"
import { GoArrowDown } from "react-icons/go";
import { HiArrowSmallUp } from "react-icons/hi2";
import { CiFilter } from "react-icons/ci";
import TableData from "./TableData";
import { useState, useEffect } from "react";


const Customer = () => {

  const [theData, setTheData] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState(data);
  const [selected, setSelected] = useState("")


 

  const handleClick = (plan) =>{
    setSelected(plan);
  }

  const handleInput = (e) =>{
    setInputValue(e.target.value);
  }

  

  useEffect(()=>{

    let anotherData = data;
    if (selected){
       anotherData = anotherData.filter(({ plan }) => {
         return plan === selected;
       });
      //  setTheData(filteredData);
    }

    if (inputValue){
         anotherData = anotherData.filter((item) => {
           return (
             item.fullName.toLowerCase().indexOf(inputValue.toLowerCase()) !==
             -1
           );
         });
    }

  
    setFiltered(anotherData)
  }, [inputValue, selected])
  



  return (
    <>
      <div className="table-container">
        <div className="table-nav">
          <div className="table-left">
            <h1>Customer List</h1>
          </div>
          <div className="table-right">
            <button onClick={() => handleClick("team")}>Team</button>
            <button onClick={() => handleClick("basic")}>Basic</button>
            <button onClick={() => handleClick("premium")}>Premium</button>
            <button onClick={() => handleClick("")}>All</button>
            <input
              type="text"
              placeholder="Search"
              value={inputValue}
              onChange={handleInput}
            />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>FULLNAME - MAIL</th>
              <th className="hide">
                BILLING DATE <HiArrowSmallUp /> <GoArrowDown />{" "}
              </th>
              <th>PLAN</th>
              <th>AMOUNT</th>
              <th className="hide">TOTAL USERS</th>
              <th>DETAILS</th>
              {/* <th></th> */}
            </tr>
          </thead>

          <TableData theData={filtered} />
        </table>
      </div>
    </>
  );
};

export default Customer;
