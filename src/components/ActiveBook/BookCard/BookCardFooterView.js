import React from "react";

const BookCardFooterView = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    let pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push("...");
      }
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages.map((page, index) => (
      <button
        key={index}
        onClick={() => typeof page === "number" && onPageChange(page)}
        className={`px-3 py-1 mx-1 rounded-md transition-colors text-sm ${
          page === currentPage
            ? "bg-green-600 text-white"
            : "bg-gray-200 hover:bg-green-100"
        }`}
        disabled={typeof page !== "number"}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="px-3 py-1 mx-1 rounded-md transition-colors text-sm bg-gray-200 hover:bg-green-100 cursor-pointer"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        className="px-3 py-1 mx-1 rounded-md transition-colors text-sm bg-gray-200 hover:bg-green-100 cursor-pointer"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default BookCardFooterView;
