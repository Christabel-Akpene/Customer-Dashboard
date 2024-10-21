import React from "react";
import "./Pagination.css";
import data from "../db/users";
import { useState } from "react";
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPage = 5;
  const lastIndex = currentPage * recordsPage;
  const firstIndex = lastIndex - recordsPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);


    function prevPage() {}

    function nextPage() {}

    function changePage(){

    }


  return (
    <div className="btn-container">
      <button className="btn">← Previous</button>
      <button className="btn">1</button>
      <button className="btn">2</button>
      <button className="btn">...</button>
      <button className="btn">6</button>
      <button className="btn">7</button>
      <button className="btn">Next →</button>

      {/* <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prevPage}>
              Prev
            </a>
          </li>

          {numbers.map((num, index) => {
            <li
              className={`page-item ${currentPage === num ? `active` : ""} `}
              key={index}
            >
              <a href="#" className="page-item" onClick={()=>changePage(num)}>
                {num}
              </a>
            </li>;
          })}

          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>

        </ul>
      </nav> */}
    </div>
  );
};

export default Pagination;
