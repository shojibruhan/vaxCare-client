import React from "react";

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === i + 1 ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
