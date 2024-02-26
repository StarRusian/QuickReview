import React from "react";

const Pagination = ({ productsPerPage, totalProducts, paginate, activePage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="default-pagination lab-ui">
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            console.log("Previous clicked");
            if (activePage > 1) {
              paginate(activePage - 1);
            }
          }}
        >
          <i className="icofont-rounded-left"></i>
        </a>
      </li>
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item ${number === activePage ? "bg-warning" : ""}`}
        >
          <button
            onClick={() => {
              console.log(`Page ${number} clicked`);
              paginate(number);
            }}
            className="bg-transparent"
          >
            {number}
          </button>
        </li>
      ))}
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            console.log("Next clicked");
            if (activePage < pageNumbers.length) {
              paginate(activePage + 1);
            }
          }}
        >
          <i className="icofont-rounded-right"></i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
