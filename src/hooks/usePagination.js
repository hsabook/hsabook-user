import { useState, useEffect } from "react";

const usePagination = (data, getItemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    if (typeof window !== "undefined") {
      setItemsPerPage(getItemsPerPage());
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [getItemsPerPage]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    setTotalPages(Math.ceil(data.length / itemsPerPage));
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }

    setCurrentData(
      data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    );
  }, [data, currentPage, totalPages, itemsPerPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    currentData,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    itemsPerPage,
  };
};

export default usePagination;
