import usePagination from "@/hooks/usePagination";

const useBookCard = (books = []) => {
  const { currentData, currentPage, totalPages, nextPage, prevPage, goToPage } =
    usePagination(books, () => 4);

  return {
    currentData,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  };
};

export default useBookCard;
