import React from "react";
import PropTypes from "prop-types";
import useSearchResult from "./useSearchResult";

export const ICONS = {
  "menu-book": {
    icon: "fa-solid fa-book-open",
    bgColor: "#F7FED9",
  },
  book: { icon: "fa-solid fa-book", bgColor: "#E9F5FF" },
  question: { icon: "fa-solid fa-circle-question", bgColor: "#FFF4E5" },
};

const SearchResultView = ({ item, type, closeSearch }) => {
  const { handleClick, itemHeader } = useSearchResult(item, type);
  return (
    <div
      onClick={handleClick}
      className="flex items-center cursor-pointer border-b mb-2 py-2.5 hover:bg-gray-100"
    >
      <div
        className="w-14 h-14 flex items-center justify-center"
        style={{
          backgroundColor: ICONS[type]?.bgColor || "#E5E5E5",
          borderRadius: "10px",
        }}
      >
        <i className={`${ICONS[type]?.icon} text-xl text-gray-700`}></i>
      </div>
      <div className="flex-1 flex flex-col justify-center ml-4">
        <span className="font-bold text-[16px] leading-5">{itemHeader()}</span>
        <div className="flex items-center text-sm text-gray-500 leading-8">
          <span>{`ID: ${item.code_id}`}</span>
        </div>
      </div>
      <div className="flex items-center justify-center w-6 h-6">
        {item?.active ? (
          <i className="fa-solid fa-play text-green-500"></i>
        ) : (
          <i className="fa-solid fa-lock text-red-500"></i>
        )}
      </div>
    </div>
  );
};

SearchResultView.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  closeSearch: PropTypes.func,
};

export default SearchResultView;
