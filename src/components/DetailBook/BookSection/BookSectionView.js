import React, { useState } from "react";
import PropTypes from "prop-types";

const BookSection = ({ data, onClick }) => {
  if (!data || data.length === 0) {
    return <div> Không có dữ liệu</div>;
  }

  return (
    <>
      {data.map((item) => (
        <BookSectionItem key={item.id} item={item} onClick={onClick} />
      ))}
    </>
  );
};

const BookSectionItem = ({ item, onClick }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    if (Array.isArray(item.children) && item.children.length > 0) {
      setExpanded((prev) => !prev);
    }
  };
  const handleClick = () => {
    if (item.active) {
      onClick(item.id);
    }
  };

  return (
    <div className="mb-2">
      <div
        className={`flex items-center cursor-pointer p-2.5 rounded-lg shadow-md bg-white max-h-[70px] overflow-hidden`}
        onClick={handleClick}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleToggle();
          }}
          className="flex items-center justify-center w-5 h-5 mr-1"
        >
          {Array.isArray(item.children) && item.children.length > 0 && (
            <i
              className={`fas fa-chevron-down transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            ></i>
          )}
        </div>

        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-200">
          <i className="fas fa-file-alt text-gray-600"></i>
        </div>

        <div className="flex flex-1 flex-col ml-4 text-gray-800 overflow-hidden">
          <span className="sm:text-[18px] text-sm text-[#262626] truncate">
            {item.title}
          </span>
          {item.code_id && (
            <span className="text-[12px] text-[#1B1F26B8] truncate">
              {`ID: ${item.code_id}`}
            </span>
          )}
        </div>

        <div className="flex items-center justify-center w-6 h-6 mx-3">
          {item.active ? (
            <i className="fas fa-play text-green-600"></i>
          ) : (
            <i className="fas fa-lock text-red-600"></i>
          )}
        </div>
      </div>

      {expanded && item.children && (
        <div className="mt-2 ml-6 sm:ml-12">
          <BookSection data={item.children} onClick={onClick} />
        </div>
      )}
    </div>
  );
};

BookSection.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};

BookSectionItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BookSection;
